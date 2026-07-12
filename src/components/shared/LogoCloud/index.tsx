import Image from "next/image";
import { cn } from "@/lib/utils";

type Logo = {
  name: string;
  src: string;
};

type LogoCloudProps = {
  title?: string;
  logos: Logo[];
  className?: string;
};

export function LogoCloud({ title, logos, className }: LogoCloudProps) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      {title && (
        <p className="text-caption text-center text-slate-gray">{title}</p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {logos.map((logo) => (
          <Image
            key={logo.name}
            src={logo.src}
            alt={logo.name}
            width={120}
            height={40}
            className="h-8 w-auto opacity-60"
          />
        ))}
      </div>
    </div>
  );
}
