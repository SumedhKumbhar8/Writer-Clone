import Image from "next/image";
import Link from "next/link";
import { retailPageData } from "@/data/retail";

export function RetailWhyWriterSection() {
  const { whyWriter } = retailPageData;

  return (
    <section className="bg-white py-[79px]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <Image
            src={whyWriter.writerLogo}
            alt="WRITER"
            width={100}
            height={24}
            className="mb-6 h-6 w-auto"
          />
          <h5 className="mb-4 text-[14px] font-semibold uppercase tracking-[4.2px] text-black">
            {whyWriter.eyebrow}
          </h5>
          <h2 className="mx-auto max-w-[600px] text-[clamp(28px,3.5vw,40px)] font-normal leading-[120%] text-black">
            {whyWriter.title}
          </h2>
        </div>

        <div className="grid gap-[22px] md:grid-cols-2">
          {whyWriter.items.map((item, i) => (
            <article
              key={i}
              className="flex flex-col rounded-[16px] border border-[#E4E7ED] bg-white p-8 shadow-[0_2px_0_0_#F3F3F3]"
            >
              <div className="mb-4">
                <Image
                  src={item.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-auto"
                />
              </div>
              <h4 className="mb-3 text-[clamp(20px,2vw,25px)] font-medium leading-[120%] text-[#252525]">
                {item.title}
              </h4>
              <p className="mb-4 flex-1 text-[16px] leading-[150%] text-[#333]">
                {item.description}
              </p>
              {item.cta && (
                <Link
                  href={item.cta.href}
                  className="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold text-black underline transition-opacity hover:opacity-70"
                >
                  {item.cta.label}
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path
                      d="M10.293 0.293L9 1.586L12.414 5H0V7H12.414L9 10.414L10.293 11.707L15.293 6.707C15.683 6.317 15.683 5.683 15.293 5.293L10.293 0.293Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
