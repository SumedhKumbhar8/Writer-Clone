import Image from "next/image";
import { WHY_CONNECTORS } from "@/data/connectors";

export function ConnectorsWhySection() {
  return (
    <section className="bg-white pt-[152px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <p className="mb-4 text-[13px] font-medium uppercase tracking-[1px] text-midnight-graphite">
          WHY CONNECTORS
        </p>

        <h2 className="text-[clamp(28px,4vw,40px)] font-medium leading-[1.2] tracking-[-0.8px] text-midnight-graphite">
          Connect your stack. Automate the work.
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {WHY_CONNECTORS.map((item) => (
            <article key={item.title}>
              <figure className="overflow-hidden rounded-xl bg-[#e4e9ff]">
                <Image
                  src={item.image}
                  alt=""
                  width={568}
                  height={320}
                  className="h-auto w-full object-cover"
                  aria-hidden
                />
              </figure>

              <h4 className="mt-6 whitespace-pre-line text-[24px] font-medium leading-[1.2] text-midnight-graphite">
                {item.title}
              </h4>

              <p className="mt-3 text-[16px] leading-[1.6] text-[#4f4f4f]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
