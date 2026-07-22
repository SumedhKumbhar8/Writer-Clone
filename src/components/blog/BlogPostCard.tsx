import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

function CategoryMeta({
  category,
  categoryHref,
  readTime,
}: {
  category: string;
  categoryHref: string;
  readTime: string;
}) {
  return (
    <div className="flex items-center">
      <Link href={categoryHref}>
        <h5 className="m-0 mr-[3px] text-[11px] font-semibold uppercase leading-[10px] tracking-[0.88px] text-[#8847da]">
          {category}
        </h5>
      </Link>
      <span className="text-[10px] font-normal text-black">– {readTime}</span>
    </div>
  );
}

function AuthorRow({
  author,
  avatar,
  size = 41,
  padLeft = 15,
}: {
  author: string;
  avatar: string;
  size?: number;
  padLeft?: number;
}) {
  return (
    <div className="flex items-center justify-start">
      <figure className="m-0 shrink-0" style={{ maxWidth: size }}>
        <Image
          src={avatar}
          alt={author}
          width={size}
          height={size}
          className="block rounded-full object-cover"
          style={{ width: size, height: size }}
        />
      </figure>
      <p
        className="m-0 text-[12px] font-normal leading-[1.2] text-black"
        style={{ paddingLeft: padLeft }}
      >
        <strong className="font-semibold uppercase tracking-[0.08em]">{author}</strong>
      </p>
    </div>
  );
}

export function BlogPostCard({
  post,
  size,
}: {
  post: BlogPost;
  size: "md" | "sm";
}) {
  const isMd = size === "md";

  return (
    <article className="w-full">
      <Link href={post.href} className="block">
        <Image
          src={post.image}
          alt={post.imageAlt || post.title}
          width={isMd ? 620 : 413}
          height={isMd ? 349 : 232}
          className={`w-full object-cover ${isMd ? "aspect-[620/357]" : "aspect-[413/238]"}`}
        />
      </Link>
      <div className={`${isMd ? "mt-[30px] mb-5" : "mt-[25px] mb-[15px]"}`}>
        <CategoryMeta
          category={post.category}
          categoryHref={post.categoryHref}
          readTime={post.readTime}
        />
      </div>
      <h2
        className={`m-0 pr-[30px] font-medium text-black ${
          isMd
            ? "text-[25px] leading-[30px]"
            : "text-[18px] leading-[23px]"
        }`}
        style={{ fontFamily: "var(--font-graphik)" }}
      >
        <Link href={post.href} className="text-inherit">
          {post.title}
        </Link>
      </h2>
      <div className="mt-5">
        <AuthorRow author={post.author} avatar={post.avatar} size={41} padLeft={15} />
      </div>
    </article>
  );
}

export function BlogFeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="w-full">
      <Link href={post.href} className="block">
        <Image
          src={post.image}
          alt={post.imageAlt || post.title}
          width={780}
          height={439}
          priority
          className="aspect-[780/439] w-full object-cover"
        />
      </Link>
      <div className="mb-[25px] mt-[35px]">
        <CategoryMeta
          category={post.category}
          categoryHref={post.categoryHref}
          readTime={post.readTime}
        />
      </div>
      <h2 className="m-0 max-w-[780px] pr-[30px] text-[41px] font-medium leading-[45px] text-black">
        <Link href={post.href} className="text-inherit">
          {post.title}
        </Link>
      </h2>
      {post.excerpt ? (
        <p className="mb-[25px] mt-[15px] max-w-[780px] text-[16px] font-normal leading-[26px] text-black">
          {post.excerpt}
        </p>
      ) : null}
      <AuthorRow author={post.author} avatar={post.avatar} size={54} padLeft={24} />
    </article>
  );
}
