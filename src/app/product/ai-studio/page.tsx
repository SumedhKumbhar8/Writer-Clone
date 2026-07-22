import type { Metadata } from "next";
import { AiStudioBottomCTA } from "@/components/product/ai-studio/AiStudioBottomCTA";
import { AiStudioBuild } from "@/components/product/ai-studio/AiStudioBuild";
import { AiStudioBuilderTools } from "@/components/product/ai-studio/AiStudioBuilderTools";
import { AiStudioHero } from "@/components/product/ai-studio/AiStudioHero";
import { AiStudioQuote } from "@/components/product/ai-studio/AiStudioQuote";
import { AiStudioScrollCards } from "@/components/product/ai-studio/AiStudioScrollCards";
import { AiStudioSupervise } from "@/components/product/ai-studio/AiStudioSupervise";
import { AiStudioTrustedLogos } from "@/components/product/ai-studio/AiStudioTrustedLogos";
import { AiStudioTrust } from "@/components/product/ai-studio/AiStudioTrust";
import { AiStudioWhyWriter } from "@/components/product/ai-studio/AiStudioWhyWriter";
import {
  AI_STUDIO_ANNA_QUOTE,
  AI_STUDIO_VANGUARD_QUOTE,
} from "@/data/ai-studio";

export const metadata: Metadata = {
  title: "WRITER AI Studio",
  description:
    "Empower business teams to build safely, with AI-native governance and interoperability with your stack.",
  openGraph: {
    title: "WRITER AI Studio",
    description:
      "Empower business teams to build safely, with AI-native governance and interoperability with your stack.",
    url: "https://writer.com/product/ai-studio/",
  },
};

export default function AiStudioPage() {
  return (
    <div className="ai-studio-page bg-[#111113]">
      <AiStudioHero />
      <AiStudioTrustedLogos />
      <AiStudioScrollCards />
      <AiStudioQuote {...AI_STUDIO_VANGUARD_QUOTE} className="quotes_section top_quotes_section" />
      <AiStudioWhyWriter />
      <AiStudioSupervise />
      <AiStudioTrust />
      <AiStudioBuild />
      <AiStudioBuilderTools />
      <AiStudioQuote {...AI_STUDIO_ANNA_QUOTE} className="quotes_section mt-4_5" />
      <AiStudioBottomCTA />
    </div>
  );
}
