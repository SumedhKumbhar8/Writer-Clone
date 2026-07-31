import { AboutPage } from "@/components/about/AboutPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About WRITER | Founders, leadership, and values",
  description:
    "WRITER is where the world’s leading enterprises orchestrate AI-powered work. Meet our founders, leadership, and values.",
  path: "/about",
});

export default function About() {
  return (
    <main className="min-h-screen">
      <AboutPage />
    </main>
  );
}
