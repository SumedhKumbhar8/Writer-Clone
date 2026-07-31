import { LegalShell } from "@/components/legal/LegalShell";
import { legalData } from "@/data/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Writer privacy policy | Legal hub",
  description: "Writer privacy policy.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  const { privacy } = legalData;

  return (
    <LegalShell title="Privacy policy" activeHref="/legal/privacy">
      <p>Last updated {privacy.lastUpdated}</p>
      {privacy.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </LegalShell>
  );
}
