import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const FEATURES = [
  {
    title: "Operational safeguards",
    text: "We safeguard your information with administrative, technical, physical, and organizational security measures.",
  },
  {
    title: "Compliance",
    text: "We adhere to global privacy and data protection laws and maintain industry-recognized certifications to independently validate our security and privacy practices.",
  },
  {
    title: "Secure deployment",
    text: "Managed, multi-cloud options, including dedicated private cloud deployment.",
  },
];

const CERTIFICATIONS_ROW1 = [
  { src: "https://writer.com/wp-content/uploads/2025/05/Frame-3670.png", alt: "ISO 27701" },
  { src: "https://writer.com/wp-content/uploads/2025/05/Frame-3671.png", alt: "ISO 27001" },
  { src: "https://writer.com/wp-content/uploads/2025/05/Frame-3672.png", alt: "IS 42001" },
];

const CERTIFICATIONS_ROW2 = [
  { src: "https://writer.com/wp-content/uploads/2025/01/Frame-3662.png", alt: "GDPR" },
  { src: "https://writer.com/wp-content/uploads/2025/01/Frame-3663.png", alt: "HIPAA" },
  { src: "https://writer.com/wp-content/uploads/2025/01/Frame-3664.png", alt: "SOC 2 Type II" },
  { src: "https://writer.com/wp-content/uploads/2025/01/Frame-3665.png", alt: "PCI" },
  { src: "https://writer.com/wp-content/uploads/2025/01/Frame-3666.png", alt: "Data Privacy Framework" },
  { src: "https://writer.com/wp-content/uploads/2025/01/Frame-3667.png", alt: "California Consumer Privacy Act (CCPA)" },
];

export function TrustPrivacy() {
  return (
    <section id="privacy-compliance" className="benefits-block-container section-pt-sm py-[52px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="benefits-block-row flex flex-col lg:flex-row gap-10 lg:gap-16">
          <Reveal className="w-full lg:w-5/12 flex-shrink-0">
            <div className="benefits-block-icon mb-6">
              <Image
                src="https://writer.com/wp-content/uploads/2024/06/Frame-3651-3.svg"
                alt="Privacy & compliance"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-midnight-graphite mb-4">
              Meet enterprise privacy and compliance requirements
            </h2>
            <p className="text-lg leading-relaxed text-midnight-graphite/70">
              We built the WRITER platform specifically for enterprises, recognizing the importance of protecting the data you share with us and complying with our obligations under global privacy laws.
            </p>
            <div className="mt-4 flex gap-6">
              <Link href="https://writer.com/legal/privacy/" className="text-[#5551ff] underline underline-offset-2 hover:text-[#2e2ae8] text-sm font-medium">
                Read our Privacy policy
              </Link>
              <Link href="https://writer.com/legal/data-processing/" className="text-[#5551ff] underline underline-offset-2 hover:text-[#2e2ae8] text-sm font-medium">
                Data processing agreement
              </Link>
            </div>
          </Reveal>

          <Reveal className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="border-t border-[#eff0f2] pt-5">
                  <h3 className="text-xl font-semibold text-midnight-graphite mb-3">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-midnight-graphite/70">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="certifications">
              <div className="block-logos top_row flex justify-center gap-1 max-w-[460px] mx-auto mb-[-90px] relative z-10">
                {CERTIFICATIONS_ROW1.map((cert) => (
                  <div key={cert.alt} className="block-logo w-[130px]">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={130}
                      height={162}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="block-logos flex justify-center gap-1 flex-wrap relative z-0 pt-12">
                {CERTIFICATIONS_ROW2.map((cert) => (
                  <div key={cert.alt} className="block-logo w-[100px] lg:w-[120px]">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={120}
                      height={150}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
