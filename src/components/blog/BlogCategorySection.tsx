import Link from "next/link";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import type { BlogCategory } from "@/data/blog";

export function BlogCategorySection({ category }: { category: BlogCategory }) {
  const [largeA, largeB, ...small] = category.posts;

  return (
    <section className="w-full px-10 pt-[100px] xl:px-[70px]">
      <div className="mb-10 flex flex-wrap items-center border-t border-[#e4e7ed] pt-10">
        <h3 className="m-0 text-[24px] font-semibold uppercase leading-[36px] tracking-[3px] text-black">
          <Link href={category.href} className="text-inherit no-underline">
            {category.name}
          </Link>
        </h3>
        <Link
          href={category.href}
          className="relative ml-3 whitespace-nowrap text-[11px] font-medium uppercase leading-4 tracking-[1.3px] text-black after:relative after:top-[-1px] after:ml-[29px] after:inline-block after:align-middle after:content-['→']"
        >
          See All
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-10">
        {largeA ? <BlogPostCard post={largeA} size="md" /> : null}
        {largeB ? <BlogPostCard post={largeB} size="md" /> : null}
      </div>

      {small.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[20px]">
          {small.slice(0, 3).map((post) => (
            <BlogPostCard key={post.href + post.title} post={post} size="sm" />
          ))}
        </div>
      ) : null}
    </section>
  );
}
