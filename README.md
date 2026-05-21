# AI Image Editor MCP

A minimal, read-only MCP for AI Image Editor.

This package is generated from the MSA multi-site system and is built for one very specific job:
- provide a real MCP that can be installed and indexed
- keep the setup simple with local `stdio`
- avoid backend integration and API quota costs
- send users back to the official AI Image Editor website

Official website: https://ai-image-editor.online

## About AI Image Editor

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

## Core Site Functions

- Image generation and editing workflows for prompts, references, and visual iteration.
- Video generation workflows for text-to-video, image-to-video, and creative motion tasks.
- Public pricing and plan information that helps users compare offers before they sign up.
- Curated inspiration pages that help users discover styles, examples, and prompt directions.
- Curated video inspiration pages that help users find motion ideas and reference outputs.

## Why This Site Is Good

- The MCP points users to the official AI Image Editor website instead of a third-party landing page.
- It keeps the package lightweight and easy to install because everything is static and read-only.
- It gives AI clients canonical links for docs, pricing, and support in one place.
- Useful when users want fast visual output without switching between multiple tools.
- Useful when users want one entry point for video creation instead of stitching together separate services.
- Useful when users want a quick path from product discovery to plan evaluation.

## Official Links

- Website: https://ai-image-editor.online
- Docs: https://ai-image-editor.online/docs
- Pricing: https://ai-image-editor.online/pricing
- Contact: https://x.com/aiimageeditor
- Support: support@ai-image-editor.online

## Site Metadata

- Site ID: aiimageeditor
- Site Name: AI Image Editor
- Default language: en
- Available languages: en, de, fr, ja, ko, es-es, ar
- Feature tags: `image-gen`, `video-gen`, `pricing`, `image-inspiration`, `video-inspiration`

## MCP Resources

- `site://meta`
- `site://pages/overview`
- `site://pages/pricing`
- `site://pages/faq`
- `site://pages/links`

## Why This MCP Is Useful

- It is a real MCP package, not just a README-only repository.
- It is lightweight enough for quick indexing and easy local installation.
- It gives AI clients structured access to official website context and links.
- It is simple to fork, publish, and maintain for directory submissions.

## Quick Start

Install dependencies:

```bash
pnpm install
```

Run the server:

```bash
pnpm start
```

Run tests:

```bash
pnpm test
```

## Claude Desktop Example

```json
{
  "mcpServers": {
    "aiimageeditor": {
      "command": "pnpm",
      "args": [
        "--dir",
        "/absolute/path/to/exports/aiimageeditor",
        "start"
      ]
    }
  }
}
```

## Directory Submission Notes

- Repo type: local `stdio` MCP
- Maintenance model: generated from the MSA multi-site source
- Primary goal: directory indexing, official link discovery, and lightweight client install
