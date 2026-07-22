export type MegaMenuLink = {
  label: string;
  href: string;
  icon: string;
  iconWidth?: number;
  iconHeight?: number;
};

export type MegaMenuFeatured = {
  label: string;
  title: string;
  href: string;
  image: string;
  cta: string;
  imageWidth?: number;
  imageHeight?: number;
};

export type MegaMenuColumn = {
  title: string;
  links: MegaMenuLink[];
};

export const productMegaMenu = {
  featured: {
    label: "New Playbook Hub",
    title: "The AI playbooks 10x marketers run",
    href: "/marketing-playbooks/",
    image: "https://writer.com/wp-content/uploads/2026/03/Side-pop_-320x320-AI-ROI-calculator.png",
    cta: "Explore the hub",
    imageWidth: 646,
    imageHeight: 646,
  } satisfies MegaMenuFeatured,
  product: {
    title: "PRODUCT",
    links: [
      {
        label: "WRITER Agent",
        href: "/product/writer-agent/",
        icon: "https://writer.com/wp-content/uploads/2026/04/product.png",
        iconWidth: 64,
        iconHeight: 64,
      },
      {
        label: "AI Studio",
        href: "/product/ai-studio/",
        icon: "https://writer.com/wp-content/uploads/2026/04/Group-3703.png",
        iconWidth: 64,
        iconHeight: 64,
      },
      {
        label: "Connectors",
        href: "/product/connectors/",
        icon: "https://writer.com/wp-content/uploads/2026/05/Group-3703.svg",
        iconWidth: 64,
        iconHeight: 64,
      },
      {
        label: "Brand",
        href: "/product/brand/",
        icon: "https://writer.com/wp-content/uploads/2026/05/Group-3703-1.svg",
        iconWidth: 64,
        iconHeight: 64,
      },
    ],
  } satisfies MegaMenuColumn,
  platform: {
    title: "PLATFORM",
    links: [
      {
        label: "Palmyra LLMs",
        href: "/llms/",
        icon: "https://writer.com/wp-content/uploads/2026/04/product_fb50aa.png?w=64",
        iconWidth: 64,
        iconHeight: 64,
      },
        {
          label: "Knowledge Graph",
          href: "/product/knowledge-graph/",
          icon: "https://writer.com/wp-content/uploads/2026/04/Analyze.png?w=64",
          iconWidth: 64,
          iconHeight: 64,
        },
      {
        label: "Trust & security",
        href: "/trust/",
        icon: "https://writer.com/wp-content/uploads/2026/04/Frame-559.png?w=64",
        iconWidth: 64,
        iconHeight: 64,
      },
    ],
  } satisfies MegaMenuColumn,
};

export const solutionsMegaMenu = {
  industries: {
    title: "INDUSTRIES",
    links: [
      {
        label: "Financial services",
        href: "/solutions/financial-services/",
        icon: "https://writer.com/wp-content/uploads/2023/03/fs.svg?w=32",
        iconWidth: 32,
        iconHeight: 32,
      },
      {
        label: "Healthcare & life sciences",
        href: "/solutions/healthcare/",
        icon: "https://writer.com/wp-content/uploads/2023/03/hls.svg?w=32",
        iconWidth: 32,
        iconHeight: 32,
      },
      {
        label: "Retail & consumer goods",
        href: "/solutions/retail/",
        icon: "https://writer.com/wp-content/uploads/2023/03/ecommerce-1.svg?w=32",
        iconWidth: 32,
        iconHeight: 32,
      },
      {
        label: "Technology",
        href: "/solutions/technology/",
        icon: "https://writer.com/wp-content/uploads/2023/03/technology-1.svg?w=32",
        iconWidth: 32,
        iconHeight: 32,
      },
    ],
  } satisfies MegaMenuColumn,
  departments: {
    title: "DEPARTMENTS",
    links: [
      {
        label: "Marketing",
        href: "/solutions/marketing/",
        icon: "https://writer.com/wp-content/uploads/2024/09/Marketing-small-1.svg",
        iconWidth: 32,
        iconHeight: 32,
      },
      {
        label: "Sales",
        href: "/solutions/sales/",
        icon: "https://writer.com/wp-content/uploads/2024/09/HR-small.svg",
        iconWidth: 32,
        iconHeight: 32,
      },
      {
        label: "Support",
        href: "/solutions/support/",
        icon: "https://writer.com/wp-content/uploads/2024/09/Support-small.svg",
        iconWidth: 32,
        iconHeight: 32,
      },
    ],
  } satisfies MegaMenuColumn,
  featured: {
    label: "New Webinar",
    title: "Build AI workflows that protect your brand",
    href: "https://go.writer.com/forrester-webinar",
    image: "https://writer.com/wp-content/uploads/2026/06/2026-06-Forrester-HR-Block-top-nav-323x323-1.png",
    cta: "Save your spot",
    imageWidth: 646,
    imageHeight: 646,
  } satisfies MegaMenuFeatured,
};

export const resourcesMegaMenu = {
  featured: {
    label: "NEW 2026 AI SURVEY",
    title: "AI adoption in the enterprise",
    href: "https://go.writer.com/ai-adoption-enterprise-2026",
    image: "https://writer.com/wp-content/uploads/2026/04/WPI2026-%E2%80%93-8.png",
    cta: "Get the report",
    imageWidth: 1100,
    imageHeight: 1100,
  } satisfies MegaMenuFeatured,
  resourcesPrimary: {
    title: "RESOURCES",
    links: [
      {
        label: "Writer's Room blog",
        href: "/blog",
        icon: "https://writer.com/wp-content/uploads/2022/10/blog-icon.svg?w=32",
        iconWidth: 32,
        iconHeight: 32,
      },
      {
        label: "Engineering blog",
        href: "/engineering",
        icon: "https://writer.com/wp-content/uploads/2024/07/writer-engineering-icon.svg?w=32",
        iconWidth: 32,
        iconHeight: 32,
      },
      {
        label: "Guides",
        href: "/guides",
        icon: "https://writer.com/wp-content/uploads/2024/07/guides-icon.svg?w=32",
        iconWidth: 32,
        iconHeight: 32,
      },
      {
        label: "Podcast: Humans of AI",
        href: "/blog/category/humans-in-the-loop",
        icon: "https://writer.com/wp-content/uploads/2025/04/hoai-nav-icon.svg",
        iconWidth: 32,
        iconHeight: 32,
      },
    ],
  } satisfies MegaMenuColumn,
  resourcesSecondary: {
    title: "RESOURCES",
    links: [
      {
        label: "Events & webinars",
        href: "/events",
        icon: "https://writer.com/wp-content/uploads/2025/04/events-nav-icon.svg?w=640",
        iconWidth: 32,
        iconHeight: 32,
      },
      {
        label: "AI ROI calculator",
        href: "/ai-roi-calculator/",
        icon: "https://writer.com/wp-content/uploads/2026/02/ai-roi-calculator-nav-icon.svg?w=640",
        iconWidth: 32,
        iconHeight: 32,
      },
      {
        label: "AI playbook hub",
        href: "/marketing-playbooks/",
        icon: "https://writer.com/wp-content/uploads/2026/03/Playbooks-hub.png?w=64",
        iconWidth: 32,
        iconHeight: 32,
      },
      {
        label: "WRITER Academy",
        href: "/academy",
        icon: "https://writer.com/wp-content/uploads/2026/05/WAIA-ICON.png?w=640",
        iconWidth: 32,
        iconHeight: 32,
      },
    ],
  } satisfies MegaMenuColumn,
};

export type MegaMenuId = "product" | "solutions" | "resources";
