import type { Metadata } from "next";
import { ConnectorsHero } from "@/components/product/connectors/ConnectorsHero";
import { ConnectorsWhySection } from "@/components/product/connectors/ConnectorsWhySection";
import { ConnectorsShowcase } from "@/components/product/connectors/ConnectorsShowcase";
import { ConnectorsCustomBuilder } from "@/components/product/connectors/ConnectorsCustomBuilder";
import { ConnectorsSecurityGovernance } from "@/components/product/connectors/ConnectorsSecurityGovernance";
import { ConnectorsFAQ } from "@/components/product/connectors/ConnectorsFAQ";
import { ConnectorsBottomCTA } from "@/components/product/connectors/ConnectorsBottomCTA";

export const metadata: Metadata = {
  title: "WRITER Connectors - Enterprise AI platform connectors",
  description:
    "WRITER connects to your data and systems so agents can do the heavy lifting. No more tool-hopping or lost context. Just end-to-end execution.",
  openGraph: {
    title: "WRITER Connectors - Enterprise AI platform connectors",
    description:
      "WRITER connects to your data and systems so agents can do the heavy lifting. No more tool-hopping or lost context. Just end-to-end execution.",
    url: "https://writer.com/product/connectors/",
  },
};

export default function ConnectorsPage() {
  return (
    <>
      <ConnectorsHero />
      <ConnectorsWhySection />
      <ConnectorsShowcase />
      <ConnectorsCustomBuilder />
      <ConnectorsSecurityGovernance />
      <ConnectorsFAQ />
      <ConnectorsBottomCTA />
    </>
  );
}
