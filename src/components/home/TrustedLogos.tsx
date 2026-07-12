import { TrustedLogosMarquee } from "@/components/home/TrustedLogosMarquee";

type TrustedLogosProps = {
  variant?: "light" | "dark";
};

export function TrustedLogos({ variant = "light" }: TrustedLogosProps) {
  const isDark = variant === "dark";

  return (
    <section
      className="trusted-logos-section py-[38px]"
      aria-label="Trusted by leading enterprises"
    >
      <div className="trusted-logos-inner">
        <p
          className={
            isDark
              ? "mb-[14px] text-center text-[16px] font-normal leading-[1.6] text-canvas-white"
              : "trusted-logos-label"
          }
        >
          World-class enterprises trust WRITER
        </p>
      </div>

      <TrustedLogosMarquee />
    </section>
  );
}
