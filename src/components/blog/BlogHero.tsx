import Image from "next/image";
import Link from "next/link";
import { BlogFeaturedPost } from "@/components/blog/BlogPostCard";
import { blogData } from "@/data/blog";

export function BlogHero() {
  const { featured, recent, logos } = blogData;

  return (
    <section className="w-full px-10 xl:px-[70px]">
      <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-10 lg:grid-cols-[minmax(0,780px)_420px] lg:justify-between lg:gap-0">
        <div className="min-w-0 w-full">
          <BlogFeaturedPost post={featured} />
        </div>

        <aside className="hidden w-full lg:block lg:w-[420px]">
          <Image
            src={logos.giant}
            alt="Writer’s room"
            width={420}
            height={213}
            priority
            className="mb-0 h-auto w-full max-w-[420px]"
          />
          <p className="m-0 border-b border-[#e4e7ed] pb-[18px] text-[13px] font-semibold uppercase leading-[15.6px] tracking-[2px] text-black">
            Recent
          </p>
          <ul className="mt-[18px] list-none p-0">
            {recent.map((item) => (
              <li key={item.href} className="mb-[21px] last:mb-0">
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
                  <span className="grow pl-[18px] text-[14px] font-normal leading-[20px] text-black">
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
