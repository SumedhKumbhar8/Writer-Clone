import Image from "next/image";
import Link from "next/link";
import type { EngineeringPost } from "@/data/engineering";
import { engineeringData } from "@/data/engineering";

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
        <strong className="font-semibold uppercase tracking-[0.08em]">
          {author}
        </strong>
      </p>
    </div>
  );
}

function FeaturedPost({ post }: { post: EngineeringPost }) {
  return (
    <article className="flex w-full flex-col items-start">
      <Link href={post.href} className="block w-full">
        <Image
          src={post.image}
          alt={post.title}
          width={780}
          height={439}
          priority
          className="aspect-[780/439] w-full object-cover"
        />
      </Link>
      <div className="mb-[25px] mt-[35px]">
        <p className="m-0 text-[11px] font-normal leading-[11px] text-[#4f4f4f]">
          {post.readTime}
        </p>
      </div>
      <h2 className="eng-graphik m-0 w-full pr-[30px] text-[41px] font-medium leading-[45px] text-black">
        <Link href={post.href} className="text-inherit">
          {post.title}
        </Link>
      </h2>
      {post.excerpt ? (
        <p className="eng-graphik mb-[25px] mt-[15px] w-full text-[16px] font-normal leading-[26px] text-black">
          {post.excerpt}
        </p>
      ) : null}
      <AuthorRow author={post.author} avatar={post.avatar} size={54} padLeft={24} />
    </article>
  );
}

export function EngineeringHero() {
  const { featured, recent } = engineeringData;

  return (
    <section className="w-full pb-[100px] pt-0">
      <div className="mx-auto w-full max-w-[1310px] px-[15px] xl:px-[15px]">
        <div className="flex flex-col lg:flex-row">
          <div className="min-w-0 w-full lg:w-[780px]">
            <FeaturedPost post={featured} />
          </div>

          <aside className="mt-12 hidden w-full pl-0 lg:mt-0 lg:block lg:w-[500px] lg:pl-[80px]">
            <h1 className="eng-formula mb-10 max-w-[420px] text-[88px] font-light leading-[0.9] text-black">
              Writer Engineering
            </h1>

            <p className="m-0 text-[24px] font-semibold uppercase leading-[1.4] tracking-[2px] text-black">
              Recent
            </p>

            <ul className="mt-[30px] list-none p-0">
              {recent.map((item) => (
                <li key={item.href} className="mb-[21px] last:mb-0">
                  <span className="mb-1.5 block text-[11px] font-normal leading-[11px] text-[#4f4f4f]">
                    {item.readTime}
                  </span>
                  <Link
                    href={item.href}
                    className="eng-graphik block text-[18px] font-medium leading-[23.4px] text-black"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function EngineeringPostCard({ post }: { post: EngineeringPost }) {
  return (
    <article className="flex w-full flex-col">
      <Link href={post.href} className="block">
        <Image
          src={post.image}
          alt={post.title}
          width={413}
          height={232}
          className="aspect-[16/9] w-full object-cover"
        />
      </Link>
      <div className="mb-[15px] mt-[25px]">
        <p className="m-0 text-[11px] font-normal leading-[11px] text-[#4f4f4f]">
          {post.readTime}
        </p>
      </div>
      <h2 className="eng-graphik m-0 pr-[30px] text-[18px] font-medium leading-[23px] text-black">
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

export function EngineeringGrid() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1310px] px-[15px] pb-[100px]">
        <div className="-mx-[10px] -mb-[100px] flex flex-wrap">
          {engineeringData.posts.map((post) => (
            <div
              key={post.href + post.title}
              className="mb-[100px] w-full px-[10px] md:w-1/2 xl:w-1/3"
            >
              <EngineeringPostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
