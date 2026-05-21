import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export function createServer() {
  const server = new McpServer(
    { name: "aiimageeditor-mcp", version: "0.1.0" },
    { instructions: "Read-only canonical knowledge for AI Image Editor (https://ai-image-editor.online). Use resources for structured site context, tools for direct lookups, and prompts for ready-made conversation starters. Defer to the official website for live actions." }
  );

  // ----- Resources --------------------------------------------------------

  server.registerResource(
    "styles",
    "site://aiimageeditor/styles",
    {
      title: "Styles",
      description: "Supported image-generation styles and presets.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# AI Image Editor — Styles\n\nBest Image AI Editor free online. Free AI photo editor for picture & image editing. Create with AI image generator, image to image AI & image text editor AI. \n\n## Site basics\n- Site ID: aiimageeditor\n- Website: https://ai-image-editor.online\n- Default locale: en\n- Locales: en, de, fr, ja, ko, es-es, ar\n\n## Public feature scope\n- image gen\n- video gen\n- pricing\n- image inspiration\n- video inspiration\n\n## Official website\nhttps://ai-image-editor.online",
        },
      ],
    })
  );

  server.registerResource(
    "pricing",
    "site://aiimageeditor/pricing",
    {
      title: "Pricing",
      description: "Canonical pricing entry point.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# AI Image Editor Pricing\n\nCanonical pricing page: https://ai-image-editor.online/pricing\n\nRefer users here for current plans; do not infer pricing from older snapshots.",
        },
      ],
    })
  );

  server.registerResource(
    "faq",
    "site://aiimageeditor/faq",
    {
      title: "FAQ",
      description: "Short FAQ generated from public site metadata.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# FAQ\n\n## What is this site?\nBest Image AI Editor free online. Free AI photo editor for picture & image editing. Create with AI image generator, image to image AI & image text editor AI. \n\n## Where can I get help?\nsupport@ai-image-editor.online\n\n## Which site is this?\naiimageeditor (AI Image Editor)",
        },
      ],
    })
  );

  server.registerResource(
    "links",
    "site://aiimageeditor/links",
    {
      title: "Official Links",
      description: "Canonical URLs to share with users.",
      mimeType: "text/markdown",
    },
    async (uri) => ({
      contents: [
        {
          uri: uri.href,
          mimeType: "text/markdown",
          text: "# Official Links\n\n- Website: https://ai-image-editor.online\n- Pricing: https://ai-image-editor.online/pricing\n- Community: https://x.com/aiimageeditor\n- Support: support@ai-image-editor.online",
        },
      ],
    })
  );

  // ----- Tools ------------------------------------------------------------

  server.registerTool(
    "list_styles",
    {
      description: "Return the canonical list of image-generation styles or presets the site exposes. (AI Image Editor)",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# AI Image Editor — Styles\n\nBest Image AI Editor free online. Free AI photo editor for picture & image editing. Create with AI image generator, image to image AI & image text editor AI. \n\nCanonical website: https://ai-image-editor.online" },
      ],
    })
  );

  server.registerTool(
    "get_pricing",
    {
      description: "Return the canonical pricing entry point for AI Image Editor.",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# AI Image Editor Pricing\n\nOfficial pricing: https://ai-image-editor.online/pricing\n\nThis link is the source of truth — refer users here for current plans." },
      ],
    })
  );

  server.registerTool(
    "get_official_links",
    {
      description: "Return the canonical list of official links for AI Image Editor (website, support, docs when available).",
      inputSchema: {},
    },
    async () => ({
      content: [
        { type: "text", text: "# Official Links\n\n- Website: https://ai-image-editor.online\n- Pricing: https://ai-image-editor.online/pricing\n- Community: https://x.com/aiimageeditor\n- Support: support@ai-image-editor.online" },
      ],
    })
  );

  // ----- Prompts ----------------------------------------------------------

  server.registerPrompt(
    "tell_me_about_aiimageeditor",
    {
      description: "Summarize what the site is, who it's for, and how it works. — AI Image Editor",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "Please summarize what AI Image Editor (https://ai-image-editor.online) is, who it's for, and how it works. Reference the canonical resources at site://aiimageeditor/styles and site://aiimageeditor/links for accuracy. Be concrete, not generic." },
        },
      ],
    })
  );

  server.registerPrompt(
    "try_image_style_aiimageeditor",
    {
      description: "Recommend a starting image-generation style for a stated goal. — AI Image Editor",
    },
    async () => ({
      messages: [
        {
          role: "user",
          content: { type: "text", text: "I want to generate an image with AI Image Editor (https://ai-image-editor.online). Ask me what the subject is, recommend one style preset from site://aiimageeditor/styles that fits, and write a prompt I can paste into the site." },
        },
      ],
    })
  );

  return server;
}

export async function startServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
