import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

export function TrustTestimonials() {
  return (
    <section className="section-pb-xs section-pt-xs trust-quotes">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <Reveal>
          <div className="text-center max-w-[870px] mx-auto">
            <p className="trust-quotes__text">
              &ldquo;WRITER stood out in our due diligence process to meet our privacy
              and compliance requirements. Their transparent policy around not
              retaining or training on our data was a key factor in our selection
              of and partnership with WRITER.&rdquo;
            </p>

            <div className="flex items-center justify-center gap-5">
              <Image
                src="https://writer.com/wp-content/uploads/2024/06/Ajay-Dhaul-1.png"
                alt="Ajay Dhaul"
                width={99}
                height={99}
                className="rounded-full object-cover w-[99px] h-[99px]"
              />
              <div className="text-left">
                <p className="text-lg font-bold text-black">Ajay Dhaul</p>
                <p className="text-base text-black/70">Founder &amp; CEO</p>
                <div className="relative w-24 h-6 mt-2">
                  <Image
                    src="https://writer.com/wp-content/uploads/2026/01/omnea-ventures-logo-1.svg"
                    alt="Omnea Ventures"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
