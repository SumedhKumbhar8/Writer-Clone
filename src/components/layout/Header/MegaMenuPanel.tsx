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
      className="ml-2 inline-block"
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
    <p className="m-0 pb-[17px] text-[11px] font-semibold uppercase tracking-[3.3px] text-black">
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
        "relative flex w-full items-center rounded-[4px] px-[15px] py-[8px] transition-colors duration-200",
        isProduct
          ? "lg:-ml-[15px] hover:bg-[#f3f5ff]"
          : "gap-[12px] hover:bg-[#f3f3f3]",
      )}
    >
      <span className="relative top-px flex h-[32px] w-[32px] shrink-0 items-center justify-center">
        <Image
          src={link.icon}
          alt=""
          width={link.iconWidth ?? 32}
          height={link.iconHeight ?? 32}
          className="h-[32px] w-[32px] object-contain"
          aria-hidden
        />
      </span>
      <span
        className={cn(
          "text-[14px] font-normal leading-[1.2] text-black",
          isProduct ? "pl-[12px]" : undefined,
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
      <ul className="m-0 list-none p-0">
        {column.links.map((link) => (
          <li key={link.href + link.label}>
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
  const isExternal = featured.href.startsWith("http");

  return (
    <div
      className={cn(
        "flex h-full flex-col",
        divider === "before" ? "border-[#eff0f2] lg:border-l lg:pl-5" : undefined,
      )}
    >
      <MegaMenuTitle>{featured.label}</MegaMenuTitle>
      <Link
        href={featured.href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group/featured relative mt-[10px] inline-flex max-w-full items-center"
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
        <div className="min-w-0 flex-1 pl-5 pr-5">
          <p className="m-0 font-[Poppins,sans-serif] text-[18px] font-normal leading-6 text-black">
            {featured.title}
          </p>
          <span className="mt-[12px] inline-flex items-center text-[12px] font-semibold leading-[18px] text-black group-hover/featured:underline">
            {featured.cta}
            <MegaMenuArrow />
          </span>
        </div>
      </Link>
    </div>
  );
}

function ProductMegaMenu() {
  const { featured, product, platform } = productMegaMenu;

  return (
    <div className="container-menu-lg mx-auto w-full max-w-[1136px] px-[15px]">
      <div className="flex flex-col lg:flex-row-reverse lg:justify-center">
        <div className="w-full py-[20px] lg:w-1/2 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="min-w-0 md:max-w-[290px]">
              <MegaMenuColumnBlock column={product} variant="product" />
            </div>
            <div className="min-w-0 md:max-w-[290px]">
              <MegaMenuColumnBlock column={platform} variant="product" />
            </div>
          </div>
        </div>

        <div className="w-full px-0 py-[20px] lg:w-1/3 lg:max-w-[379px] lg:px-[15px]">
          <MegaMenuFeaturedCard featured={featured} />
        </div>
      </div>
    </div>
  );
}

function SolutionsMegaMenu() {
  const { industries, departments, featured } = solutionsMegaMenu;

  return (
    <div className="mx-auto grid max-w-[1136px] grid-cols-1 gap-[32px] px-[15px] py-[20px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-[40px]">
      <MegaMenuColumnBlock column={industries} />
      <MegaMenuColumnBlock column={departments} />
      <MegaMenuFeaturedCard featured={featured} divider="before" />
    </div>
  );
}

function ResourcesMegaMenu() {
  const { featured, resourcesPrimary, resourcesSecondary } = resourcesMegaMenu;

  return (
    <div className="mx-auto grid max-w-[1136px] grid-cols-1 px-[15px] lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-0">
      <div className="py-[20px] lg:px-[15px]">
        <MegaMenuFeaturedCard featured={featured} />
      </div>
      <div className="grid grid-cols-1 gap-[32px] border-[#eff0f2] py-[20px] md:grid-cols-2 lg:border-l lg:pl-[20px]">
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
    <div className="header-mega-menu border-t-[0.8px] border-[#eff0f2] bg-white shadow-[0_2px_4px_rgb(243,243,243)]">
      {menuId === "product" ? <ProductMegaMenu /> : null}
      {menuId === "solutions" ? <SolutionsMegaMenu /> : null}
      {menuId === "resources" ? <ResourcesMegaMenu /> : null}
    </div>
  );
}
