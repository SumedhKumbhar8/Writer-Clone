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
    <section id="privacy-compliance" className="benefits-block-container section-pt-sm">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="benefits-block-row flex gap-6 lg:gap-9">
          <Reveal className="benefits-block-icon hidden lg:block flex-shrink-0 w-[120px]">
            <Image
              src="https://writer.com/wp-content/uploads/2024/06/Frame-3651-3.svg"
              alt="Privacy & compliance"
              width={120}
              height={120}
              className="object-contain"
            />
          </Reveal>

          <Reveal className="benefits-block-content flex-1 min-w-0">
            <div className="benefits-block-icon mb-4 lg:hidden">
              <Image
                src="https://writer.com/wp-content/uploads/2024/06/Frame-3651-3.svg"
                alt="Privacy & compliance"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <p className="head">Privacy &amp; compliance</p>
            <h2>Meet enterprise privacy and compliance requirements</h2>
            <p className="benefits-block-desc benefits-block-desc--wide">
              We built the WRITER platform specifically for enterprises, recognizing
              the importance of protecting the data you share with us and complying
              with our obligations under global privacy laws.
            </p>
            <div className="mt-4 flex flex-wrap gap-6">
              <Link
                href="https://writer.com/legal/privacy/"
                className="text-[#5551ff] underline underline-offset-2 hover:text-[#2e2ae8] text-sm font-medium"
              >
                Read our Privacy policy
              </Link>
              <Link
                href="https://writer.com/legal/data-processing/"
                className="text-[#5551ff] underline underline-offset-2 hover:text-[#2e2ae8] text-sm font-medium"
              >
                Data processing agreement
              </Link>
            </div>

            <div className="row grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6 mt-8 max-w-[925px]">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="ben-block-inner">
                  <p>
                    <strong>{feature.title}</strong>
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="certifications mt-10">
              <div className="block-logos top_row">
                {CERTIFICATIONS_ROW1.map((cert) => (
                  <div key={cert.alt} className="block-logo">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={217}
                      height={271}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="block-logos">
                {CERTIFICATIONS_ROW2.map((cert) => (
                  <div key={cert.alt} className="block-logo">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={219}
                      height={274}
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
