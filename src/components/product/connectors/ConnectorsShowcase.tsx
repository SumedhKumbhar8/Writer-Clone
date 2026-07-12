import Image from "next/image";
import { CONNECTOR_ITEMS } from "@/data/connectors";
import type { ConnectorItem } from "@/data/connectors";

function ConnectorCardFeatured({ item }: { item: ConnectorItem }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-[#e4e7ed] bg-white p-[14px] shadow-[0_2px_0_0_#f5f5f9] lg:flex-row lg:gap-[30px]">
      <div className="flex flex-1 flex-col p-3">
        <span className="mb-3 inline-block w-fit rounded-[4px] bg-[#bfcbff] px-2 py-[6px] text-[13px] font-medium uppercase leading-none">
          Featured
        </span>

        <Image
          src={item.icon}
          alt=""
          width={100}
          height={100}
          className="mb-4 h-[100px] w-[100px] object-contain"
          aria-hidden
        />

        <h3 className="text-[24px] font-medium leading-[1.2] text-midnight-graphite">
          {item.name}
        </h3>

        <p className="mt-2 text-[16px] leading-[1.6] text-[#4f4f4f]">
          {item.description}
        </p>

        <span className="mt-auto pt-4 text-[12px] font-medium uppercase tracking-[0.6px] text-[#828282]">
          {item.category}
        </span>
      </div>

      {item.featuredImage && (
        <figure className="overflow-hidden rounded-xl bg-[#e4e9ff] lg:w-[396px] lg:shrink-0">
          <Image
            src={item.featuredImage}
            alt=""
            width={396}
            height={264}
            className="h-full w-full object-cover"
            aria-hidden
          />
        </figure>
      )}
    </article>
  );
}

function ConnectorCard({ item }: { item: ConnectorItem }) {
  return (
    <article className="flex flex-col rounded-xl border border-[#e4e7ed] bg-white p-[14px] shadow-[0_2px_0_0_#f5f5f9]">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#e4e7ed] bg-white">
        <Image
          src={item.icon}
          alt=""
          width={31}
          height={31}
          className="h-[31px] w-[31px] object-contain"
          aria-hidden
        />
      </div>

      <h4 className="mt-3 text-[18px] font-medium leading-[1.4] text-midnight-graphite">
        {item.name}
      </h4>

      <p className="mt-1.5 text-[12px] leading-[1.5] text-midnight-graphite">
        {item.description}
      </p>

      <span className="mt-auto pt-3 text-[12px] font-medium uppercase tracking-[0.6px] text-[#828282]">
        {item.category}
      </span>
    </article>
  );
}

export function ConnectorsShowcase() {
  const featured = CONNECTOR_ITEMS.find((item) => item.featured);
  const regular = CONNECTOR_ITEMS.filter((item) => !item.featured);

  return (
    <section className="bg-white pt-[140px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <p className="mb-4 text-[13px] font-medium uppercase tracking-[1px] text-midnight-graphite">
          CONNECTOR SHOWCASE
        </p>

        <h2 className="max-w-[760px] text-[clamp(24px,3vw,32px)] font-medium leading-[1.25] tracking-[-0.64px] text-midnight-graphite">
          Connect WRITER to the tools your teams use most
        </h2>

        <div className="mt-10 space-y-[15px]">
          {featured && <ConnectorCardFeatured item={featured} />}

          <div className="grid gap-[15px] md:grid-cols-2 lg:grid-cols-3">
            {regular.map((item) => (
              <ConnectorCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
