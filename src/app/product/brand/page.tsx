import type { Metadata } from "next";
import { TrustedLogos } from "@/components/home/TrustedLogos";
import { BrandHero } from "@/components/product/brand/BrandHero";
import { BrandHowItWorks } from "@/components/product/brand/BrandHowItWorks";
import { BrandWhyWriter } from "@/components/product/brand/BrandWhyWriter";
import { BrandTestimonial } from "@/components/product/brand/BrandTestimonial";
import { BrandBottomCTA } from "@/components/product/brand/BrandBottomCTA";

export const metadata: Metadata = {
  title: "WRITER Brand - Enterprise AI brand consistency",
  description:
    "WRITER keeps every AI output on-brand with approved language, writing rules, and voice applied automatically.",
  openGraph: {
    title: "WRITER Brand - Enterprise AI brand consistency",
    description:
      "WRITER keeps every AI output on-brand with approved language, writing rules, and voice applied automatically.",
    url: "https://writer.com/brand/",
  },
};

export default function BrandPage() {
  return (
    <div className="brand-page bg-[#111113]">
      <BrandHero />
      <TrustedLogos variant="dark" />
      <BrandHowItWorks />
      <BrandWhyWriter />
      <BrandTestimonial />
      <BrandBottomCTA />
    </div>
  );
}
