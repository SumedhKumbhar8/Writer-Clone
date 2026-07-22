import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { CategoryPostsGrid } from "@/components/blog/CategoryPostsGrid";
import { humansInTheLoopData } from "@/data/humans-in-the-loop";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Humans in the loop articles - Writer's Room",
  description: humansInTheLoopData.description,
  path: "/blog/category/humans-in-the-loop",
});

export default function HumansInTheLoopPage() {
  const { title, description, posts } = humansInTheLoopData;

  return (
    <div className="min-h-screen bg-white text-black">
      <BlogHeader />

      <div className="mx-auto w-full max-w-[1310px] px-[15px] pb-[100px]">
        <h1
          className="m-0 px-0 pb-[25px] pt-[10px] text-center text-[clamp(48px,8.1vw,117px)] font-[300] leading-[0.85] text-black"
          style={{ fontFamily: "var(--font-formula)" }}
        >
          {title}
        </h1>
        <div className="mx-auto flex max-w-full justify-center">
          <div className="w-full max-w-[764px] px-3 text-center lg:px-3">
            <p
              className="my-[32px] text-[20px] font-normal leading-[32px] text-black"
              style={{ fontFamily: "var(--font-graphik)" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      <CategoryPostsGrid posts={posts} />
      <BlogNewsletter variant="centered" />
    </div>
  );
}
