import Image from "next/image";
import Link from "next/link";
import { BlogFeaturedPost } from "@/components/blog/BlogPostCard";
import { blogData } from "@/data/blog";

export function BlogHero() {
  const { featured, recent, logos } = blogData;

  return (
    <section className="dc-container-xl dc-sec-bb section-pb-sm">
      <div className="row-blog-main">
        <div className="col-blog-main-l">
          <BlogFeaturedPost post={featured} />
        </div>

        <aside className="col-blog-main-r hidden xl:block">
          <div className="dc-b-m-logo" style={{ marginTop: -1 }}>
            <Image
              src={logos.giant}
              alt="Writer’s room"
              width={420}
              height={213}
              priority
              className="mb-0 h-auto w-full max-w-[420px]"
            />
          </div>
          <p className="col-blog-main-r__title m-0 border-b border-[#e4e7ed] pb-[18px] text-[13px] font-semibold uppercase leading-[15.6px] tracking-[2px] text-black">
            Recent
          </p>
          <ul className="blog-post-recent-wrap mt-[18px] list-none p-0">
            {recent.map((item) => (
              <li key={item.href} className="blog-post-recent-item mb-[21px] flex last:mb-0">
                <Link href={item.href} className="flex items-start no-underline">
                  <span className="relative block h-[56px] w-[100px] shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      width={100}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="blog-recent-post-title grow pl-[18px] text-[14px] font-normal leading-[20px] text-black" style={{ fontFamily: "var(--font-graphik)" }}>
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
