"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerData } from "@/data/footer";
import { NewsletterForm } from "@/components/layout/Footer/NewsletterForm";
import { ScrollToTopButton } from "@/components/layout/Footer/ScrollToTopButton";

function FooterLinkList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-[12px] text-white/70 transition-colors hover:text-canvas-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/marketing-playbooks") || pathname.startsWith("/academy"))
    return null;

  return (
    <footer className="relative bg-midnight-graphite text-canvas-white">
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-10">
          <div className="shrink-0">
            <Link href="/" aria-label="WRITER home">
              <Image
                src={footerData.logo.src}
                alt={footerData.logo.alt}
                width={footerData.logo.width}
                height={footerData.logo.height}
                className="h-12 w-12"
              />
            </Link>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
            {footerData.columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-[15px] font-semibold">{column.title}</h3>
                <FooterLinkList links={column.links} />
                {column.secondaryLinks ? (
                  <div className="mt-6">
                    <FooterLinkList links={column.secondaryLinks} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:max-w-md">
            <p className="text-[15px] font-semibold leading-snug">
              {footerData.newsletter.title}
            </p>
            <p className="mt-1 text-[14px] text-white/60">{footerData.newsletter.subtitle}</p>
          </div>
          <div className="w-full lg:max-w-md">
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-6 border-t border-white/10 pt-8 lg:grid-cols-[1fr_auto_1fr]">
          <p className="text-center text-[14px] uppercase tracking-[0.05em] text-canvas-white lg:text-left">
            {footerData.copyright}
          </p>

          <ul className="flex items-center justify-center gap-3">
            {footerData.social.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-opacity hover:opacity-80"
                >
                  <Image
                    src={link.icon}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden
                    className="h-4 w-4"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap items-center justify-center lg:justify-end">
            {footerData.legal.map((link, index) => (
              <li key={link.label} className="flex items-center">
                {index > 0 ? (
                  <span className="mx-3 text-[14px] text-white/30" aria-hidden>
                    |
                  </span>
                ) : null}
                {link.label === "Your privacy choices" ? (
                  <button
                    type="button"
                    className="text-[14px] font-semibold uppercase tracking-[2px] text-canvas-white transition-opacity hover:opacity-80"
                    suppressHydrationWarning
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-semibold uppercase tracking-[2px] text-canvas-white transition-opacity hover:opacity-80"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
}
