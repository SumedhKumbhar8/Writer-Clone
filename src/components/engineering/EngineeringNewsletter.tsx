"use client";

import Link from "next/link";
import { engineeringData } from "@/data/engineering";

export function EngineeringNewsletter() {
  const { newsletter } = engineeringData;

  return (
    <section className="bg-[#d8e2e6] py-[180px]">
      <div className="mx-auto w-full max-w-[1080px] px-[15px] text-center">
        <h2 className="eng-formula m-0 text-[clamp(36px,4vw,54px)] font-light leading-[60px] text-black">
          {newsletter.title}
          <br />
          {newsletter.titleLine2}
        </h2>

        <form
          className="mx-auto mt-[30px] flex max-w-[515px] flex-wrap items-stretch text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            name="email"
            required
            placeholder={newsletter.placeholder}
            className="min-w-0 flex-1 border-b border-black bg-transparent py-[5px] text-[20px] leading-[23px] text-[#4f4f4f] outline-none placeholder:text-[#4f4f4f]/60"
          />
          <button
            type="submit"
            className="flex h-[60px] w-[100px] shrink-0 items-center justify-center rounded-[82px] border-[1.6px] border-black bg-black text-[18px] font-semibold leading-[18px] text-white"
            aria-label="Subscribe"
          >
            →
          </button>

          <p className="mt-[11px] w-full text-[11px] leading-[18px] text-[#2b2b2b]">
            {newsletter.privacy}{" "}
            <Link href={newsletter.privacyHref} className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
