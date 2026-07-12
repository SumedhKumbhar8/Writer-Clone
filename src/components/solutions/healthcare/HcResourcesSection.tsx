import Image from "next/image";
import Link from "next/link";
import { hcPageData } from "@/data/healthcare";

export function HcResourcesSection() {
  const { resources } = hcPageData;

  return (
    <section className="bg-white py-[80px] max-lg:py-[50px]" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mx-auto mb-[30px] max-w-[670px] text-center">
          <h5 className="mb-[5px] text-[14px] font-semibold uppercase tracking-[4.2px] text-black">
            {resources.eyebrow}
          </h5>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-normal leading-[52px] text-black">
            {resources.title}
          </h2>
        </div>

        <div className="flex gap-8 max-lg:flex-col">
          <div className="flex-1">
            <p className="mb-[13px] border-b border-[#D2D4D7] pb-[13px] text-[20px] font-medium text-black">
              {resources.leftColumn.label}
            </p>
            <div className="flex flex-col gap-[25px]">
              {resources.leftColumn.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group flex items-start gap-4 no-underline"
                >
                  <div className="h-[90px] w-[160px] shrink-0 overflow-hidden rounded-[8px] max-lg:h-auto max-lg:w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={321}
                      height={180}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 max-lg:w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h4 className="mb-1 text-[16px] font-medium leading-[140%] text-black">
                      {item.title}
                    </h4>
                    <p className="mb-2 text-[14px] font-normal leading-[150%] text-[#4F4F4F]">
                      {item.description}
                    </p>
                    <span className="mt-auto text-[12px] font-semibold text-[#4F4F4F] underline transition-opacity group-hover:opacity-70">
                      {item.cta}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <p className="mb-[13px] border-b border-[#D2D4D7] pb-[13px] text-[20px] font-medium text-black">
              {resources.rightColumn.label}
            </p>
            <div className="flex flex-col gap-[25px]">
              {resources.rightColumn.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group flex items-start gap-4 no-underline"
                >
                  <div className="h-[90px] w-[160px] shrink-0 overflow-hidden rounded-[8px] max-lg:h-auto max-lg:w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={321}
                      height={180}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 max-lg:w-full"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h4 className="mb-1 text-[16px] font-medium leading-[140%] text-black">
                      {item.title}
                    </h4>
                    <p className="mb-2 text-[14px] font-normal leading-[150%] text-[#4F4F4F]">
                      {item.description}
                    </p>
                    <span className="mt-auto text-[12px] font-semibold text-[#4F4F4F] underline transition-opacity group-hover:opacity-70">
                      {item.cta}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
