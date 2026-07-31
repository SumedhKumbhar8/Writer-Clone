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
    pathname.startsWith("/product") || pathname.startsWith("/research");
  const [activeMenu, setActiveMenu] = useState<MegaMenuId | null>(null);

  const closeMenu = useCallback(() => setActiveMenu(null), []);

  // writer.com: product pages stay transparent until scroll; research uses solid black header
  const isResearch = pathname.startsWith("/research");
  const headerSolid = scrolled || isResearch;
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
          ? isResearch
            ? "absolute bg-midnight-graphite"
            : isDarkPage
              ? "fixed bg-midnight-graphite"
              : "fixed bg-canvas-white shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : "absolute bg-transparent",
      )}
      onMouseLeave={closeMenu}
    >
      <div className="container-full px-[25px]">
        <div className="topline flex h-[83px] items-center justify-between">
          <Link href="/" className="logo-wrap shrink-0" aria-label="WRITER home">
            <Image
              src="/images/logo.svg"
              alt="WRITER - Enterprise AI platform"
              width={110}
              height={35}
              priority
              className={headerDark ? "invert" : undefined}
            />
          </Link>

          <div className="topline-right flex items-center">
            <nav className="hidden h-[83px] items-center min-[1000px]:flex" aria-label="Main">
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
                        "inline-flex h-[83px] items-center px-[15px] text-[14px] font-semibold transition-opacity hover:opacity-70",
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
                      "inline-flex h-[83px] items-center px-[15px] text-[14px] font-semibold transition-opacity hover:opacity-70",
                      headerDark ? "text-canvas-white" : "text-midnight-graphite",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href={signIn.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={closeMenu}
                className={cn(
                  "hidden h-[83px] items-center px-[15px] text-[14px] font-semibold transition-opacity hover:opacity-70 min-[1000px]:inline-flex",
                  headerDark ? "text-canvas-white" : "text-midnight-graphite",
                )}
              >
                {signIn.label}
              </Link>

              <Link
                href={tryFree.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={closeMenu}
                className="ml-[14px] inline-flex h-[44px] min-w-[113px] items-center justify-center rounded-[82px] bg-action-blue px-[17px] py-[10px] text-[14px] font-semibold text-canvas-white transition-opacity hover:opacity-90"
              >
                {tryFree.label}
              </Link>
            </nav>

            <div className="flex items-center gap-3 min-[1000px]:hidden">
              <Link
                href={tryFree.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[44px] items-center justify-center rounded-[82px] bg-action-blue px-[17px] text-[14px] font-semibold text-canvas-white"
              >
                {tryFree.label}
              </Link>
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
