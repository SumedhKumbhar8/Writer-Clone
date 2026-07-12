"use client";

import { useMounted } from "@/hooks/useMounted";
import { footerData } from "@/data/footer";

export function NewsletterForm() {
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="h-[54px] w-full rounded-full bg-[#333333]" aria-hidden />
    );
  }

  return (
    <form
      className="flex h-[54px] w-full overflow-hidden rounded-full bg-[#333333] pr-1"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder={footerData.newsletter.placeholder}
        autoComplete="email"
        required
        className="min-w-0 flex-1 bg-transparent px-5 text-[14px] text-canvas-white outline-none placeholder:text-white/50"
      />
      <button
        type="submit"
        className="flex h-[46px] w-[46px] shrink-0 self-center items-center justify-center rounded-full bg-action-blue text-[18px] font-medium leading-none text-canvas-white transition-opacity hover:opacity-90"
        aria-label="Subscribe"
        suppressHydrationWarning
      >
        →
      </button>
    </form>
  );
}
