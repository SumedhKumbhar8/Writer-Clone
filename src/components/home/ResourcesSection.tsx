import Image from "next/image";
import Link from "next/link";

const ACADEMY_IMAGE =
  "https://writer.com/wp-content/uploads/2026/04/Share-image-Big-Book-of-Writer%E2%80%A8venterprise-AI-use-cases.png";

const ACADEMY_HREF = "https://academy.writer.com/";

const RESOURCES = [
  {
    title: "WRITER at work webinar",
    description:
      "Join a 30-minute walkthrough of the latest WRITER features that help marketing teams create on-brand assets fast without sacrificing quality.",
    cta: "Watch webinar on-demand",
    href: "https://go.writer.com/writer-work-march-2026",
    image: {
      src: "https://writer.com/wp-content/uploads/2026/03/WRITER-at-work-webinar.png",
      alt: "WRITER at work webinar",
      width: 321,
      height: 180,
    },
  },
  {
    title: "New at WRITER: Codify and scale your team's expertise",
    description:
      "Scale your AI operations with WRITER's March release: codify expertise with Skills, automate brand-compliant presentations, and more.",
    cta: "Read the blog",
    href: "https://writer.com/blog/new-roundup-march-2026/",
    image: {
      src: "https://writer.com/wp-content/uploads/2026/03/hp-resources-writer-at-work.png",
      alt: "New at WRITER: Codify and scale your team's expertise",
      width: 321,
      height: 180,
    },
  },
  {
    title: "The AI playbooks that 10x marketers run",
    description:
      "Discover production-ready workflows for content, campaigns, SEO/GEO, brand, and demand generation teams.",
    cta: "Explore playbooks hub",
    href: "https://go.writer.com/marketing-playbooks",
    image: {
      src: "https://writer.com/wp-content/uploads/2026/03/The-AI-playbooks-that-10x-marketers-run.png",
      alt: "The AI playbooks that 10x marketers run",
      width: 321,
      height: 180,
    },
  },
  {
    title: "Marketing AI ROI calculator",
    description:
      "Get an instant, personalized ROI calculation and see how WRITER transforms marketing workflows with agentic AI.",
    cta: "Calculate your AI ROI now",
    href: "https://writer.com/ai-roi-calculator/",
    image: {
      src: "https://writer.com/wp-content/uploads/2026/03/Marketing-AI-ROI-calculator.png",
      alt: "Marketing AI ROI calculator",
      width: 321,
      height: 180,
    },
  },
];

export function ResourcesSection() {
  return (
    <section className="bg-[#1A1A1C] py-20 lg:py-28" id="resources">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <h4 className="mb-4 text-[13px] font-medium uppercase tracking-[1px] text-canvas-white">
            RESOURCES
          </h4>
          <h2 className="text-[clamp(28px,4vw,40px)] font-medium leading-[1.2] tracking-[-0.8px] text-canvas-white lg:mb-10">
            Everything your marketing team
            <br className="hidden lg:inline" />
            needs to go AI-native
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-0 lg:grid-cols-2 lg:gap-12">
          <article>
            <Link href={ACADEMY_HREF} target="_blank" rel="noopener noreferrer" className="block">
              <figure className="overflow-hidden rounded-[10px]">
                <Image
                  src={ACADEMY_IMAGE}
                  alt="WRITER Academy — Learn today. Lead tomorrow."
                  width={1024}
                  height={587}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </figure>
            </Link>

            <h3 className="mt-3.5 text-[16px] font-medium leading-6 text-canvas-white">
              <Link
                href={ACADEMY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                WRITER Academy
              </Link>
            </h3>

            <p className="mt-2 max-w-[323px] text-[12px] leading-5 text-fog">
              <Link
                href={ACADEMY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                Master WRITER with certifications, self-paced courses, and quick video tutorials
                covering everything from generative AI basics to building custom AI agents.
              </Link>
            </p>

            <p className="mt-2 text-[12px] font-semibold leading-5 text-fog">
              <Link
                href={ACADEMY_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                Explore certifications
              </Link>
            </p>
          </article>

          <div className="flex flex-col gap-[25px]">
            {RESOURCES.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex max-w-[550px] flex-col items-start gap-4 sm:flex-row sm:items-center lg:ml-auto"
              >
                <figure className="h-[90px] w-full shrink-0 overflow-hidden rounded-[10px] sm:w-[160px]">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="h-full w-full object-cover"
                    sizes="160px"
                  />
                </figure>

                <div>
                  <h4 className="text-[16px] font-medium leading-6 text-canvas-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[12px] leading-5 text-fog">{item.description}</p>
                  <p className="mt-1 text-[12px] font-semibold leading-5 text-fog group-hover:opacity-70">
                    {item.cta}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
