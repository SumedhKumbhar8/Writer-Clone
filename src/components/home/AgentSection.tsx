import Image from "next/image";
import Link from "next/link";

export function AgentSection() {
  return (
    <section className="bg-canvas-white py-20 lg:py-28" id="product">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
        <div className="mx-auto max-w-[760px] text-center">
          <h4 className="mb-4 text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite">
            WRITER Agent
          </h4>
          <h2 className="text-[clamp(28px,4vw,40px)] font-medium leading-[1.2] tracking-[-0.8px] text-midnight-graphite">
            Not a tool you prompt.
            <br />
            An agent you delegate to.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-relaxed text-slate-gray">
            Describe what you need and WRITER executes from start to finish, delivering polished,
            on-brand work in minutes.
          </p>
          <Link
            href="/product/writer-agent/"
            className="mt-6 inline-flex text-[16px] font-medium text-midnight-graphite underline-offset-4 hover:underline"
          >
            → Explore WRITER Agent
          </Link>
        </div>

        <div className="relative mx-auto mt-14 aspect-[16/10] max-w-[1100px] overflow-hidden rounded-xl bg-lavender-mist">
          <Image
            src="https://writer.com/wp-content/uploads/2026/04/WPI2026-%E2%80%93-8.png"
            alt="WRITER Agent interface showing Win-Back Email Campaign workflow"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </div>
      </div>
    </section>
  );
}
