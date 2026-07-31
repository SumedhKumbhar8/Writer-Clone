import Image from "next/image";
import Link from "next/link";
import { mktPageData } from "@/data/marketing";

export function MktResourcesSection() {
  const { resources } = mktPageData;

  return (
    <section className="bg-white py-[50px]">
      <div className="container-default-sm">
        <div className="mx-auto mb-10 max-w-[760px] text-center">
          <h5 className="mb-4 text-[14px] font-semibold uppercase tracking-[4.2px] text-black">
            {resources.eyebrow}
          </h5>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-normal leading-[52px] text-black">
            {resources.title}
          </h2>
        </div>

        <div className="mx-auto flex max-w-[505px] flex-col gap-6">
          {resources.items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group flex items-start gap-4 no-underline"
            >
              <div className="w-[160px] shrink-0 overflow-hidden rounded-[8px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={160}
                  height={90}
                  className="h-[90px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <h4 className="mb-1 text-[16px] font-medium text-black">
                  {item.title}
                </h4>
                <p className="mb-2 text-[14px] font-normal leading-[1.5] text-[#4F4F4F]">
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
    </section>
  );
}
