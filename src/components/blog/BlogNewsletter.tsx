"use client";

import Link from "next/link";
import { blogData } from "@/data/blog";

export function BlogNewsletter({
  variant = "default",
}: {
  variant?: "default" | "centered";
}) {
  const { newsletter } = blogData;
  const centered = variant === "centered";

  return (
    <section
      className={`mt-[100px] bg-[#d8e2e6] py-[180px] ${
        centered ? "px-5" : "px-10 xl:px-[70px]"
      }`}
    >
      <div
        className={`mx-auto w-full ${
          centered ? "max-w-[1050px] text-center" : "max-w-full"
        }`}
      >
        <h2
          className="m-0 text-[clamp(36px,4vw,54px)] font-light leading-[60px] text-black"
          style={
            centered ? { fontFamily: "var(--font-formula)" } : undefined
          }
        >
          {newsletter.title}
          <br />
          {newsletter.titleLine2}
        </h2>

        <form
          className={
            centered
              ? "mx-auto mt-[30px] flex max-w-[515px] items-center justify-between gap-3"
              : "mt-12 flex max-w-[520px] items-end border-b border-black pb-2"
          }
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            name="email"
            required
            placeholder={newsletter.placeholder}
            className={
              centered
                ? "min-w-0 flex-1 border-b border-black/30 bg-transparent py-[5px] text-[20px] leading-[23px] text-[#4f4f4f] outline-none placeholder:text-[#4f4f4f]/80"
                : "min-w-0 flex-1 bg-transparent py-3 text-[16px] text-black outline-none placeholder:text-black/50"
            }
          />
          <button
            type="submit"
            className={
              centered
                ? "flex h-[60px] w-[100px] shrink-0 items-center justify-center rounded-full border-[1.6px] border-black bg-black text-[18px] font-semibold leading-[18px] text-white"
                : "px-2 text-[24px] leading-none text-black"
            }
            aria-label="Subscribe"
          >
            →
          </button>
        </form>

        <p
          className={
            centered
              ? "mx-auto mt-[11px] max-w-[515px] text-left text-[11px] leading-[18px] text-[#2b2b2b]"
              : "mt-6 max-w-[640px] text-[12px] leading-[1.5] text-black/70"
          }
        >
          {centered ? <em>{newsletter.privacy}{" "}</em> : <>{newsletter.privacy}{" "}</>}
          <Link href={newsletter.privacyHref} className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
