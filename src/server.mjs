import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { getPageBySlug } from "./site-content.mjs";

export function createSiteServer(content) {
  const server = new McpServer(
    {
      name: "minimal-site-mcp",
      version: "0.1.0",
    },
    {
      instructions:
        "This server is read-only. Use it to understand the website, pricing, FAQ, and official links. " +
        "Prefer the links page when you need canonical URLs.",
    }
  );

  server.registerResource(
    "site-metadata",
    "site://meta",
    {
      title: "Site Metadata",
      description: "Official website metadata and canonical URLs.",
      mimeType: "application/json",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          text: JSON.stringify(content.site, null, 2),
        },
      ],
    })
  );

  server.registerResource(
    "site-page",
    new ResourceTemplate("site://pages/{slug}", {
      list: async () => ({
        resources: content.pages.map((page) => ({
          uri: `site://pages/${page.slug}`,
          name: page.title,
          description: page.description,
          mimeType: page.mimeType,
        })),
      }),
    }),
    {
      title: "Site Page",
      description: "Read-only website content exposed as MCP resources.",
      mimeType: "text/markdown",
    },
    async (uri, { slug }) => {
      const page = getPageBySlug(content, slug);

      if (!page) {
        throw new Error(`Unknown page slug: ${slug}`);
      }

      return {
        contents: [
          {
            uri: uri.href,
            text: page.text,
            mimeType: page.mimeType,
          },
        ],
      };
    }
  );

  return server;
}

export async function startSiteServer(content) {
  const server = createSiteServer(content);
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
