"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CustomerStory } from "@/data/customers";

type CustomerStoryCardProps = {
  story: CustomerStory;
  className?: string;
};

function ArrowIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
      <circle cx="17" cy="17" r="13.333" transform="rotate(135 17 17)" />
      <path stroke="currentColor" strokeWidth="1.4" d="m11.81 21.709 9.899-9.9" />
      <path
        d="m22.204 20.223-.495-8.414-8.414-.495"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function CustomerStoryCard({ story, className }: CustomerStoryCardProps) {
  const isQuote = story.type === "quote";
  const isExternal = story.ctaHref?.startsWith("http");

  if (isQuote) {
    return (
      <article className={cn("customers-story-card", className)}>
        <div className="mb-4 flex min-h-10 justify-center">
          <Image
            src={story.companyLogo}
            alt={story.companyName}
            width={150}
            height={60}
            className="h-[60px] w-auto max-w-[150px] object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-base leading-relaxed text-midnight-graphite sm:text-xl">
            {story.content}
          </p>
          {story.author ? (
            <p className="mt-2 text-sm text-midnight-graphite">
              <strong>{story.author}</strong>
            </p>
          ) : null}
          {(story.authorTitleLines?.length
            ? story.authorTitleLines
            : story.authorTitle
              ? [story.authorTitle]
              : []
          ).map((line) => (
            <p key={line} className="text-sm text-slate-gray">
              {line}
            </p>
          ))}
        </div>
        {story.authorImage ? (
          <div className="mt-auto flex justify-end pt-3">
            <Image
              src={story.authorImage}
              alt={story.author || story.companyName}
              width={70}
              height={70}
              className="h-[70px] w-[70px] rounded-full object-cover"
            />
          </div>
        ) : null}
      </article>
    );
  }

  const typeLabel = story.type === "webinar" ? "Webinar" : "Case study";
  const href = story.ctaHref || "#";

  return (
    <article
      className={cn("customers-story-card customers-story-card--colored", className)}
      style={{ backgroundColor: story.bgColor || "#f6effd" }}
    >
      <div className="mb-3 flex min-h-8 justify-start">
        <Image
          src={story.companyLogo}
          alt={story.companyName}
          width={120}
          height={40}
          className="h-8 w-auto max-w-[140px] object-contain object-left"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <p className="text-sm text-slate-gray">
          <strong>{typeLabel}</strong>
        </p>
        <p className="text-xl leading-relaxed text-midnight-graphite">{story.content}</p>
        {story.subtitle ? (
          <p className="text-sm text-slate-gray">{story.subtitle}</p>
        ) : null}
        {(story.authorTitleLines || []).map((line) => (
          <p key={line} className="text-sm text-slate-gray">
            {line}
          </p>
        ))}
        {story.author && !story.authorTitleLines?.length && story.authorTitle ? (
          <p className="text-sm text-slate-gray">{story.authorTitle}</p>
        ) : null}
        {story.author ? (
          <p className="text-sm text-midnight-graphite">
            <strong>{story.author}</strong>
          </p>
        ) : null}
      </div>
      <div className="relative mt-auto flex items-end justify-between">
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="customers-story-card__cta"
        >
          <span>{story.ctaLabel || "Read more"}</span>
          <ArrowIcon />
        </Link>
        {story.authorImage ? (
          <div className="-mb-3 -mr-5 ml-auto">
            <Image
              src={story.authorImage}
              alt={story.author || story.companyName}
              width={114}
              height={130}
              className="h-[130px] w-[114px] object-cover object-top"
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
