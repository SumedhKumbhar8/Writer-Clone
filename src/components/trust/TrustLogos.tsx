"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";

const LOGOS = [
  { src: "https://writer.com/wp-content/uploads/2025/03/Vector.svg", alt: "WTW" },
  { src: "https://writer.com/wp-content/uploads/2024/03/Group_ac7abc.svg", alt: "Vanguard" },
  { src: "https://writer.com/wp-content/uploads/2024/03/Frame-3602.svg", alt: "Salesforce" },
  { src: "https://writer.com/wp-content/uploads/2024/03/Qualcomm.svg?w=640", alt: "Qualcomm" },
  { src: "https://writer.com/wp-content/uploads/2024/11/American-Eagle.svg?w=640", alt: "American Eagle" },
  { src: "https://writer.com/wp-content/uploads/2024/12/ally-1.svg", alt: "Ally" },
  { src: "https://writer.com/wp-content/uploads/2024/12/uber-1.svg", alt: "Uber" },
  { src: "https://writer.com/wp-content/uploads/2024/03/Lennar_Logo-1.svg", alt: "Lennar" },
  { src: "https://writer.com/wp-content/uploads/2024/03/Frame-3600.svg", alt: "Accenture" },
  { src: "https://writer.com/wp-content/uploads/2025/01/Hilton_Worldwide_logo.svg-1.svg", alt: "Hilton" },
  { src: "https://writer.com/wp-content/uploads/2024/03/Dropbox.svg", alt: "Dropbox" },
  { src: "https://writer.com/wp-content/uploads/2024/03/hubspot-1.svg", alt: "HubSpot" },
  { src: "https://writer.com/wp-content/uploads/2024/03/amerilife.svg", alt: "AmeriLife" },
  { src: "https://writer.com/wp-content/uploads/2024/03/Frame-3603.svg", alt: "New American Funding" },
  { src: "https://writer.com/wp-content/uploads/2024/03/Adore-me.svg", alt: "Adore Me" },
  { src: "https://writer.com/wp-content/uploads/2024/03/6sense.svg", alt: "6sense" },
  { src: "https://writer.com/wp-content/uploads/2025/07/Layer_1.svg", alt: "Commvault" },
];

export function TrustLogos() {
  return (
    <section className="wr-pt-14 section-icon-scroll section-pb-xs trust-logos" style={{ padding: "56px 0 50px" }}>
      <div className="logos-gradient-container mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <Reveal>
          <div className="logos-gradient-1 logos-gradient-1_resp logos-gradient-1_flex overflow-hidden">
            <div className="flex items-center gap-10 animate-marquee" style={{ width: "max-content" }}>
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div key={i} className="logo-item-xs flex-shrink-0 flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={90}
                    height={45}
                    className="h-[45px] w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
