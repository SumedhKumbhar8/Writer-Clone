import Image from "next/image";
import Link from "next/link";

const PLATFORM_CARDS = [
  {
    label: "AI RESEARCH",
    title: "Frontier AI, purpose-built for regulated enterprises.",
    description:
      "Five-year track record of AI research and LLM innovation that delivers the transparency, reliability, and control that enterprises demand.",
    href: "https://writer.com/research/",
    linkText: "→ AI research lab",
    image: {
      src: "https://writer.com/wp-content/uploads/2026/04/img.png",
      alt: "Reflect, Retry, Reward: Self-Improving LLMs via Reinforcement Learning research paper",
      width: 666,
      height: 350,
    },
  },
  {
    label: "AI STUDIO",
    title: "Works with IT's systems, not around them.",
    description:
      "WRITER integrates with the security, identity, and observability stack IT already relies on — so they get complete oversight without governance overhead.",
    href: "/product/ai-studio/",
    linkText: "→ AI Studio",
    image: {
      src: "https://writer.com/wp-content/uploads/2026/04/img-1-1.png",
      alt: "Connectors diagram showing Security, Guardrails, Observability, and Models integrations",
      width: 666,
      height: 350,
    },
  },
  {
    label: "TRUST & SECURITY",
    title: "Streamlined IT approvals, faster rollouts.",
    description:
      "Everything IT needs to deploy WRITER fast — from granular controls across knowledge, tools, and roles to built-in security and compliance certifications.",
    href: "https://writer.com/trust/",
    linkText: "→ Trust & security",
    image: {
      src: "https://writer.com/wp-content/uploads/2026/04/img-2.png",
      alt: "Security and compliance certifications including SOC2, HIPAA, GDPR, and PCI",
      width: 666,
      height: 350,
    },
  },
];

export function PlatformSection() {
  return (
    <section className="bg-[#27272B] py-20 lg:py-[117px] lg:pb-[108px]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <h4 className="mb-4 text-[13px] font-medium uppercase tracking-[1px] text-canvas-white">
            PLATFORM
          </h4>
          <h2 className="text-[clamp(28px,4vw,40px)] font-medium leading-[1.2] tracking-[-0.8px] text-canvas-white lg:mb-10">
            Your IT and technology teams,
            <br />
            on board from day one.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-0">
          {PLATFORM_CARDS.map((card) => (
            <article key={card.label} className="flex flex-col">
              <figure className="mb-6 aspect-[16/9] overflow-hidden rounded-[10px]">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  width={card.image.width}
                  height={card.image.height}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </figure>

              <h6 className="flex min-h-[58px] items-center text-[11px] font-medium uppercase tracking-[1px] text-canvas-white">
                {card.label}
              </h6>

              <h5 className="text-[25px] font-medium leading-[1.2] tracking-[-0.5px] text-canvas-white">
                {card.title}
              </h5>

              <p className="mt-4 flex-1 text-[16px] leading-[1.6] text-cloud-white">
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
