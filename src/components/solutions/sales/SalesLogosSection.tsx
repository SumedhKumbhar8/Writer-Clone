import Image from "next/image";
import { salesPageData } from "@/data/sales";

export function SalesLogosSection() {
  const { logos } = salesPageData;

  return (
    <section className="bg-[#E2D7CB] pb-[38px]" aria-label="Trusted by enterprises">
      <div className="mx-auto max-w-[1080px] px-5">
        <p className="mb-[14px] text-center text-[14px] font-medium text-black">
          {logos.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-[38px] gap-y-[20px]">
          {logos.items.map((item) => (
            <div key={item.alt} className="flex shrink-0 items-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto max-w-[136px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
