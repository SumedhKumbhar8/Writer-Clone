import Image from "next/image";
import { hcPageData } from "@/data/healthcare";

export function HcLogosSection() {
  const { logos } = hcPageData;

  return (
    <section className="bg-[#EDF5F7] pb-[42px]" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="container-default-sm">
        <p className="mb-[29px] text-center text-[14px] font-medium text-black">
          {logos.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-[27px]">
          {logos.items.map((item) => (
            <div key={item.alt} className="flex shrink-0 items-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="h-auto max-w-[165px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
