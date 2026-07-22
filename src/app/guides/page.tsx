import { GuideCard } from "@/components/guides/GuideCard";
import { guidesData } from "@/data/guides";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Guides",
  description:
    "Enterprise AI guides from WRITER — agentic AI, marketing, governance, use cases, and more.",
  path: "/guides",
});

export default function GuidesPage() {
  const { title, sectionLabel, guides } = guidesData;

  return (
    <section className="overflow-hidden bg-white pb-[140px] pt-[115px] max-[759px]:pt-[100px]">
      <div className="mx-auto w-full max-w-[1080px] px-[15px] pt-[50px]">
        <div className="text-center">
          <h1
            className="m-0 text-[60px] font-normal leading-none text-black max-[1117px]:text-[36px]"
            style={{ fontFamily: "var(--font-caneladeck)" }}
          >
            {title}
          </h1>
        </div>

        <div className="mt-[70px] w-full min-[1118px]:mx-auto min-[1118px]:w-[900px] min-[1118px]:max-w-full max-[479px]:mx-auto max-[479px]:w-[264px]">
          <p className="m-0 text-[10px] font-semibold uppercase leading-[12px] tracking-[3px] text-black">
            {sectionLabel}
          </p>

          <div className="mt-10 -mb-10 flex flex-wrap min-[1118px]:-mx-[27px]">
            {guides.map((guide) => (
              <GuideCard key={guide.href + guide.title} guide={guide} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
