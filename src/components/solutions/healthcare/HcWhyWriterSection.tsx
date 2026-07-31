import Image from "next/image";
import Link from "next/link";
import { hcPageData } from "@/data/healthcare";

export function HcWhyWriterSection() {
  const { whyWriter } = hcPageData;

  return (
    <section className="bg-white py-[90px] max-lg:py-[60px]" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container-default-sm">
        <div className="mx-auto mb-[30px] flex max-w-[800px] flex-col items-center gap-[18px] text-center">
          <Image
            src={whyWriter.writerLogo}
            alt="WRITER"
            width={100}
            height={24}
            className="h-6 w-auto"
          />
          <h5 className="m-0 text-[14px] font-semibold uppercase tracking-[4.2px] text-black">
            {whyWriter.eyebrow}
          </h5>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-normal leading-[130%] text-black">
            {whyWriter.title}
          </h2>
        </div>

        <div className="flex flex-wrap gap-[22px] max-lg:gap-[12px]">
          {whyWriter.items.map((item, i) => (
            <article
              key={i}
              className="flex w-full flex-col overflow-hidden rounded-[16px] border border-[#E4E7ED] bg-white p-[20px_22px_30px] shadow-[0_2px_0_0_#F3F3F3] max-lg:p-[15px]"
              style={{
                maxWidth: "calc(33.333% - 14.666px)",
                flex: "0 0 calc(33.333% - 14.666px)",
              }}
            >
              <figure className="m-0 mb-5" style={{ height: 32 }}>
                <Image
                  src={item.icon}
                  alt=""
                  width={29}
                  height={32}
                  className="h-auto w-auto"
                />
              </figure>
              <h4 className="m-0 mb-3 text-[clamp(20px,2vw,25px)] font-medium leading-[120%] text-[#252525]">
                {item.title}
              </h4>
              <p className="m-0 mb-4 flex-1 text-[16px] leading-[150%] text-[#333]">
                {item.description}
              </p>
              {item.cta && (
                <Link
                  href={item.cta.href}
                  className="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold text-black underline transition-opacity hover:opacity-70"
                >
                  {item.cta.label}
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
