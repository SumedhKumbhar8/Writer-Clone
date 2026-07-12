"use client";

import Link from "next/link";
import { navigationData } from "@/data/navigation";
import { useNavbar } from "@/hooks/useNavbar";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  dark?: boolean;
};

export function MobileMenu({ dark = false }: MobileMenuProps) {
  const { isOpen, toggle, close } = useNavbar();
  const { main, cta, signIn } = navigationData;

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className="flex h-11 w-11 items-center justify-center"
        aria-expanded={isOpen}
        aria-label="Toggle menu"
        suppressHydrationWarning
      >
        <span className="relative block h-3.5 w-5">
          <span
            className={cn(
              "absolute left-0 top-0 block h-0.5 w-full",
              dark ? "bg-canvas-white" : "bg-midnight-graphite",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-1.5 block h-0.5 w-full",
              dark ? "bg-canvas-white" : "bg-midnight-graphite",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-3 block h-0.5 w-full",
              dark ? "bg-canvas-white" : "bg-midnight-graphite",
            )}
          />
        </span>
      </button>

      {isOpen ? (
        <div
          className={cn(
            "fixed inset-0 top-[83px] z-40 p-6",
            dark ? "bg-[#111113]" : "bg-canvas-white",
          )}
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {main.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  "inline-flex items-center py-2 text-[16px] font-semibold",
                  dark ? "text-canvas-white" : "text-midnight-graphite",
                )}
              >
                {link.label}
                {link.hasDropdown ? (
                  <span
                    className={cn(
                      "ml-1 inline-block h-0 w-0 border-x-[4px] border-x-transparent border-t-[4px]",
                      dark ? "border-t-canvas-white" : "border-t-midnight-graphite",
                    )}
                    aria-hidden
                  />
                ) : null}
              </Link>
            ))}

            <Link
              href={signIn.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className={cn(
                "mt-4 inline-flex h-11 items-center justify-center rounded-full px-[17px] text-[14px] font-semibold text-canvas-white",
                dark ? "bg-[#333333]" : "bg-[#242424]",
              )}
            >
              {signIn.label}
            </Link>

            <Link
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="inline-flex h-11 items-center justify-center rounded-full bg-action-blue px-[17px] text-[14px] font-semibold text-canvas-white"
            >
              {cta.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
