import Image from "next/image";
import { CAPABILITIES } from "@/data/llms";

export function CapabilitiesSection() {
  const { icon, label, title, description, items } = CAPABILITIES;

  return (
    <div className="section-pt section-pb">
      <div className="container" style={{ maxWidth: 1136 }}>
        <div className="mb-2 flex flex-col items-center gap-2">
          <div className="mb-2">
            <Image src={icon} alt="" width={48} height={48} aria-hidden />
          </div>
          <p className="m-0 text-[13px] font-semibold uppercase tracking-[1.6px] text-midnight-graphite">
            {label}
          </p>
        </div>

        <div className="text-center">
          <h2 className="m-0 text-[clamp(28px,3vw,40px)] font-medium leading-snug text-midnight-graphite">
            {title}
          </h2>
          <p className="mb-0 mt-2 text-[18px] leading-normal text-slate-gray" style={{ maxWidth: 580, marginInline: "auto" }}>
            {description}
          </p>
        </div>

        <div className="cb-solutions-container mt-8 xl:mt-10">
          {items.map((item) => (
            <div key={item.title} className="cb-solutions-col">
              <div className="cb-solutions-item">
                <div className="cb-solutions-item__left">
                  <div className="cb-solutions-item__icon">
                    <Image
                      src="https://writer.com/wp-content/uploads/2024/11/sol.svg"
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden
                    />
                  </div>
                  <div className="cb-solutions-item__title">{item.title}</div>
                </div>
                <div className="cb-solutions-item__right">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
