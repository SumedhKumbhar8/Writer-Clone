import Image from "next/image";
import { techPageData } from "@/data/technology";

export function TechLogosSection() {
  const { logos } = techPageData;

  return (
    <section className="bg-white py-[38px]" aria-label="Trusted by enterprise technology brands">
      <div className="mx-auto max-w-[1080px] px-5">
        <p className="mb-[14px] text-center text-[14px] font-medium text-black">
          {logos.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-[38px] gap-y-[20px]">
          {logos.items.map((item) => (
            <div key={item.src} className="flex shrink-0 items-center">
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
