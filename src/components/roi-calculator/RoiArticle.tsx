import { readFileSync } from "fs";
import { join } from "path";

export function RoiArticle() {
  const html = readFileSync(
    join(process.cwd(), "src/data/roi-article.html"),
    "utf8",
  );

  return (
    <div
      className="section-home-mod-4a roi-article"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
