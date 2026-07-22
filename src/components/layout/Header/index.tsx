"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { MegaMenuPanel } from "@/components/layout/Header/MegaMenuPanel";
import { MobileMenu } from "@/components/layout/MobileMenu";
import type { MegaMenuId } from "@/data/mega-menus";
import { navigationData } from "@/data/navigation";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

function NavChevron({ dark, open }: { dark?: boolean; open?: boolean }) {
  return (
    <span
      className={cn(
        "ml-1 inline-block h-0 w-0 border-x-[4px] border-x-transparent border-t-[4px] transition-transform duration-200",
        dark ? "border-t-canvas-white" : "border-t-midnight-graphite",
        open && "rotate-180",
      )}
      aria-hidden
    />
  );
}

const MEGA_MENU_IDS: Record<string, MegaMenuId> = {
  Product: "product",
  Solutions: "solutions",
  Resources: "resources",
};

export function Header() {
  const pathname = usePathname();
  const scrolled = useScroll(20);
  const { main, tryFree, signIn } = navigationData;
  const isDarkPage =
    pathname.startsWith("/product/") || pathname.startsWith("/research/");
  const [activeMenu, setActiveMenu] = useState<MegaMenuId | null>(null);

  const closeMenu = useCallback(() => setActiveMenu(null), []);

  const headerSolid = isDarkPage || scrolled;
  const headerDark = isDarkPage;

  // Blog / engineering / ROI / playbook hub use their own headers
  if (
    pathname.startsWith("/blog") ||
    pathname.startsWith("/engineering") ||
    pathname.startsWith("/ai-roi-calculator") ||
    pathname.startsWith("/marketing-playbooks") ||
    pathname.startsWith("/academy")
  )
    return null;

  return (
    <header
      className={cn(
        "left-0 right-0 top-0 z-[100] transition-colors duration-200",
        headerSolid
          ? isDarkPage
            ? "fixed bg-midnight-graphite"
            : "fixed bg-canvas-white shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : "absolute bg-transparent",
      )}
      onMouseLeave={closeMenu}
    >
      <div className="mx-auto flex h-[83px] max-w-[1280px] items-center justify-between px-5 lg:px-10">
        <Link href="/" className="shrink-0" aria-label="WRITER home">
          <Image
            src="/images/logo.svg"
            alt="WRITER - Enterprise AI platform"
            width={110}
            height={35}
            priority
            className={headerDark ? "invert" : undefined}
          />
        </Link>

        <div className="flex items-center gap-6 min-[1000px]:gap-8">
          <nav className="hidden items-center gap-7 min-[1000px]:flex" aria-label="Main">
            {main.map((link) => {
              const megaMenuId = MEGA_MENU_IDS[link.label];

              if (megaMenuId) {
                const isOpen = activeMenu === megaMenuId;

                return (
                  <button
                    key={link.label}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onMouseEnter={() => setActiveMenu(megaMenuId)}
                    onFocus={() => setActiveMenu(megaMenuId)}
                    className={cn(
                      "inline-flex items-center text-[14px] font-semibold transition-opacity hover:opacity-70",
                      headerDark ? "text-canvas-white" : "text-midnight-graphite",
                    )}
                    suppressHydrationWarning
                  >
                    {link.label}
                    <NavChevron dark={headerDark} open={isOpen} />
                  </button>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onMouseEnter={closeMenu}
                  className={cn(
                    "inline-flex items-center text-[14px] font-semibold transition-opacity hover:opacity-70",
                    headerDark ? "text-canvas-white" : "text-midnight-graphite",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 min-[1118px]:gap-4">
            <Link
              href={tryFree.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={closeMenu}
              className="inline-flex h-11 items-center justify-center rounded-full bg-action-blue px-[17px] text-[17px] font-semibold text-canvas-white transition-opacity hover:opacity-90"
            >
              {tryFree.label}
            </Link>

            <Link
              href={signIn.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={closeMenu}
              className={cn(
                "hidden h-11 items-center justify-center rounded-full px-[17px] text-[14px] font-semibold text-canvas-white transition-opacity hover:opacity-90 min-[1000px]:inline-flex",
                headerDark ? "bg-[#333333]" : "bg-[#242424]",
              )}
            >
              {signIn.label}
            </Link>

            <div className="min-[1000px]:hidden">
              <MobileMenu dark={headerDark} />
            </div>
          </div>
        </div>
      </div>

      {activeMenu ? (
        <div className="hidden min-[1000px]:block" onMouseEnter={() => setActiveMenu(activeMenu)}>
          <MegaMenuPanel menuId={activeMenu} />
        </div>
      ) : null}
    </header>
  );
}
