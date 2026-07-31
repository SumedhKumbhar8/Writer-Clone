import Link from "next/link";
import type { ReactNode } from "react";
import "@/styles/legal.css";

const SIDEBAR = [
  {
    title: "LEGAL",
    links: [
      { label: "Terms of use", href: "/legal/terms" },
      { label: "Platform agreement", href: "https://writer.com/legal/platform-services/" },
      { label: "Data processing agreement", href: "https://writer.com/legal/data-processing/" },
      { label: "Open model license", href: "https://writer.com/legal/open-model-license/" },
    ],
  },
  {
    title: "PRIVACY",
    links: [
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Cookie notice", href: "https://writer.com/legal/cookie-notice/" },
      { label: "Acceptable use policy", href: "https://writer.com/legal/acceptable-use/" },
      { label: "Subprocessors", href: "https://writer.com/legal/subprocessors/" },
      { label: "WRITER’s approach to global AI regulation", href: "https://writer.com/legal/global-ai-regulation/" },
    ],
  },
  {
    title: "TRUST",
    links: [
      { label: "Security", href: "/legal/security" },
      { label: "Accessibility", href: "/legal/accessibility" },
    ],
  },
] as const;

export function LegalShell({
  title,
  activeHref,
  children,
}: {
  title: string;
  activeHref: string;
  children: ReactNode;
}) {
  return (
    <div className="legal-base-wrapper wr-pt-30">
      <div className="container-default-sm">
        <div className="wr-dc-content wr-dc-content_head">
          <Link href="https://writer.com/legal/" className="legal-hub-link">
            LEGAL HUB
          </Link>
          <h1>{title}</h1>
        </div>

        <div className="legal-base-row">
          <aside className="legal-base-sidebar">
            {SIDEBAR.map((group) => (
              <div key={group.title}>
                <div className="legal-base-sidebar__group-title">{group.title}</div>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={link.href === activeHref ? "is-active" : undefined}
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          <div className="legal-base-container">{children}</div>
        </div>
      </div>
    </div>
  );
}
