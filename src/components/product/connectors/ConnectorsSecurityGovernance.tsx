import Image from "next/image";
import Link from "next/link";
import { SECURITY_GOVERNANCE } from "@/data/connectors";

export function ConnectorsSecurityGovernance() {
  const { eyebrow, title, description, items, architecture } = SECURITY_GOVERNANCE;

  return (
    <section className="bg-white pb-[60px] pt-[54px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <p className="mb-4 text-[13px] font-medium uppercase tracking-[1px] text-midnight-graphite">
          {eyebrow}
        </p>

        <h2 className="whitespace-pre-line text-[clamp(28px,4vw,40px)] font-medium leading-[1.2] tracking-[-0.8px] text-midnight-graphite">
          {title}
        </h2>

        <p className="mt-4 max-w-[640px] whitespace-pre-line text-[16px] leading-[1.6] text-[#4f4f4f]">
          {description}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-[#e4e7ed] bg-white p-5 shadow-[0_2px_0_0_#f5f5f9]"
            >
              <figure className="mb-4 flex h-[33px] items-start">
                <Image
                  src={item.icon}
                  alt=""
                  width={33}
                  height={33}
                  className="h-[33px] w-auto"
                  aria-hidden
                />
              </figure>

              <h4 className="whitespace-pre-line text-[21px] font-medium leading-[1.2] text-midnight-graphite">
                {item.title}
              </h4>

              <p className="mt-3 text-[14px] leading-[1.8] text-[#333]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="border-l-[3px] border-[#d2d4d7] pl-[25px]">
            <h4 className="text-[18px] font-medium leading-[1.3] text-midnight-graphite">
              {architecture.title}
            </h4>
            <p className="mt-2 text-[13px] leading-[1.6] text-[#4f4f4f]">
              {architecture.description}
            </p>
            <Link
              href={architecture.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-[14px] font-medium underline underline-offset-2 transition-opacity hover:opacity-70"
            >
              {architecture.cta.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
