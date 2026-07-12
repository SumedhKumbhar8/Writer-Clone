import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export function KgPerformance() {
  return (
    <section className="py-[70px] lg:py-[100px]" style={{ backgroundColor: "#f4eeff" }}>
      <div className="mx-auto max-w-[1080px] px-5 lg:px-[15px]">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <Reveal className="w-full lg:w-1/2 space-y-6">
            <div className="head text-[16px] font-medium uppercase tracking-[1.6px] text-midnight-graphite">
              PERFORMANCE
            </div>
            <h2 className="text-[clamp(32px,4vw,44px)] font-medium leading-[1.2] tracking-[-0.88px] text-midnight-graphite">
              Knowledge Graph achieves unmatched accuracy
            </h2>
            <p className="text-lg leading-relaxed text-midnight-graphite/80">
              In a benchmarking study, WRITER Knowledge Graph achieved top scores on RobustQA,
              which measures accuracy in open-domain question-answering, outperforming seven
              popular RAG approaches that use vector retrieval.
            </p>
            <Link
              href="https://writer.com/engineering/rag-benchmark/"
              className="sf_simple_link inline-flex items-center font-semibold text-midnight-graphite underline underline-offset-4 hover:text-[#5551ff] transition-colors"
            >
              Learn more
            </Link>
          </Reveal>

          <Reveal className="w-full lg:w-1/2 text-center">
            <div className="knowledge-graph-performance-img inline-block">
              <Image
                src="https://writer.com/wp-content/uploads/2024/06/robust.svg"
                alt="RobustQA Benchmark Results"
                width={283}
                height={370}
                className="h-auto w-full max-w-[283px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
