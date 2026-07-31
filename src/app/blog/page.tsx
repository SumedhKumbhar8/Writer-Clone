import { BlogCategorySection } from "@/components/blog/BlogCategorySection";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { blogData } from "@/data/blog";
import { createPageMetadata } from "@/lib/seo";
import "@/styles/blog.css";

export const metadata = createPageMetadata({
  title: "WRITER's Room",
  description:
    "Enterprise AI blog — insights on AI agents, transformation, innovation, and the humans in the loop.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <BlogHeader />
      <div className="main-screen-blog dc-blog-style">
        <BlogHero />
      </div>
      {blogData.categories.map((category) => (
        <BlogCategorySection key={category.name} category={category} />
      ))}
      <BlogNewsletter />
    </div>
  );
}
