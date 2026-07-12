import Image from "next/image";
import { BENCHMARKS } from "@/data/llms";

export function BenchmarksSection() {
  const { items } = BENCHMARKS;

  return (
    <div className="section-pt section-pb">
      <div className="container text-center" style={{ maxWidth: 1136 }}>
        <div className="mb-2 flex flex-col items-center gap-2">
          <div className="mb-2">
            <Image
              src="https://writer.com/wp-content/uploads/2024/11/trophy.svg?w=640"
              alt=""
              width={32}
              height={32}
              aria-hidden
            />
          </div>
          <p className="m-0 text-[13px] font-semibold uppercase tracking-[1.6px] text-midnight-graphite">
            Benchmarks
          </p>
        </div>

        <p className="m-0 text-[clamp(20px,2vw,24px)] font-medium leading-snug text-midnight-graphite">
          See how our models stack up!
        </p>

        <div className="mx-auto mt-4 px-0" style={{ maxWidth: 930 }}>
          <div className="palmyra-trophy-row mt-4">
            {items.map((item) => (
              <div key={item.label} className="palmyra-trophy-col">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={165}
                  height={243}
                  className="h-auto w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
