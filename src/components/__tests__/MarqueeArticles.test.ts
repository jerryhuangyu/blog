import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, test } from "vitest";
import { blog } from "../MarqueeArticles";

function getAllHrefs(blog: { href: string }[]): string[] {
  return blog.map((item) => item.href);
}
describe("MarqueeArticles blog hrefs", () => {
  test("each href should map to an existing article file", () => {
    expect(blog).toBeDefined();

    const hrefs = getAllHrefs(blog);
    const articlesDir = path.resolve(process.cwd(), "articles");

    for (const href of hrefs) {
      const relativePath = href.replace(/^\/blog\/?/, ""); // Remove `/blog/` or `/blog`
      const articlePath = path.join(articlesDir, `${relativePath}.mdx`);
      const normalizedPath = path.normalize(articlePath);
      const exists = existsSync(normalizedPath);

      expect(
        exists,
        `Missing article file for href "${href}": expected file at "${normalizedPath}"`,
      ).toBe(true);
    }
  });
});
