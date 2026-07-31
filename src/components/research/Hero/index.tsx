import Link from "next/link";

type HeroProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  navItems: { label: string; href: string }[];
};

export function ResearchHero({ title, description, primaryCta }: HeroProps) {
  return (
    <div
      className="top_title_section bg-black px-0 pb-[184px] pt-[126px]"
      style={{
        backgroundImage:
          'url("https://writer.com/wp-content/uploads/2025/05/Frame-2055246664.png")',
        backgroundSize: "748px",
        backgroundPosition: "50% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-default-sm text-center">
        <h1 className="m-0 text-[64px] font-normal leading-none tracking-[-0.64px] text-canvas-white">
          {title}
        </h1>
        <p className="mx-auto mt-[22px] mb-[45px] max-w-none whitespace-pre-line text-[20px] font-normal leading-7 text-fog">
          {description}
        </p>
        <Link
          href={primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[50px] items-center justify-center rounded-[97px] border-[1.6px] border-transparent bg-[#27272D] px-[30px] text-[20px] font-medium text-canvas-white"
        >
          {primaryCta.label}
        </Link>
      </div>
    </div>
  );
}
