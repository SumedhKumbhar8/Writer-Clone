import Image from "next/image";
import Link from "next/link";
import { AI_STUDIO_BUILDER_TOOLS } from "@/data/ai-studio";

export function AiStudioBuilderTools() {
  return (
    <section className="ai-studio-tools py-[70px]">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <h2 className="mx-auto max-w-[760px] text-center text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-canvas-white">
          Tools for every type of builder
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:gap-[15px]">
          {AI_STUDIO_BUILDER_TOOLS.map((tool) => (
            <article
              key={tool.title}
              className="flex flex-col rounded-2xl bg-[#1b1b1d] px-5 py-[30px]"
            >
              <Image
                src={tool.icon}
                alt=""
                width={72}
                height={72}
                className="mb-5"
                aria-hidden
              />

              <h3 className="text-[25px] font-medium leading-[1.2] tracking-[-0.5px] text-canvas-white">
                {tool.title}
              </h3>

              <p className="mt-4 flex-1 text-[16px] leading-[1.6] text-[#d2d4d7]">
                {tool.description}
              </p>

              <Link
                href={tool.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex text-[16px] font-medium text-canvas-white transition-opacity hover:opacity-70"
              >
                → {tool.link.label}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
