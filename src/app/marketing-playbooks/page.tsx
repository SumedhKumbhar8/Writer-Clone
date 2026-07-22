import { PlaybookHub } from "@/components/marketing-playbooks/PlaybookHub";
import { createPageMetadata } from "@/lib/seo";
import "@/styles/marketing-playbooks.css";

export const metadata = createPageMetadata({
  title: "The AI playbooks that 10x marketers run",
  description:
    "Check out the Playbooks used by our marketing team to scale creative, automate workflows, and deliver 10x leverage.",
  path: "/marketing-playbooks",
});

export default function MarketingPlaybooksPage() {
  return <PlaybookHub />;
}
