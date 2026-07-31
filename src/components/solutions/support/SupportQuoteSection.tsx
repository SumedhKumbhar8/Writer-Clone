import Image from "next/image";
import Link from "next/link";
import { supportPageData } from "@/data/support";

export function SupportQuoteSection() {
  const { quote } = supportPageData;

  return (
    <section className="bg-white py-[60px]">
      <div className="container-default-sm">
        <div className="flex flex-col items-center text-center">
          <blockquote className="max-w-[700px] text-[clamp(20px,2.5vw,25px)] font-normal leading-[1.52] text-black font-serif">
            {quote.text}
          </blockquote>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="h-[62px] w-[62px] overflow-hidden rounded-full">
              <Image
                src={quote.authorPhoto}
                alt={quote.author}
                width={62}
                height={62}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-[16px] font-semibold text-black">
                {quote.author}
              </p>
              <p className="text-[14px] font-normal text-[#333]">
                {quote.title}
              </p>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-6">
            <Image
              src={quote.companyLogo}
              alt="Uber"
              width={100}
              height={35}
              className="h-auto w-auto max-h-[35px]"
            />
            <Link
              href={quote.ctaHref}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#333] no-underline transition-opacity hover:opacity-70"
            >
              <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#E4E7ED] transition-all duration-200 hover:bg-black group-hover:bg-black">
                <svg width="16" height="7" viewBox="0 0 16 7" fill="none" className="text-black transition-colors duration-200 hover:text-white">
                  <path d="M10.293 0.293L9 1.586L12.414 5H0V7H12.414L9 10.414L10.293 11.707L15.293 6.707C15.683 6.317 15.683 5.683 15.293 5.293L10.293 0.293Z" fill="currentColor" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
