import test from "node:test";
import assert from "node:assert/strict";

import {
  DEFAULT_CONTENT_PATH,
  getPageBySlug,
  loadSiteContent,
  validateSiteContent,
} from "../src/site-content.mjs";

test("default content loads with required metadata", () => {
  const content = loadSiteContent(DEFAULT_CONTENT_PATH);

  assert.ok(content.site.websiteUrl.startsWith("https://"));
  assert.ok(content.pages.length >= 1);
  assert.ok(getPageBySlug(content, "overview"));
});

test("validateSiteContent rejects duplicate slugs", () => {
  assert.throws(
    () =>
      validateSiteContent({
        site: {
          name: "Example",
          tagline: "Example",
          websiteUrl: "https://example.com",
          docsUrl: "https://example.com/docs",
          pricingUrl: "https://example.com/pricing",
          contactUrl: "https://example.com/contact",
          supportEmail: "hello@example.com",
        },
        pages: [
          {
            slug: "overview",
            title: "Overview",
            description: "Overview page",
            mimeType: "text/markdown",
            text: "# One",
          },
          {
            slug: "overview",
            title: "Overview Two",
            description: "Duplicate slug",
            mimeType: "text/markdown",
            text: "# Two",
          },
        ],
      }),
    /Duplicate page slug/
  );
});
