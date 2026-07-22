import { TrustedLogosMarquee } from "@/components/home/TrustedLogosMarquee";

type TrustedLogosProps = {
  variant?: "light" | "dark";
};

export function TrustedLogos({ variant = "light" }: TrustedLogosProps) {
  return (
    <section className={`homepage__logos-section${variant === "light" ? " light" : ""}`} aria-label="Trusted by leading enterprises">
      <div className="container-default-sm">
        <p className="finServ_hero_logos_text">
          World-class enterprises trust WRITER
        </p>
      </div>

      <TrustedLogosMarquee />
    </section>
  );
}
