import Image from "next/image";
import Link from "next/link";

const ACADEMY_IMG = "https://writer.com/wp-content/uploads/2026/04/Share-image-Big-Book-of-Writer%E2%80%A8venterprise-AI-use-cases.png";

const RESOURCES = [
  {
    title: "How to create an AI-native marketing engine",
    description: "Four proven AI workflows already driving pipeline impact across enterprise marketing teams.",
    cta: "Get the guide",
    href: "https://go.writer.com/ai-native-marketing-engine",
    img: "https://writer.com/wp-content/uploads/2026/07/Slide-16_9-167-1.png",
  },
  {
    title: "Free up time with everyday marketing automations",
    description: "Join a 30-minute walkthrough on how to automate the routine work eating up your day.",
    cta: "Watch the recording",
    href: "https://go.writer.com/writer-at-work-may",
    img: "https://writer.com/wp-content/uploads/2026/07/Presentation-deck-cover-image-for-goldcast-1.png",
  },
  {
    title: "New at WRITER: Brand systems built for an AI era",
    description: "Scale brand consistency in WRITER with unified voice profiles, terminology lists, style guides.",
    cta: "Read more",
    href: "https://writer.com/blog/new-roundup-may-2026/",
    img: "https://writer.com/wp-content/uploads/2026/07/2026-05-May-release-3-1.png",
  },
  {
    title: "How to maintain and scale your brand DNA",
    description: "Learn how Global 2000 marketing leaders protect AI brand integrity.",
    cta: "Download the guide",
    href: "https://go.writer.com/ai-brand-integrity",
    img: "https://writer.com/wp-content/uploads/2026/07/Slide-16_9-168-1.png",
  },
];

export function ResourcesSection() {
  return (
    <section className="bg-[#1A1A1C] py-[112px]" id="resources">
      <div className="mx-auto w-full max-w-[1080px] px-[15px]">
        <h4 className="mb-0 text-center text-[13px] font-medium uppercase leading-[1.6] tracking-[1px] text-canvas-white">
          RESOURCES
        </h4>
        <h2 className="mb-10 text-center text-[40px] font-medium leading-[48px] tracking-[-0.8px] text-canvas-white">
          Everything your marketing team needs to go AI-native
        </h2>

        <div className="grid gap-[25px] lg:grid-cols-2">
          <article>
            <Link href="/academy" className="block">
              <figure className="overflow-hidden rounded-[10px]">
                <Image
                  src={ACADEMY_IMG}
                  alt="WRITER Academy"
                  width={1024} height={587}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </figure>
            </Link>
            <h3 className="mt-3.5 text-[16px] font-medium leading-6 text-canvas-white">
              <Link href="/academy" className="transition-opacity hover:opacity-70">
                WRITER Academy
              </Link>
            </h3>
            <p className="mt-2 max-w-[323px] text-[12px] leading-5 text-fog">
              <Link href="/academy" className="transition-opacity hover:opacity-70">
                Master WRITER with certifications, self-paced courses, and quick video tutorials.
              </Link>
            </p>
            <p className="mt-2 text-[12px] font-semibold leading-5 text-fog">
              <Link href="/academy" className="transition-opacity hover:opacity-70">
                Explore certifications
              </Link>
            </p>
          </article>

          <div className="flex flex-col gap-[25px]">
            {RESOURCES.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 transition-opacity hover:opacity-80"
              >
                <figure className="h-[90px] w-[160px] shrink-0 overflow-hidden rounded-[10px]">
                  <Image src={r.img} alt="" width={321} height={180} className="h-full w-full object-cover" sizes="160px" />
                </figure>
                <div>
                  <h4 className="text-[16px] font-medium leading-6 text-canvas-white">{r.title}</h4>
                  <p className="mt-1 text-[12px] leading-5 text-fog">{r.description}</p>
                  <p className="mt-1 text-[12px] font-semibold leading-5 text-fog">{r.cta}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
