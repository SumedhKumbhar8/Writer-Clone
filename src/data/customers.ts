export interface CustomerStory {
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

export const customerStories: CustomerStory[] = [
  {
    "id": "clorox-0",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2026/04/logo-mark-1.png",
    "companyName": "Clorox",
    "content": "It's north of 85% savings in terms of time and tasks that go away.",
    "industry": [
      "retail-consumer-goods"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Matt Harker",
    "authorTitle": "VP, Consumer Experience Transformation",
    "authorTitleLines": [
      "VP, Consumer Experience",
      "Transformation"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2026/04/Paul-Dyrwal-1.png"
  },
  {
    "id": "ee-1",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2026/01/svgexport-1-32-1-1.png",
    "companyName": "EE",
    "content": "How EE transformed marketing operations to scale 4,500+ products",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "product-ux",
      "operations"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Bradley Lane",
    "authorTitle": "Head of Product, EE part of BT",
    "authorTitleLines": [
      "Head of Product,",
      "EE part of BT"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2026/01/Frame-4187-1.png",
    "ctaLabel": "Watch now",
    "ctaHref": "https://go.writer.com/ee-webinar"
  },
  {
    "id": "vois-vodafone-2",
    "type": "webinar",
    "companyLogo": "https://writer.com/wp-content/uploads/2026/01/logo-1-1.png",
    "companyName": "VOIS & Vodafone",
    "content": "VOIS and Vodafone UK transform marketing operations, cutting content creation time by 50% and saving employees a day per week with WRITER",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "operations"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Chris Meads",
    "authorTitle": "Chief Commercial Officer",
    "authorTitleLines": [
      "Chief Commercial Officer"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2026/01/Group-4086.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/vois-vodafone-marketing-transformation/"
  },
  {
    "id": "scan-health-plan-3",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2026/01/Scan.png",
    "companyName": "SCAN Health Plan",
    "content": "How SCAN Health Plan is personalizing member communications with WRITER",
    "industry": [
      "healthcare-life-sciences"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Corinne Stroum",
    "authorTitle": "Head of Emerging Technologies",
    "authorTitleLines": [
      "Head of Emerging Technologies"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2026/01/Frame-4187.png",
    "ctaLabel": "Watch now",
    "ctaHref": "https://writer.com/blog/scan-customer-story/"
  },
  {
    "id": "kpmg-4",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2025/07/KPMG_logo-1.svg",
    "companyName": "KPMG",
    "content": "How KPMG accelerates time to market and empowers people with AI and WRITER.",
    "industry": [
      "technology",
      "professional-services"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Lauren Boyman",
    "authorTitle": "CMO, KPMG Americas",
    "authorTitleLines": [
      "CMO, KPMG Americas"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2025/07/kpmg_customers.png",
    "ctaLabel": "Watch now",
    "ctaHref": "https://writer.com/blog/kpmg-customer-story/"
  },
  {
    "id": "vanguard-5",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2025/07/Group_1bfebf.png",
    "companyName": "Vanguard",
    "content": "Vanguard achieves 57% faster time to market and launches its first client-facing AI agent.",
    "industry": [
      "financial-services"
    ],
    "department": [
      "marketing",
      "support"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2025/07/vanguard-1.png",
    "ctaLabel": "Watch now",
    "ctaHref": "https://writer.com/blog/vanguard-customer-story/"
  },
  {
    "id": "marriott-6",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2025/07/Marriott-International.png",
    "companyName": "Marriott International",
    "content": "I want 100% adoption and 100% certification with Writer across teams because I know if someone's using the tool, then their imagination is unleashed on what the next use case could be.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Paul Dyrwal",
    "authorTitle": "VP, Generative AI",
    "authorTitleLines": [
      "VP, Generative AI"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2025/07/Paul-Dyrwal.png"
  },
  {
    "id": "medisolv-7",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2025/04/Medisolv-Logo.png",
    "companyName": "Medisolv",
    "content": "Medisolv uses WRITER to decode complex healthcare regulations and save 80% of time in knowledge production.",
    "industry": [
      "healthcare-life-sciences"
    ],
    "department": [
      "product-ux"
    ],
    "useCase": [
      "analyze",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2025/04/medisolv-customers-page-2.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/medisolv-customer-story/"
  },
  {
    "id": "salesforce-8",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2025/01/Component-1.svg",
    "companyName": "Salesforce",
    "content": "Salesforce saves 1 work day per week and deploys agents at scale with AI Studio.",
    "industry": [
      "financial-services",
      "technology"
    ],
    "department": [
      "support",
      "sales"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2026/02/Annemaria-Nicholson_-1.png",
    "ctaLabel": "Watch now",
    "ctaHref": "https://writer.com/blog/salesforce-customer-story/"
  },
  {
    "id": "qualcomm-9",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/11/qualcomm-customers-page.svg",
    "companyName": "Qualcomm",
    "content": "Qualcomm saves 2,400 hours per month and manages 1,200 trademarks and terms with WRITER.",
    "industry": [
      "technology"
    ],
    "department": [
      "legal"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "subtitle": "With Chief Marketing Officer Don McGuire",
    "authorImage": "https://writer.com/wp-content/uploads/2024/11/don-customer-page.png",
    "ctaLabel": "Watch now",
    "ctaHref": "https://writer.com/blog/qualcomm-customer-story/"
  },
  {
    "id": "cirrusmd-10",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/10/CirrusMD-logo-black-1-1.png",
    "companyName": "CirrusMD",
    "content": "CirrusMD sees 15x benefit engagements by patients and 234% increase in physician direction to benefits with WRITER.",
    "industry": [
      "healthcare-life-sciences",
      "technology"
    ],
    "department": [
      "it"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/10/cirrusmd-customers-quote-compressed.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/cirrusmd-customer-story/"
  },
  {
    "id": "franklin-templeton-11",
    "type": "webinar",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/09/FT_logo_pos_RGB@2x.png",
    "companyName": "Franklin Templeton",
    "content": "SVP of AI & Digital Transformation Deep Srivastav of Franklin Templeton discusses how generative AI is transforming workflows in finance and the impact of specialized models.",
    "industry": [
      "financial-services",
      "technology"
    ],
    "department": [
      "operations"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "domain-specific-llms"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/09/deep-srivastav-1.png",
    "ctaLabel": "Watch now",
    "ctaHref": "https://go.writer.com/finance-8-22"
  },
  {
    "id": "uber-12",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/09/Uber.svg",
    "companyName": "Uber",
    "content": "Uber uses WRITER to scale a central knowledge system, automatically creating high-quality support experiences for ~40,000 agents across countries and regions.",
    "industry": [
      "technology"
    ],
    "department": [
      "support"
    ],
    "useCase": [
      "analyze",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/09/Hadley-uber.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/uber-customer-story/"
  },
  {
    "id": "omnea-ventures-13",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2026/01/Omnea-Ventures-Logo-2.svg",
    "companyName": "Omnea Ventures",
    "content": "WRITER nailed it: agentic AI that actually works at scale, Knowledge Graphs that unlock real value, UX that users love, and a customer success model that ensures impact. This is what differentiation looks like.",
    "industry": [
      "technology"
    ],
    "department": [
      "product-ux",
      "support"
    ],
    "useCase": [
      "analyze",
      "create"
    ],
    "feature": [
      "ai-studio",
      "knowledge-graph",
      "domain-specific-llms",
      "api"
    ],
    "author": "Ajay Dhaul",
    "authorTitle": "Founder & CEO, Omnea Ventures",
    "authorTitleLines": [
      "Founder & CEO, Omnea Ventures"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/01/Ajay-Dhaul-bw-large.png"
  },
  {
    "id": "lennar-14",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/09/Lennar-healthcare.png",
    "companyName": "Lennar",
    "content": "WRITER has created a full-stack, soup-to-nuts AI solution that helps elevate everything from marketing to product development, with endless use cases. Their solution’s maturity, strong focus on security, and real-world experience in rolling out AI programs make them the obvious partner for Lennar.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "product-ux",
      "it"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Ori Klein",
    "authorTitle": "VP, Digital Marketing and Product",
    "authorTitleLines": [
      "VP, Digital Marketing and Product"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/08/Ori-Klein.png"
  },
  {
    "id": "n26-15",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/10/N26_logo.svg",
    "companyName": "N26",
    "content": "N26 reduces 58% time on work and increases employee confidence by 50% with WRITER",
    "industry": [
      "financial-services",
      "technology"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/11/Katie-Louise-Wright.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/n26-customer-story/"
  },
  {
    "id": "dropbox-16",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/11/customers-logo-dropbox.svg",
    "companyName": "Dropbox",
    "content": "With WRITER, Dropbox increases productivity across 12 departments and ensures brand compliance across the company.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "product-ux",
      "legal"
    ],
    "useCase": [
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/11/customers-color-headshot-kate-pluth.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/dropbox-customer-story/"
  },
  {
    "id": "skyscanner-17",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2025/04/skyscanner-logo-small.png",
    "companyName": "Skyscanner",
    "content": "WRITER improves our internal knowledge management and reduces time it takes to complete key tasks by half. With 90% of users reporting substantial time savings and improved consistency, WRITER is an essential platform that helps us scale our teams.",
    "industry": [
      "healthcare-life-sciences",
      "technology"
    ],
    "department": [
      "it"
    ],
    "useCase": [
      "analyze",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Narelle Murphy",
    "authorTitle": "Head of Content Design",
    "authorTitleLines": [
      "Head of Content Design"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2025/04/Narelle-Murphy.png"
  },
  {
    "id": "commvault-18",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2025/07/commvault.png",
    "companyName": "Commvault",
    "content": "Commvault accelerates workflows and enable go-to-market teams to self-serve enablement with a chat agent custom-built by WRITER that was deployed in weeks.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "support",
      "sales",
      "operations"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio",
      "api"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/09/customers-color-headshot-anna-griffin.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/commvault-customer-story/"
  },
  {
    "id": "adore-me-19",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/07/Adore_me_svg.svg",
    "companyName": "Adore Me",
    "content": "Adore Me builds agents with WRITER AI Studio to launch in a new international market in 10 days and increase non-branded search to PDP pages by 40%.",
    "industry": [
      "retail-consumer-goods"
    ],
    "department": [
      "marketing",
      "support"
    ],
    "useCase": [
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/09/customers-color-headshot-ranjan-roy.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/adore-me-customer-story/"
  },
  {
    "id": "johnson-financial-group-20",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/09/Mask-group.svg",
    "companyName": "Johnson Financial Group",
    "content": "Since we began using WRITER, we’ve seen a 53% increase in productivity and a notable reduction in the time from concept to execution. WRITER ensures that our content remains consistent and on-brand.",
    "industry": [
      "financial-services",
      "technology"
    ],
    "department": [
      "marketing",
      "product-ux"
    ],
    "useCase": [
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Alyssa Schwabe",
    "authorTitle": "VP of Digital Marketing",
    "authorTitleLines": [
      "VP of Digital Marketing"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/07/alyssa_schwabe.png"
  },
  {
    "id": "sprout-social-21",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/12/Vector.svg",
    "companyName": "Sprout Social",
    "content": "Sprout Social shares strategic knowledge and sees 68% time savings with WRITER",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "analyze",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/12/Andrew-Strickman-green.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/sprout-social-customer-story/"
  },
  {
    "id": "viasat-22",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2025/02/Viasat-1.png",
    "companyName": "Viasat",
    "content": "WRITER helps us produce content at scale without adding headcount or freelancers. Their proprietary LLMs are especially well-suited for companies like Viasat, where security is paramount.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "it"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "domain-specific-llms"
    ],
    "author": "Jamie Mackey",
    "authorTitle": "Director of Content Creation and Strategy",
    "authorTitleLines": [
      "Director of Content Creation and Strategy"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2025/02/Jamie-Mackie.png"
  },
  {
    "id": "ttec-23",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2025/04/ttec.svg",
    "companyName": "TTEC",
    "content": "TTEC sees a 6.5X increase in efficiency across key design workflows and an average of 50% time savings with Writer AI Studio and Knowledge Graph",
    "industry": [
      "technology"
    ],
    "department": [
      "product-ux",
      "operations"
    ],
    "useCase": [
      "analyze",
      "create"
    ],
    "feature": [
      "ai-studio",
      "knowledge-graph"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2025/03/ttec-customers-card.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/ttec-customer-story/"
  },
  {
    "id": "hubspot-24",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/09/customers-logo-hubspot.png",
    "companyName": "HubSpot",
    "content": "Head of Content Design Jonathon Colman and his teams at Hubspot work faster and more confidently with WRITER.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "product-ux"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/09/customers-color-headshot-jonathon-colman.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/hubspot-customer-story/"
  },
  {
    "id": "eptura-25",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/06/Eptura-2.png",
    "companyName": "Eptura",
    "content": "With WRITER, we were able to quickly update over 190 web pages, allowing us to deprecate older assets. We completed what would have previously been a 3-4 month update and migration process in just a few weeks. The significant time savings were crucial for the rapid completion of the project.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "api"
    ],
    "author": "Meg Swanson",
    "authorTitle": "CMO",
    "authorTitleLines": [
      "CMO"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/06/Meg-Swanson.png"
  },
  {
    "id": "6sense-26",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/09/customers-logo-6sense.png",
    "companyName": "6sense",
    "content": "By integrating WRITER into their workflows, 6sense increases marketing outputs by 50% and rebranded 100 blogs in 100 minutes.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "operations"
    ],
    "useCase": [
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/09/customers-color-headshot-latane-conant.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/6sense-customer-story/"
  },
  {
    "id": "amerilife-27",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/05/amerilife.svg",
    "companyName": "AmeriLife",
    "content": "WRITER consistently delivers impactful content that resonates with our audience and helps our sales teams reach their goals. We couldn't be happier with the results.",
    "industry": [
      "financial-services"
    ],
    "department": [
      "marketing",
      "sales"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "custom-ai-apps"
    ],
    "author": "Jeffrey Maldonado",
    "authorTitle": "SVP, Brand Marketing & Creative Strategy",
    "authorTitleLines": [
      "SVP, Brand Marketing & Creative Strategy"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/05/jeffrey-maldonado.png"
  },
  {
    "id": "curology-28",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/08/Curology.svg",
    "companyName": "Curology",
    "content": "Deployed across five departments, WRITER helps Curology speed up time to market, ensure medical and legal compliance, and enables a shift towards more strategic work.",
    "industry": [
      "healthcare-life-sciences",
      "technology"
    ],
    "department": [
      "marketing",
      "legal"
    ],
    "useCase": [
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/09/Kali-Swenson-4.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/curology-customer-story/"
  },
  {
    "id": "redpin-29",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/08/redpin.svg",
    "companyName": "Redpin",
    "content": "WRITER stood out to us because of the strong security and privacy features and impressive translation capabilities with their multilingual LLM, which is essential as we expand into international markets.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "it"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "domain-specific-llms"
    ],
    "author": "Neil Lawry",
    "authorTitle": "Head of Marketing",
    "authorTitleLines": [
      "Head of Marketing"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/08/Neil-Lawry.png"
  },
  {
    "id": "constant-contact-30",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/02/constant-contact_3743a5.svg",
    "companyName": "Constant Contact",
    "content": "Constant Contact leverages WRITER to increase productivity, employee satisfaction, and expand their knowledge base.",
    "industry": [
      "financial-services",
      "technology"
    ],
    "department": [
      "product-ux"
    ],
    "useCase": [
      "analyze",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/05/constant-contact-customer-page-spotlight.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/constant-contact-customer-story/"
  },
  {
    "id": "new-american-funding-31",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/05/new-american-funding.png",
    "companyName": "New American Funding",
    "content": "With WRITER, New American Funding saves 360 hours a week and significantly reduces their legal compliance review period.",
    "industry": [
      "financial-services",
      "technology"
    ],
    "department": [
      "legal"
    ],
    "useCase": [
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/05/Andrew-Strickman-customer-page-spotlight-2.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/naf-customer-story/"
  },
  {
    "id": "bamboohr-32",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/06/BambooHR.svg",
    "companyName": "BambooHR",
    "content": "BambooHR implements WRITER to streamline the creative process, increase productivity, and scale their teams.",
    "industry": [
      "technology"
    ],
    "department": [
      "product-ux",
      "hr"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/06/John-Meese_customer_stat_compressed.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/bamboohr-customer-story/"
  },
  {
    "id": "caidya-33",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/04/Caidya-6.png",
    "companyName": "Caidya",
    "content": "Caidya achieves 66% faster time to market and sped up workflows that previously took hours into minutes with WRITER.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "operations"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/05/Caidya-customer-page-spotlight.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/caidya-customer-story/"
  },
  {
    "id": "landmark-group-34",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/06/Landmark-Group.svg",
    "companyName": "Landmark Group",
    "content": "WRITER has helped a significant amount with our Product Content Team. After implementing WRITER, we measured productivity gains of 25-30% per person.",
    "industry": [
      "retail-consumer-goods"
    ],
    "department": [
      "marketing",
      "product-ux"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Ashima Agrawal",
    "authorTitle": "Head of Content",
    "authorTitleLines": [
      "Head of Content"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/06/Ashima-Agrawal.png"
  },
  {
    "id": "xello-35",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/02/xello-logo.svg",
    "companyName": "Xello",
    "content": "Xello uses WRITER to accelerate workflows, onboard new hires faster, and focus on more strategic work. They see a 66% faster time to market.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "hr",
      "operations"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/05/xello-customer-story-spotlight.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/xello-customer-story/"
  },
  {
    "id": "veracode-36",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/06/Veracode.svg",
    "companyName": "Veracode",
    "content": "WRITER is an essential tool for our marketing team to scale our messaging and time to market – from product, to campaigns, to events. It helps us ideate as well as accelerate more fundamentals such as content updates and website copy. It’s a critical asset for me and my team that we use everyday. And the WRITER team is always there to make sure we are getting the most out of our investment.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "product-ux",
      "it"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Carol Clark",
    "authorTitle": "VP, Product and Customer Marketing",
    "authorTitleLines": [
      "VP, Product and Customer Marketing"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/06/Carol-Clark.png"
  },
  {
    "id": "anaplan-37",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/06/Anaplan.svg",
    "companyName": "Anaplan",
    "content": "Our content experts in product and marketing were early adopters of WRITER, lauding WRITER's intuitive content moderation and generative AI capabilities. This drove initial adoption, and word-of-mouth has spurred further interest from teams across the entire business. When an engineering team asks for seats because they want to create internal docs that align with our Anaplan writing style guide and term list, we know we're onto a great thing!",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "product-ux"
    ],
    "useCase": [
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Lisa Moore",
    "authorTitle": "Senior Principal, Product Content Strategy",
    "authorTitleLines": [
      "Senior Principal, Product Content Strategy"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/07/Lisa-Moore.png"
  },
  {
    "id": "ntt-data-services-38",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/07/Mask-group.svg",
    "companyName": "NTT Data Services",
    "content": "Adopting WRITER for content creation has transformed our operations. It's streamlined our workflow and consistently ensures that every piece we produce upholds our brand’s identity across different markets. The generative AI capabilities also help us create unique, brand-aligned, customized content at scale.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "operations"
    ],
    "useCase": [
      "govern",
      "create"
    ],
    "feature": [
      "api"
    ],
    "author": "LeAnne Matula",
    "authorTitle": "Editorial Lead",
    "authorTitleLines": [
      "Editorial Lead"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/07/LeAnne-Matula.png"
  },
  {
    "id": "cantaloupe-39",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/05/Cantaloupe.svg",
    "companyName": "Cantaloupe",
    "content": "WRITER is our go-to for creating engaging content. We rely on it for everything from day-to-day content to critical tasks like product launches, sales enablement, and advertising campaigns.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "product-ux",
      "sales",
      "it"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Adrian Austin",
    "authorTitle": "Director of Product and Partner Marketing",
    "authorTitleLines": [
      "Director of Product and Partner Marketing"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/05/adrian-austin.png"
  },
  {
    "id": "deepl-40",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/05/DeepL.svg",
    "companyName": "DeepL",
    "content": "WRITER makes content creation easy. With Ask WRITER, we've been able to transform hours of work into minutes, speeding up the development process and getting content to market faster than ever.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Stephanie Liao",
    "authorTitle": "Marketing Lead",
    "authorTitleLines": [
      "Marketing Lead"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/05/stephanie-laio-circle.png"
  },
  {
    "id": "vizient-41",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/08/vizient-healthcare.png",
    "companyName": "Vizient",
    "content": "Vizient uses WRITER to accelerate the production of high-quality, personalized, and compliant healthcare assets, achieving 4x ROI within one year.",
    "industry": [
      "healthcare-life-sciences"
    ],
    "department": [
      "product-ux"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/09/thomas-newer-1-new.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/vizient-customer-story/"
  },
  {
    "id": "wellspan-health-42",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/05/Wellspan-Health.svg",
    "companyName": "WellSpan Health",
    "content": "WRITER custom AI templates helped reduce our writing time by 50% for more than 200 pages on our new website. Fusing multiple writers into an efficient, consistent sounding team was exciting to see.",
    "industry": [
      "healthcare-life-sciences",
      "technology"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "api",
      "custom-ai-apps"
    ],
    "author": "Samuel Renner",
    "authorTitle": "Senior Copywriter",
    "authorTitleLines": [
      "Senior Copywriter"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/05/Samuel-Renner.png"
  },
  {
    "id": "telus-43",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/05/Telus.svg",
    "companyName": "TELUS",
    "content": "At TELUS, our team’s goal is to deliver the cleanest UX and most consistent messaging across things like in-app messages and blog posts. With WRITER, we're delivering high-quality work, faster.",
    "industry": [
      "technology"
    ],
    "department": [
      "product-ux"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "custom-ai-apps"
    ],
    "author": "Ryan Bisram",
    "authorTitle": "Content Operations Lead",
    "authorTitleLines": [
      "Content Operations Lead"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/05/ryan-bisram.png"
  },
  {
    "id": "sentinelone-44",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/09/customers-logo-sentinelone.svg",
    "companyName": "SentinelOne",
    "content": "SentinelOne achieves a 50% reduction in technical writing time and implements automatic compliance across its documentation and training content with WRITER.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "legal"
    ],
    "useCase": [
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/09/customers-color-headshot-rochelle-fisher.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/sentinelone-customer-story/"
  },
  {
    "id": "covermymeds-45",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/10/customers-logo-covermymeds.svg",
    "companyName": "CoverMyMeds",
    "content": "We wouldn't be able to use a product like WRITER if it didn't pass our stringent security standards. Their HIPAA-compliance screening, privacy policies, and data analytics checked all of our boxes.",
    "industry": [
      "healthcare-life-sciences",
      "technology"
    ],
    "department": [
      "product-ux",
      "legal",
      "it"
    ],
    "useCase": [
      "analyze",
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Justin McIntosh",
    "authorTitle": "Content Strategy Manager",
    "authorTitleLines": [
      "Content Strategy Manager"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/10/customers-grey-circle-headshot-justin-mcintosh.png"
  },
  {
    "id": "rep-cap-46",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/10/customers-logo-rep-cap.svg",
    "companyName": "Rep Cap",
    "content": "Rep Cap delivers campaigns in days instead of weeks and reduces production time by 50% using WRITER.",
    "industry": [
      "technology",
      "professional-services"
    ],
    "department": [
      "marketing",
      "product-ux"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/10/customers-color-headshot-mary-ellen-slayter.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/rep-cap-customer-story/"
  },
  {
    "id": "carta-47",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/09/customers-logo-carta.svg",
    "companyName": "Carta",
    "content": "Carta uses WRITER to reduce a day's worth of work into minutes and increase cross-functional efficiency.",
    "industry": [
      "financial-services"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/10/tst.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/carta-customer-story/"
  },
  {
    "id": "cs-disco-48",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/09/customers-logo-disco.svg",
    "companyName": "CS Disco",
    "content": "Selected for its ability to meet stringent security and privacy requirements, WRITER helps CS Disco minimize human toil and speed up their e-discovery process.",
    "industry": [
      "technology"
    ],
    "department": [
      "it"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/09/customers-color-headshot-jim-snyder.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/disco-customer-story/"
  },
  {
    "id": "pinterest-49",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/09/customers-logo-pinterest.svg",
    "companyName": "Pinterest",
    "content": "I use WRITER to bring clarity to my sentences and write well consistently. It's above any other writing tool I've used before.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Maicco Ferreira",
    "authorTitle": "Technical Project Manager",
    "authorTitleLines": [
      "Technical Project Manager"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/10/customers-grey-circle-headshot-maicco-ferreira.png"
  },
  {
    "id": "lpl-financial-50",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/09/customers-logo-lpl-financial.svg",
    "companyName": "LPL Financial",
    "content": "Streamlining content governance with AI is the future. WRITER nails the experience for admins as well as end users.",
    "industry": [
      "financial-services"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Jeneba Wint",
    "authorTitle": "Assistant VP, Content Operations",
    "authorTitleLines": [
      "Assistant VP, Content Operations"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/09/customers-grey-circle-headshot-jeneba-massaquoi-wint.png"
  },
  {
    "id": "vistaprint-51",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/09/customers-logo-vista-print.png",
    "companyName": "Vistaprint",
    "content": "It's a huge competitive advantage to have strong writing and brand consistency across every customer touchpoint and WRITER helps us do that.",
    "industry": [
      "retail-consumer-goods"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "govern"
    ],
    "feature": [
      "api"
    ],
    "author": "Rich Jones",
    "authorTitle": "Lead Content Designer",
    "authorTitleLines": [
      "Lead Content Designer"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/09/customers-grey-circle-headshot-rich-jones.png"
  },
  {
    "id": "maximus-52",
    "type": "quote",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/11/customers-logo-maximus.svg",
    "companyName": "Maximus",
    "content": "In the next two to three years, the efficiencies that will be gained from where we are today is going to be night and day. Communicators that are not using AI today are going to be really just left behind tomorrow.",
    "industry": [
      "technology"
    ],
    "department": [
      "hr"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "author": "Jared Curtis",
    "authorTitle": "Senior Director of Corporate Communications",
    "authorTitleLines": [
      "Senior Director of Corporate Communications"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/11/customers-grey-circle-headshot-jared-curtis.png"
  },
  {
    "id": "imanage-53",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/09/customers-logo-imanage.svg",
    "companyName": "iManage",
    "content": "iManage increases support output by 400%, scales knowledge management, and exponentially decreases time to onboard with WRITER.",
    "industry": [
      "technology"
    ],
    "department": [
      "support",
      "hr"
    ],
    "useCase": [
      "analyze",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/09/customers-color-headshot-karl-gabbey.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/imanage-customer-story/"
  },
  {
    "id": "neo-54",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/09/customers-logo-neo-financial.svg",
    "companyName": "Neo",
    "content": "Neo uses WRITER to triple asset production and reduce copy development time by 50%, freeing team members to do higher impact work.",
    "industry": [
      "financial-services",
      "technology"
    ],
    "department": [
      "product-ux"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/10/customers-color-headshot-delphine-lavy.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/neo-financial-customer-story/"
  },
  {
    "id": "ellevest-55",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/09/customers-logo-ellevest.png",
    "companyName": "Ellevest",
    "content": "With WRITER, Ellevest ensures regulatory, legal, and brand compliance, reduces the review period by 70%, and improves cross-functional collaboration.",
    "industry": [
      "financial-services"
    ],
    "department": [
      "marketing",
      "legal"
    ],
    "useCase": [
      "analyze",
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2023/09/customers-color-headshot-deedi-brown.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/ellevest-customer-story/"
  },
  {
    "id": "attentive-56",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2023/02/attentive-1.svg",
    "companyName": "Attentive",
    "content": "Attentive accelerates time to market and maintains a cohesive global brand with WRITER, shortening months of work into days.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing"
    ],
    "useCase": [
      "govern",
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/09/kasey-hickey-.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/attentive-customer-story/"
  },
  {
    "id": "go1-57",
    "type": "case-study",
    "companyLogo": "https://writer.com/wp-content/uploads/2024/12/go1-logo.svg",
    "companyName": "Go1",
    "content": "Go1 halves the time it takes to complete RFPs and sees 40% time savings for marketing campaigns with WRITER.",
    "industry": [
      "technology"
    ],
    "department": [
      "marketing",
      "it"
    ],
    "useCase": [
      "create"
    ],
    "feature": [
      "ai-studio"
    ],
    "authorImage": "https://writer.com/wp-content/uploads/2024/12/madi-shove-go1-compressed.png",
    "ctaLabel": "Read more",
    "ctaHref": "https://writer.com/blog/go1-customer-story/"
  }
];

export const customersPageData = {
  hero: {
    title: "Built for enterprises\nand loved by champions",
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
