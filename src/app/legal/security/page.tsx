import { LegalShell } from "@/components/legal/LegalShell";
import { legalData } from "@/data/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Security | Legal hub",
  description: "Writer security information.",
  path: "/legal/security",
});

export default function SecurityPage() {
  const { security } = legalData;

  return (
    <LegalShell title="Security" activeHref="/legal/security">
      <p>Last updated {security.lastUpdated}</p>
      {security.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </LegalShell>
  );
}
