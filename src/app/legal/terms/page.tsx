import { LegalShell } from "@/components/legal/LegalShell";
import { legalData } from "@/data/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms of use | Legal hub",
  description: "Writer terms of use.",
  path: "/legal/terms",
});

export default function TermsPage() {
  const { terms } = legalData;

  return (
    <LegalShell title="Terms of use" activeHref="/legal/terms">
      <p>Last updated {terms.lastUpdated}</p>
      {terms.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </LegalShell>
  );
}
