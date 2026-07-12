import Image from "next/image";
import { WRITER_AGENT_QUOTE } from "@/data/writer-agent";

export function WriterAgentQuote() {
  const { text, author, role, company, photo, companyLogo, gradientOrb } = WRITER_AGENT_QUOTE;

  return (
    <section className="writer-agent-quote relative overflow-hidden pb-[52px]">
      <div className="mx-auto max-w-[760px] px-5 text-center lg:px-[15px]">
        <blockquote>
          <p className="writer-agent-quote__text mt-0 text-[clamp(18px,3vw,32px)] font-normal leading-[1.25] text-canvas-white lg:text-[32px] lg:leading-10">
            &ldquo;{text}&rdquo;
          </p>
        </blockquote>

        <div className="mt-10 flex justify-center">
          <div className="flex items-center">
            <div className="w-[99px] shrink-0">
              <Image
                src={photo}
                alt={author}
                width={200}
                height={249}
                className="h-auto w-[99px]"
              />
            </div>
            <div className="pl-5 text-left">
              <p className="mb-2 text-[16px] font-normal leading-[1.625] text-canvas-white">
                <strong className="font-semibold">{author}</strong>
                <br />
                {role}
              </p>
              <Image
                src={companyLogo}
                alt={company}
                width={313}
                height={84}
                className="h-6 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <Image
          src={gradientOrb}
          alt=""
          width={640}
          height={400}
          className="h-auto w-full max-w-[800px]"
          aria-hidden
        />
      </div>
    </section>
  );
}
