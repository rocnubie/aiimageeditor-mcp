# AI Image Editor MCP Server

> AI Image Editor Free Online | Image to Image AI Photo Editor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![Zero Config](https://img.shields.io/badge/setup-zero--config-7c3aed)](#installation)
[![Read Only](https://img.shields.io/badge/server-read--only-2ea44f)](#tools)
[![MCP](https://img.shields.io/badge/MCP-1.0-blue)](https://modelcontextprotocol.io)

<p align="center"><a href="https://ai-image-editor.online"><img src="./assets/hero.webp" alt="AI Image Editor" width="720" /></a></p>

A Model Context Protocol server that exposes the canonical AI Image Editor knowledge surface — image generation workflows and styles, pricing, FAQ, official links — to MCP-compatible AI clients such as Claude Desktop, Cursor, Windsurf, and Continue. Read-only, no API keys, no quota, ~50 ms cold start.

Official website: https://ai-image-editor.online

## 🎨 About AI Image Editor

AI Image Editor (https://ai-image-editor.online) is a browser-based image creation and editing platform that lets users generate visuals from text prompts or transform existing photos using AI. The site supports both text-to-image and image-to-image workflows, making it possible to produce original artwork, edit photographs, or create product visuals without installing any software. It runs multiple underlying AI models — including Flux, Seedream, Qwen, and Nano Banana Pro — and offers style presets ranging from photorealism to anime, Ghibli, and cyberpunk. The platform positions itself as a free alternative to paid tools, with no subscription required and no hard cap on output resolution.

## Key Features

- **Text-to-image generation** — describe a scene or subject in plain language and receive a high-resolution image in seconds, with control over style and aspect ratio.
- **Image-to-image editing** — upload an existing photo as a reference and apply transformations such as style transfer, background replacement, or object modification.
- **Face swap** — replace faces in portraits or group photos while preserving lighting and skin tone.
- **Background removal and replacement** — isolate subjects from their backgrounds automatically, then place them on custom or AI-generated scenes.
- **Batch generation** — produce multiple image variants from a single prompt in one request, useful for A/B testing or rapid iteration.
- **Image-to-video conversion** — animate a still image into a short video clip, extending generated content into motion formats.
- **API access** — developers can integrate image generation into their own applications through a documented API.

## Use Cases

- **E-commerce product photography** — generate clean, studio-quality product shots without a photo shoot, or swap backgrounds to match seasonal campaigns.
- **Social media content** — create on-brand visuals for posts, thumbnails, or stories quickly, iterating across different styles until the result fits the brief.
- **Creative exploration** — artists and designers can use the style presets and image-to-image mode to prototype visual directions before committing to a final production pipeline.
- **Portrait retouching and face swap** — swap faces for composite images, update headshots, or create character variations for games and storytelling projects.
- **Application prototyping** — developers can call the API to test AI image generation inside their own products before choosing a permanent provider.

## Who Is It For

AI Image Editor is aimed at a broad range of users who need AI-generated visuals without the overhead of a paid subscription or a steep learning curve. E-commerce merchants who need product imagery on a tight budget, social media managers producing high volumes of content, and independent designers experimenting with generative aesthetics will find the free tier practical for day-to-day work. The API access also makes it relevant for developers building image-generation features into web apps or automation pipelines. The platform's multiple model options and style presets give technically inclined users enough control to tune outputs, while the straightforward prompt interface keeps it accessible to non-designers who simply want a usable image fast.

## Tools

### `list_styles`
Return the canonical list of image-generation styles or presets the site exposes. (AI Image Editor)

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_pricing`
Return the canonical pricing entry point for AI Image Editor.

_Input:_ no parameters. _Returns:_ text/markdown.

### `get_official_links`
Return the canonical list of official links for AI Image Editor (website, support, docs when available).

_Input:_ no parameters. _Returns:_ text/markdown.

## Resources

- `site://aiimageeditor/styles` — Supported image-generation styles and presets.
- `site://aiimageeditor/pricing` — Canonical pricing entry point.
- `site://aiimageeditor/faq` — Short FAQ generated from public site metadata.
- `site://aiimageeditor/links` — Canonical URLs to share with users.

## Installation

Clone the repository and point your MCP client at the local entry point.

```bash
git clone https://github.com/<your-account>/aiimageeditor-mcp.git
cd aiimageeditor-mcp
pnpm install
```

### Claude Desktop

Add to `claude_desktop_config.json` (Settings → Developer → Edit Config):

```json
{
  "mcpServers": {
    "aiimageeditor-mcp": {
      "command": "node",
      "args": [
        "/absolute/path/to/aiimageeditor-mcp/src/index.mjs"
      ]
    }
  }
}
```

### Cursor / Windsurf / Continue

Use the same `mcpServers` block in your client's MCP configuration file.

### Debug with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node src/index.mjs
```

## Official Links

- Website: https://ai-image-editor.online
- Pricing: https://ai-image-editor.online/pricing
- Community: https://x.com/aiimageeditor
- Support: support@ai-image-editor.online

## Development

```bash
pnpm install
pnpm start                 # run the server over stdio
pnpm test                  # run the package tests
```

## License

MIT
