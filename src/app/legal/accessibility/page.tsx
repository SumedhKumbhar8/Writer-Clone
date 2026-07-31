import { LegalShell } from "@/components/legal/LegalShell";
import { legalData } from "@/data/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Accessibility | Legal hub",
  description: "Writer accessibility information.",
  path: "/legal/accessibility",
});

export default function AccessibilityPage() {
  const { accessibility } = legalData;

  return (
    <LegalShell title="Accessibility" activeHref="/legal/accessibility">
      <p>Last updated {accessibility.lastUpdated}</p>
      {accessibility.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </LegalShell>
  );
}
