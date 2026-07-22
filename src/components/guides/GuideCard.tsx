import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/data/guides";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="group relative mb-10 min-w-0 basis-full max-[479px]:mx-auto max-[479px]:w-[264px] min-[480px]:basis-1/2 min-[480px]:max-w-[50%] min-[760px]:basis-1/3 min-[760px]:max-w-[33.333%] min-[1118px]:px-[27px]">
      <div className="relative z-[4] rounded">
        <Link
          href={guide.href}
          className="absolute inset-0 z-[3]"
          aria-label={guide.title}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute right-[25px] top-5 h-11 w-11 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                "url(/images/guides/ico-arrow-link.svg) center / 44px no-repeat",
            }}
          />
        </Link>

        <figure className="relative m-0 mb-5 overflow-hidden rounded transition-transform duration-300 ease-out group-hover:-translate-y-2">
          <div className="relative w-full pt-[56.25%]">
            <Image
              src={guide.image}
              alt={guide.alt || guide.title}
              fill
              sizes="(max-width:479px) 264px, (max-width:759px) 50vw, 264px"
              className="object-cover"
            />
          </div>
        </figure>

        <h3 className="my-2.5 text-[16px] font-semibold leading-[1.5] text-black">
          {guide.title}
        </h3>
        <p className="my-2.5 text-[12px] font-normal leading-[2] text-[#2d2d2d]">
          {guide.description}
        </p>
      </div>
    </article>
  );
}
