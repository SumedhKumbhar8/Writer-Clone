import type { Metadata } from "next";
import { BrandHero } from "@/components/product/brand/BrandHero";
import { BrandTrustedLogos } from "@/components/product/brand/BrandTrustedLogos";
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
    <>
      <BrandHero />
      <BrandTrustedLogos />
      <BrandHowItWorks />
      <BrandWhyWriter />
      <BrandTestimonial />
      <BrandBottomCTA />
    </>
  );
}
