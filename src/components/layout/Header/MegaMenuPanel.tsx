import Image from "next/image";
import Link from "next/link";
import type { MegaMenuColumn, MegaMenuFeatured, MegaMenuLink } from "@/data/mega-menus";
import {
  productMegaMenu,
  resourcesMegaMenu,
  solutionsMegaMenu,
  type MegaMenuId,
} from "@/data/mega-menus";
import { cn } from "@/lib/utils";

function MegaMenuArrow() {
  return (
    <svg
      width="16"
      height="7"
      viewBox="0 0 16 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className="inline-block"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.01 2.625H0V4.375H12.01V7L16 3.5L12.01 0V2.625Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MegaMenuTitle({ children }: { children: string }) {
  return (
    <p className="mb-0 pb-[17px] text-[11px] font-semibold uppercase tracking-[3.3px] text-midnight-graphite">
      {children}
    </p>
  );
}

function MegaMenuLinkItem({
  link,
  variant = "default",
}: {
  link: MegaMenuLink;
  variant?: "default" | "product";
}) {
  const isExternal = link.href.startsWith("http");
  const isProduct = variant === "product";

  return (
    <Link
      href={link.href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "relative flex w-full items-center rounded-[4px] px-[15px] transition-colors duration-200",
        isProduct ? "py-2 hover:bg-[#f3f5ff] lg:-ml-[15px]" : "gap-3 py-2 hover:bg-[#f3f3f3]",
      )}
    >
      <span className="relative top-px flex h-8 w-8 shrink-0 items-center justify-center">
        <Image
          src={link.icon}
          alt=""
          width={link.iconWidth ?? 32}
          height={link.iconHeight ?? 32}
          className="h-8 w-8 object-contain"
          aria-hidden
        />
      </span>
      <span
        className={cn(
          "text-[14px] font-normal leading-[1.2] text-midnight-graphite",
          isProduct ? "pl-5" : undefined,
        )}
      >
        {link.label}
      </span>
    </Link>
  );
}

function MegaMenuColumnBlock({
  column,
  variant = "default",
}: {
  column: MegaMenuColumn;
  variant?: "default" | "product";
}) {
  return (
    <div>
      <MegaMenuTitle>{column.title}</MegaMenuTitle>
      <ul className="space-y-0">
        {column.links.map((link) => (
          <li key={link.href}>
            <MegaMenuLinkItem link={link} variant={variant} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function MegaMenuFeaturedCard({
  featured,
  divider = "none",
}: {
  featured: MegaMenuFeatured;
  divider?: "none" | "before";
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col pt-3 pb-3",
        divider === "before" ? "border-[#eff0f2] lg:border-l lg:pl-5" : "lg:pl-5",
      )}
    >
      <MegaMenuTitle>{featured.label}</MegaMenuTitle>
      <Link
        href={featured.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group/featured relative mt-2 inline-flex max-w-full items-center lg:mt-[50px]"
      >
        <div className="relative h-[112px] w-[112px] shrink-0">
          <Image
            src={featured.image}
            alt=""
            width={112}
            height={112}
            className="h-[112px] w-[112px] object-cover"
          />
        </div>
        <div className="min-w-0 flex-1 pl-5">
          <p className="font-display text-[18px] font-normal leading-[1.33] text-midnight-graphite">
            {featured.title}
          </p>
          <span className="mt-5 inline-flex items-center text-[12px] font-semibold leading-normal text-midnight-graphite group-hover/featured:underline">
            {featured.cta}
            <span className="ml-2">
              <MegaMenuArrow />
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
}

function ProductMegaMenu() {
  const { featured, product, platform } = productMegaMenu;

  return (
    <div className="mx-auto grid max-w-[1136px] grid-cols-1 px-5 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-0 lg:px-10">
      <MegaMenuFeaturedCard featured={featured} />
      <div className="grid grid-cols-1 border-[#eff0f2] pt-3 pb-3 md:grid-cols-2 md:gap-3 lg:-mx-1.5 lg:gap-0 lg:border-l lg:pl-5">
        <div className="lg:px-1.5">
          <MegaMenuColumnBlock column={product} variant="product" />
        </div>
        <div className="lg:px-1.5">
          <MegaMenuColumnBlock column={platform} variant="product" />
        </div>
      </div>
    </div>
  );
}

function SolutionsMegaMenu() {
  const { industries, departments, featured } = solutionsMegaMenu;

  return (
    <div className="mx-auto grid max-w-[1136px] grid-cols-1 gap-8 px-5 py-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10 lg:px-10 lg:py-3">
      <MegaMenuColumnBlock column={industries} />
      <MegaMenuColumnBlock column={departments} />
      <MegaMenuFeaturedCard featured={featured} divider="before" />
    </div>
  );
}

function ResourcesMegaMenu() {
  const { featured, resourcesPrimary, resourcesSecondary } = resourcesMegaMenu;

  return (
    <div className="mx-auto grid max-w-[1136px] grid-cols-1 px-5 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-0 lg:px-10">
      <MegaMenuFeaturedCard featured={featured} />
      <div className="grid grid-cols-1 gap-8 border-[#eff0f2] pt-3 pb-3 md:grid-cols-2 lg:border-l lg:pl-5">
        <MegaMenuColumnBlock column={resourcesPrimary} />
        <MegaMenuColumnBlock column={resourcesSecondary} />
      </div>
    </div>
  );
}

type MegaMenuPanelProps = {
  menuId: MegaMenuId;
};

export function MegaMenuPanel({ menuId }: MegaMenuPanelProps) {
  return (
    <div className="header-mega-menu border-t border-[#f3f3f3] bg-canvas-white shadow-[0_4px_4px_rgba(243,243,243,1)]">
      {menuId === "product" ? <ProductMegaMenu /> : null}
      {menuId === "solutions" ? <SolutionsMegaMenu /> : null}
      {menuId === "resources" ? <ResourcesMegaMenu /> : null}
    </div>
  );
}
