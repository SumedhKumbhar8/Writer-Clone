"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { blogData } from "@/data/blog";

export function BlogHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-[120] w-full bg-white px-0 pb-[34px] pt-[27px]">
      <div className="relative flex items-center px-10">
        <Link href="/" className="relative z-[2] shrink-0" aria-label="WRITER home">
          <Image
            src={blogData.logos.circle}
            alt="Writer’s room"
            width={48}
            height={49}
            priority
            className="block h-[49px] w-[48px]"
          />
        </Link>

        <Link
          href="/blog"
          className="relative z-[2] ml-1.5 flex h-6 items-center"
          aria-label="Writer’s room"
        >
          <Image
            src={blogData.logos.wordmark}
            alt="Writer’s room"
            width={139}
            height={24}
            priority
            className="h-6 w-auto"
          />
        </Link>

        <nav
          className="absolute left-[300px] top-1/2 z-[1] hidden -translate-y-1/2 lg:block"
          aria-label="Blog categories"
        >
          <ul className="flex items-center gap-8">
            {blogData.nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap text-[14px] font-semibold leading-[22px] text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-[2] ml-auto flex items-center">
          <div className="relative flex h-12 w-12 items-center justify-center">
            {searchOpen ? (
              <input
                type="search"
                placeholder="Search"
                autoFocus
                className="absolute right-0 top-1/2 h-10 w-[280px] -translate-y-1/2 border-b border-black bg-white px-2 text-[14px] outline-none"
                onBlur={() => setSearchOpen(false)}
              />
            ) : null}
            <button
              type="button"
              aria-label="Search"
              className="flex h-12 w-12 items-center justify-center"
              onClick={() => setSearchOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative -ml-[21px] flex h-12 w-12 items-center justify-center lg:ml-0"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="flex w-[18px] flex-col gap-[5px]">
              <span className="block h-[2px] w-full bg-black" />
              <span className="block h-[2px] w-full bg-black" />
              <span className="block h-[2px] w-full bg-black" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="absolute left-0 right-0 top-full z-[130] border-t border-[#e4e7ed] bg-white px-10 py-8 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-4">
            {blogData.nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[16px] font-semibold text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
