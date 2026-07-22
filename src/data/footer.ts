export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
  secondaryLinks?: FooterLink[];
};

export const footerData = {
  logo: {
    src: "https://writer.com/wp-content/uploads/2024/08/footer-logo.svg",
    alt: "WRITER",
    width: 48,
    height: 48,
  },
  newsletter: {
    title: "Get the latest updates about enterprise AI",
    subtitle: "Subscribe to Writer's Brief",
    placeholder: "Add your email*",
  },
  columns: [
    {
      title: "Product",
      links: [
        { label: "Trust", href: "https://writer.com/trust/" },
        { label: "AI Studio", href: "/product/ai-studio/" },
        { label: "Graph RAG", href: "https://writer.com/product/graph-based-rag/" },
        { label: "Palmyra LLMs", href: "/llms/" },
        { label: "WRITER Agent", href: "https://writer.com/product/writer-agent/" },
      ],
      secondaryLinks: [
        { label: "Try for free", href: "https://app.writer.com/register" },
        { label: "Request a demo", href: "https://go.writer.com/demo/" },
        { label: "AI marketing consultation", href: "https://go.writer.com/ai-marketing-consultation" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Guides", href: "/guides" },
        { label: "AI blog", href: "/blog" },
        { label: "AI Agent Library", href: "https://writer.com/agents/" },
        { label: "Engineering blog", href: "/engineering" },
        { label: "Enterprise AI agents", href: "https://writer.com/blog/ai-agents/" },
      ],
      secondaryLinks: [
        { label: "GEO optimization", href: "https://writer.com/blog/geo-aeo-optimization/" },
        { label: "Blog title generator", href: "https://writer.com/agents/blog-title/" },
        { label: "Marketing AI ROI calculator", href: "/ai-roi-calculator/" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "https://writer.com/company/about/" },
        { label: "Careers", href: "https://writer.com/company/careers/" },
        { label: "Partners", href: "https://writer.com/partners/" },
        { label: "Legal hub", href: "https://writer.com/legal/" },
        { label: "Newsroom", href: "https://writer.com/newsroom/" },
        { label: "Contact us", href: "https://writer.com/company/contact/" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Status", href: "https://status.writer.com/" },
        { label: "Help center", href: "https://support.writer.com/" },
        { label: "Trust center", href: "https://trustcenter.writer.com/" },
        { label: "AI Academy", href: "/academy" },
        { label: "Developer docs", href: "https://dev.writer.com/" },
      ],
    },
  ] satisfies FooterColumn[],
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/getwriter",
      icon: "https://writer.com/wp-content/uploads/2024/12/in.svg",
    },
    {
      label: "X",
      href: "https://x.com/get_writer",
      icon: "https://writer.com/wp-content/uploads/2024/12/tw.svg",
    },
    {
      label: "G2",
      href: "https://www.g2.com/products/writer/reviews",
      icon: "https://writer.com/wp-content/uploads/2024/08/g2.svg",
    },
  ],
  legal: [
    { label: "Your privacy choices", href: "#privacy-choices" },
    { label: "Terms", href: "https://writer.com/legal/terms-of-use/" },
    { label: "Privacy", href: "https://writer.com/legal/privacy/" },
  ],
  copyright: `© ${new Date().getFullYear()} WRITER`,
};
