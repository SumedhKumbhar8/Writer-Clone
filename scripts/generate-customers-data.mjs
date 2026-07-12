import fs from "fs";

const stories = JSON.parse(
  fs.readFileSync("scripts/customers-raw.json", "utf8"),
);

const marriott = stories.find(
  (s) => s.id === "generative-ai-6" || s.author === "Paul Dyrwal",
);
if (marriott) {
  marriott.companyName = "Marriott International";
  marriott.id = "marriott-6";
  marriott.companyLogo =
    "https://writer.com/wp-content/uploads/2025/07/Marriott-International.png";
}

fs.writeFileSync("scripts/customers-raw.json", JSON.stringify(stories, null, 2));

const header = `export interface CustomerStory {
  id: string;
  type: "quote" | "case-study" | "webinar";
  companyLogo: string;
  companyName: string;
  content: string;
  bgColor?: string;
  author?: string;
  authorTitle?: string;
  authorTitleLines?: string[];
  subtitle?: string;
  authorImage?: string;
  ctaLabel?: string;
  ctaHref?: string;
  industry: string[];
  department: string[];
  useCase: string[];
  feature: string[];
}

export interface FilterOption {
  label: string;
  value: string;
}

export type FilterKey = "industry" | "department" | "useCase" | "feature";

export const customerFilters = {
  industry: {
    label: "Industry",
    options: [
      { label: "All", value: "all" },
      { label: "Retail & consumer goods", value: "retail-consumer-goods" },
      { label: "Financial services", value: "financial-services" },
      { label: "Healthcare & life sciences", value: "healthcare-life-sciences" },
      { label: "Professional services", value: "professional-services" },
      { label: "Technology", value: "technology" },
    ],
  },
  department: {
    label: "Department",
    options: [
      { label: "All", value: "all" },
      { label: "Customer success", value: "customer-success" },
      { label: "Finance", value: "finance" },
      { label: "HR", value: "hr" },
      { label: "IT", value: "it" },
      { label: "Learning & development", value: "learning-development" },
      { label: "Legal", value: "legal" },
      { label: "Marketing", value: "marketing" },
      { label: "Operations", value: "operations" },
      { label: "Product & UX", value: "product-ux" },
      { label: "Sales", value: "sales" },
      { label: "Support", value: "support" },
    ],
  },
  useCase: {
    label: "Use case",
    options: [
      { label: "All", value: "all" },
      { label: "Analyze", value: "analyze" },
      { label: "Create", value: "create" },
      { label: "Govern", value: "govern" },
    ],
  },
  feature: {
    label: "Feature",
    options: [
      { label: "All", value: "all" },
      { label: "AI Studio", value: "ai-studio" },
      { label: "API", value: "api" },
      { label: "Custom AI apps", value: "custom-ai-apps" },
      { label: "Domain-specific LLMs", value: "domain-specific-llms" },
      { label: "Knowledge Graph", value: "knowledge-graph" },
    ],
  },
} as const;

export const customerLogos = [
  { name: "WTW", src: "/images/customers/logos/wtw.svg", width: 53 },
  { name: "Vanguard", src: "/images/customers/logos/vanguard.svg", width: 84 },
  { name: "Salesforce", src: "/images/customers/logos/salesforce.svg", width: 68 },
  { name: "Qualcomm", src: "/images/customers/logos/qualcomm.svg", width: 89 },
  { name: "American Eagle", src: "/images/customers/logos/american-eagle.svg", width: 81 },
  { name: "Ally", src: "/images/customers/logos/ally.svg", width: 40 },
  { name: "Uber", src: "/images/customers/logos/uber.svg", width: 43 },
  { name: "Lennar", src: "/images/customers/logos/lennar.svg", width: 88 },
  { name: "Accenture", src: "/images/customers/logos/accenture.svg", width: 73 },
  { name: "Hilton", src: "/images/customers/logos/hilton.svg", width: 63 },
  { name: "Dropbox", src: "/images/customers/logos/dropbox.svg", width: 88 },
  { name: "HubSpot", src: "/images/customers/logos/hubspot.svg", width: 71 },
  { name: "AmeriLife", src: "/images/customers/logos/amerilife.svg", width: 91 },
  { name: "New American Funding", src: "/images/customers/logos/new-american-funding.svg", width: 91 },
  { name: "Adore Me", src: "/images/customers/logos/adore-me.svg", width: 86 },
  { name: "6sense", src: "/images/customers/logos/6sense.svg", width: 61 },
  { name: "Commvault", src: "/images/customers/logos/commvault.svg", width: 105 },
] as const;

export const customerStories: CustomerStory[] = `;

const footer = `;

export const customersPageData = {
  hero: {
    title: "Built for enterprises\\nand loved by champions",
    description:
      "World-class companies trust WRITER to maximize productivity and creativity across every team.",
    primaryCta: { label: "Request a demo", href: "/contact" },
    videoSrc: "/videos/customers/kpmg-hero.mp4",
    fullscreenVideoSrc:
      "https://writer.com/wp-content/uploads/2025/01/Salesforce-Writer-VF2-with-Captions.mp4",
  },
  featuredStory: {
    companyLogo: "/images/customers/featured/kpmg-logo.svg",
    companyName: "KPMG",
    description:
      "Accelerates time to market and empowers people with AI and WRITER.",
    ctaLabel: "Learn more",
    ctaHref: "https://writer.com/blog/kpmg-customer-story/",
  },
  logos: customerLogos,
  filters: customerFilters,
  stories: customerStories,
};
`;

const out = header + JSON.stringify(stories, null, 2) + footer;
fs.writeFileSync("src/data/customers.ts", out);
console.log("wrote customers.ts with", stories.length, "stories");
