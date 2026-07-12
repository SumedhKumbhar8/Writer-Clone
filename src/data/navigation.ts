export type NavLink = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

export const navigationData = {
  announcement: {
    text: "AI adoption in the enterprise",
    href: "https://writer.com/ai-survey/",
    cta: "Get the report",
  },
  main: [
    { label: "Product", href: "#product", hasDropdown: true },
    { label: "Solutions", href: "#solutions", hasDropdown: true },
    { label: "Research", href: "/research/" },
    { label: "Plans", href: "/plans/" },
    { label: "Customers", href: "/customers/" },
    { label: "Resources", href: "#resources", hasDropdown: true },
  ] satisfies NavLink[],
  tryFree: {
    label: "Try for free",
    href: "https://app.writer.com/register",
  },
  signIn: {
    label: "Sign in",
    href: "https://app.writer.com/login",
  },
  cta: {
    label: "Try for free",
    href: "https://app.writer.com/register",
  },
  megaMenu: {
    platform: [
    { label: "WRITER Agent", href: "/product/writer-agent/" },
      { label: "AI Studio", href: "/product/ai-studio/" },
      { label: "Palmyra LLMs", href: "https://writer.com/product/palmyra-llms/" },
      { label: "Trust & security", href: "https://writer.com/trust/" },
    ],
  } satisfies Record<string, NavLink[]>,
};
