import { BlogPostCard } from "@/components/blog/BlogPostCard";
import type { CategoryPost } from "@/data/humans-in-the-loop";

function groupRows(posts: CategoryPost[]) {
  const rows: CategoryPost[][] = [];
  let i = 0;
  while (i < posts.length) {
    if (posts[i].size === "md") {
      rows.push(posts.slice(i, i + 2));
      i += 2;
    } else {
      rows.push(posts.slice(i, i + 3));
      i += 3;
    }
  }
  return rows;
}

export function CategoryPostsGrid({ posts }: { posts: CategoryPost[] }) {
  const rows = groupRows(posts);

  return (
    <div className="mx-auto w-full max-w-[1280px] px-0 max-[1310px]:px-[15px]">
      {rows.map((row, rowIndex) => {
        const isMd = row[0]?.size === "md";
        return (
          <div
            key={rowIndex}
            className={
              isMd
                ? "flex flex-wrap gap-x-10 gap-y-0"
                : "flex flex-wrap gap-x-5 gap-y-0 pt-[100px] -mb-[100px]"
            }
          >
            {row.map((post) => (
              <div
                key={post.href + post.title}
                className={
                  isMd
                    ? "mb-0 w-full min-w-0 md:w-[calc(50%-20px)]"
                    : "mb-[100px] w-full min-w-0 md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.34px)]"
                }
              >
                <BlogPostCard post={post} size={post.size} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
