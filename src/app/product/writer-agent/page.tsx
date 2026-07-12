import type { Metadata } from "next";
import { BottomCTA } from "@/components/home/BottomCTA";
import { TrustedLogos } from "@/components/home/TrustedLogos";
import { WriterAgentEnterprise } from "@/components/product/writer-agent/WriterAgentEnterprise";
import { WriterAgentFeatures } from "@/components/product/writer-agent/WriterAgentFeatures";
import { WriterAgentHero } from "@/components/product/writer-agent/WriterAgentHero";
import { WriterAgentHowItWorks } from "@/components/product/writer-agent/WriterAgentHowItWorks";
import { WriterAgentQuote } from "@/components/product/writer-agent/WriterAgentQuote";

export const metadata: Metadata = {
  title: "WRITER Agent - Enterprise AI agent platform",
  description:
    "WRITER Agent autonomously plans and executes work across your data and tools, grounded in your context and governed by enterprise controls.",
  openGraph: {
    title: "WRITER Agent - Enterprise AI agent platform",
    description:
      "WRITER Agent autonomously plans and executes work across your data and tools, grounded in your context and governed by enterprise controls.",
    url: "https://writer.com/product/writer-agent/",
  },
};

export default function WriterAgentPage() {
  return (
    <div className="writer-agent-page bg-[#111113]">
      <WriterAgentHero />
      <TrustedLogos variant="dark" />
      <WriterAgentHowItWorks />
      <WriterAgentEnterprise />
      <WriterAgentQuote />
      <WriterAgentFeatures />
      <BottomCTA />
    </div>
  );
}
