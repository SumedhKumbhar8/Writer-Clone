import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    label: "AI RESEARCH",
    title: "Frontier AI, purpose-built for regulated enterprises.",
    description:
      "Five-year track record of AI research and LLM innovation that delivers the transparency, reliability, and control that enterprises demand.",
    href: "https://writer.com/research/",
    linkText: "→ AI research lab",
    image: { src: "https://writer.com/wp-content/uploads/2026/04/img.png", alt: "AI Research", width: 666, height: 350 },
  },
  {
    label: "AI STUDIO",
    title: "Works with IT\u2019s systems, not around them.",
    description:
      "WRITER integrates with the security, identity, and observability stack IT already relies on \u2014 so they get complete oversight without governance overhead.",
    href: "/product/ai-studio/",
    linkText: "→ AI Studio",
    image: { src: "https://writer.com/wp-content/uploads/2026/04/img-1-1.png", alt: "AI Studio", width: 666, height: 350 },
  },
  {
    label: "TRUST & SECURITY",
    title: "Streamlined IT approvals, faster rollouts.",
    description:
      "Everything IT needs to deploy WRITER fast \u2014 from granular controls across knowledge, tools, and roles to built-in security and compliance certifications.",
    href: "https://writer.com/trust/",
    linkText: "→ Trust & security",
    image: { src: "https://writer.com/wp-content/uploads/2026/04/img-2.png", alt: "Trust & Security", width: 666, height: 350 },
  },
];

export function PlatformSection() {
  return (
    <section className="bg-[#27272B] px-0 pb-[108px] pt-[117px]" style={{ marginTop: "180px" }}>
      <div className="mx-auto w-full max-w-[1080px] px-[15px]">
        <h4 className="mb-0 text-center text-[13px] font-medium uppercase leading-[1.6] tracking-[1px] text-canvas-white">
          PLATFORM
        </h4>
        <h2 className="mb-10 text-center text-[40px] font-medium leading-[48px] tracking-[-0.8px] text-canvas-white">
          Your IT and technology teams,
          <br />
          on board from day one.
        </h2>

        <div className="grid gap-[10px] md:grid-cols-3">
          {CARDS.map((card) => (
            <article key={card.label} className="flex flex-col rounded-[16px] bg-[#1B1B1D] p-[50px_40px]">
              <figure className="mb-[8px] aspect-[16/9] overflow-hidden rounded-[10px]">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  width={card.image.width}
                  height={card.image.height}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </figure>

              <h6 className="mb-[8px] text-[11px] font-medium uppercase leading-[1.6] tracking-[1px] text-canvas-white">
                {card.label}
              </h6>

              <h5 className="text-[25px] font-medium leading-[30px] tracking-[-0.5px] text-canvas-white">
                {card.title}
              </h5>

              <p className="mt-[4px] flex-1 text-[16px] leading-[1.6] text-cloud-white">
                {card.description}
              </p>

              <Link
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-[54px] w-fit items-center justify-center rounded-full bg-lavender-mist px-6 text-[16px] font-medium leading-[1.6] text-midnight-graphite transition-colors hover:bg-cloud-white"
              >
                {card.linkText}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
