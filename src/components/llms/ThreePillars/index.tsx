import Image from "next/image";
import { THREE_PILLARS } from "@/data/llms";

export function ThreePillars() {
  return (
    <div className="section-pt section-pb">
      <div className="container" style={{ maxWidth: 1136 }}>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          {THREE_PILLARS.map((pillar) => (
            <div key={pillar.title} className="llms-info">
              <div className="llms-info__icon">
                <Image src={pillar.icon} alt="" width={32} height={32} aria-hidden />
              </div>
              <div className="llms-info__content">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
