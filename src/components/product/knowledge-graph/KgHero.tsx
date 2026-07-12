import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function KgHero() {
  return (
    <section className="section-dark knowledge-graph-main section-pb-sm pt-[140px] lg:pt-[180px] pb-[70px] overflow-hidden text-center bg-black">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <Reveal>
          <div className="head text-[16px] font-medium uppercase tracking-[1.6px] text-canvas-white mb-4">
            KNOWLEDGE GRAPH
          </div>
        </Reveal>

        <Reveal>
          <h1 className="mx-auto max-w-[900px] text-[clamp(36px,5vw,64px)] font-normal leading-[1.2] tracking-[-1.28px] text-[#f5f5f5]">
            An innovative approach to knowledge retrieval
          </h1>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-5 max-w-[640px] text-[18px] leading-[1.6] text-[#D2D4D7]">
            Knowledge Graph, our graph-based retrieval-augmented generation (RAG), achieves higher accuracy than traditional RAG approaches that use vector retrieval.
          </p>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://go.writer.com/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="dc-btn dc-btn_outline-white inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-4 text-[18px] font-semibold leading-5 text-white transition-colors hover:bg-white hover:text-black"
            >
              Request a demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
