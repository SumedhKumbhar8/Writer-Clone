export const CONNECTORS_HERO = {
  icon: "https://writer.com/wp-content/uploads/2026/05/Vector.png",
  label: "CONNECTORS",
  title: "Put WRITER to work\nacross your tools",
  description:
    "WRITER connects to your data and systems so agents can do the heavy lifting. No more tool-hopping or lost context. Just end-to-end execution.",
  ctas: [
    { label: "Get a demo", href: "https://go.writer.com/demo", variant: "filled" as const },
    { label: "See how it works", href: "https://www.youtube.com/watch?v=hmeJLLcRa6s", variant: "outline" as const },
  ],
  image: {
    src: "https://writer.com/wp-content/uploads/2026/05/Connectors.png?w=640",
    alt: "WRITER Connectors overview",
    width: 1080,
    height: 675,
  },
} as const;

export const WHY_CONNECTORS = [
  {
    image: "https://writer.com/wp-content/uploads/2026/05/Frame-2055247862.png?w=568",
    title: "One platform,\nevery building block",
    description:
      "Connectors work alongside playbooks, skills, brand, and triggers so agents execute complete workflows \u2014 not just single tasks.",
  },
  {
    image: "https://writer.com/wp-content/uploads/2026/05/Frame-2055247862-1.png?w=568",
    title: "From prompted\nto proactive",
    description:
      "Work doesn\u2019t wait to be asked \u2014 it just runs. Execute tasks automatically across systems with event-based triggers.",
  },
  {
    image: "https://writer.com/wp-content/uploads/2026/05/Frame-2055247862-2.png?w=568",
    title: "The controls IT\nneeds to say yes",
    description:
      "Granular, tool-level permissions. Define policies once, enforce everywhere. Governance that enables rather than blocks.",
  },
] as const;

export type ConnectorCategory =
  | "SEO"
  | "CMS"
  | "Work management"
  | "Data warehouse"
  | "Financial data"
  | "CRM & Sales intelligence"
  | "Collaboration";

export type ConnectorItem = {
  name: string;
  icon: string;
  description: string;
  category: ConnectorCategory;
  featured?: boolean;
  featuredImage?: string;
};

export const CONNECTOR_ITEMS: ConnectorItem[] = [
  {
    name: "Semrush",
    icon: "https://writer.com/wp-content/uploads/2026/05/Connector-1.png?w=200",
    description: "Pull keyword data, search volume, and SEO metrics to optimize content and improve search rankings.",
    category: "SEO",
    featured: true,
    featuredImage: "https://writer.com/wp-content/uploads/2026/05/Slide-16_9-167-1.png?w=640",
  },
  {
    name: "Adobe Experience Manager",
    icon: "https://writer.com/wp-content/uploads/2026/05/svgviewer-output-1.png?w=62",
    description: "Publish web pages, landing pages and product content directly from WRITER to eliminate manual data entry.",
    category: "CMS",
  },
  {
    name: "Atlassian (Jira + Confluence)",
    icon: "https://writer.com/wp-content/uploads/2026/05/SVGRepo_iconCarrier.svg?w=640",
    description: "Search documentation and manage tickets from WRITER to align marketing with product and engineering.",
    category: "Work management",
  },
  {
    name: "Asana",
    icon: "https://writer.com/wp-content/uploads/2026/05/Vector.svg?w=640",
    description: "Access and update tasks, subtasks, and project details from WRITER to automate work creation and summaries.",
    category: "Work management",
  },
  {
    name: "Databricks",
    icon: "https://writer.com/wp-content/uploads/2026/05/path1.svg?w=640",
    description: "Access customer data and metrics in natural language \u2014 no SQL required \u2014 to power personalized campaigns and segmentation.",
    category: "Data warehouse",
  },
  {
    name: "FactSet",
    icon: "https://writer.com/wp-content/uploads/2026/05/Vector-1.svg?w=640",
    description: "Access real-time market data, financials, and analytics to ensure accurate, up-to-date market commentary and reports.",
    category: "Financial data",
  },
  {
    name: "Gong",
    icon: "https://writer.com/wp-content/uploads/2026/05/Group.svg?w=640",
    description: "Pull call transcripts, summaries, and engagement data to give marketing sharper messaging and sales better account context.",
    category: "CRM & Sales intelligence",
  },
  {
    name: "Google BigQuery",
    icon: "https://writer.com/wp-content/uploads/2026/05/image-10.png?w=64",
    description: "Access customer data and metrics in natural language \u2014 no SQL required \u2014 to power personalized campaigns and segmentation.",
    category: "Data warehouse",
  },
  {
    name: "Google Workspace",
    icon: "https://writer.com/wp-content/uploads/2026/05/Google__G__logo-1.svg?w=640",
    description: "Connect WRITER and automate daily workflows across Google Workspace products: Gmail, Calendar, Docs, Sheets, Drive.",
    category: "Collaboration",
  },
  {
    name: "HubSpot",
    icon: "https://writer.com/wp-content/uploads/2026/05/Vector-2.svg?w=640",
    description: "Read customer records, deal stages, and account history into WRITER to ground campaigns in real-time CRM data.",
    category: "CRM & Sales intelligence",
  },
  {
    name: "Microsoft 365",
    icon: "https://writer.com/wp-content/uploads/2026/05/g904.svg?w=640",
    description: "Connect WRITER and automate daily workflows across the Microsoft suite: Outlook, Calendar, Teams, OneDrive, SharePoint.",
    category: "Collaboration",
  },
  {
    name: "PitchBook",
    icon: "https://writer.com/wp-content/uploads/2026/05/Group-5717.svg?w=640",
    description: "Pull private market data, valuations, and investor details to ground financial content and research in verified intelligence.",
    category: "Financial data",
  },
  {
    name: "Slack",
    icon: "https://writer.com/wp-content/uploads/2026/05/slack-new-logo-1.svg?w=640",
    description: "Tap into conversations, summarize takeaways, and trigger messages to work where teams already communicate.",
    category: "Collaboration",
  },
  {
    name: "Snowflake",
    icon: "https://writer.com/wp-content/uploads/2026/05/Snowflake_idCkdSg0B6_0-1.svg?w=640",
    description: "Access customer data and metrics in natural language \u2014 no SQL required \u2014 to power personalized campaigns and segmentation.",
    category: "Data warehouse",
  },
  {
    name: "Webflow",
    icon: "https://writer.com/wp-content/uploads/2026/06/Mark_Logo_Blue-1.svg?w=640",
    description: "Generate and push brand-approved web copy and bulk page updates from WRITER directly to Webflow pages and CMS collections.",
    category: "CMS",
  },
];

export const CUSTOM_CONNECTORS = {
  title: "Can\u2019t find what you need?",
  description:
    "Custom connectors let you bring any internal system or third-party service into WRITER \u2014 with the same governance, permissions, and security as every native connector.",
  cta: { label: "Learn how", href: "https://dev.writer.com/home/custom-connectors#custom-connectors" },
  image: {
    src: "https://writer.com/wp-content/uploads/2026/05/Slide-16_9-169.png?w=640",
    alt: "Custom connectors architecture",
    width: 1080,
    height: 608,
  },
} as const;

export const SECURITY_GOVERNANCE = {
  eyebrow: "SECURITY & GOVERNANCE",
  title: "Powerful enough for the business.\nSafe enough for IT.",
  description:
    "WRITER gives IT the controls to say yes to turning on connectors, without the security risks that keep them up at night.",
  items: [
    {
      icon: "https://writer.com/wp-content/uploads/2026/05/Vector_9c3056.svg?w=640",
      title: "Secure, scoped access to\nevery connected system",
      description:
        "OAuth authentication scoped only to the objects IT approves. WRITER\u2019s MCP gateway validates identity and blocks prompt injection on every request.",
    },
    {
      icon: "https://writer.com/wp-content/uploads/2026/05/Vector_dcde1b.svg?w=640",
      title: "Give every team the right\naccess \u2014 nothing more",
      description:
        "Set up multiple configurations of the same connector \u2014 each with its own instance, permissions, and scope. Teams get only the access they need.",
    },
    {
      icon: "https://writer.com/wp-content/uploads/2026/05/Vector_7b4dd5.svg?w=640",
      title: "Full visibility into what\nagents are doing",
      description:
        "Every connector interaction logged: which agent, which system, which action, when. Export to Splunk or Datadog. Full audit trail, no blind spots.",
    },
    {
      icon: "https://writer.com/wp-content/uploads/2026/05/circle-check.svg?w=640",
      title: "Compliance that covers\nregulated industries",
      description:
        "SOC 2 Type II, ISO 27001/27701/42001, HIPAA, GDPR, CCPA, PCI. WRITER doesn\u2019t train on customer data. No security exceptions required.",
    },
  ],
  architecture: {
    title: "Dive into the architecture",
    description:
      "Learn how our enterprise MCP gateway secures connected AI and enforces strict governance.",
    cta: { label: "Read on our engineering blog", href: "https://writer.com/engineering/mcp-gateways/" },
  },
} as const;

export const FAQ_ITEMS = [
  {
    id: "ch-1",
    title: "What is MCP?",
    content: [
      "MCP stands for Model Context Protocol \u2014 an emerging standard that defines how AI agents communicate with external tools and data sources. WRITER built its connector infrastructure on MCP, which means every connection goes through a purpose-built MCP gateway that validates identity, enforces permissions, and blocks prompt injection attacks before any request reaches your systems.",
      "For marketing and business users, the practical effect is simple: your agents can act across your full tool stack \u2014 pulling customer data, pushing outputs to the right destination, triggering downstream workflows \u2014 without any manual data transfer or copy-pasting between systems. For IT, it means there\u2019s a single, auditable layer of control for every tool action, rather than a patchwork of individual integrations to manage.",
    ],
  },
  {
    id: "ch-2",
    title: "Setting up connectors",
    content: [
      "Native connectors are typically fast to activate \u2014 some customers have approved 20+ connectors in a single architecture review board meeting. WRITER\u2019s \u201carchitecture-first approval\u201d model means IT reviews and approves the overall MCP connector architecture once, then individual connectors can be rolled out incrementally without re-opening the security review each time.",
      "For custom connectors, setup depends on the target system, but WRITER supports OAuth and API key auth out of the box and doesn\u2019t require platform-specific development. The connector framework is designed to be lightweight enough that it doesn\u2019t add significantly to your admin burden.",
    ],
  },
  {
    id: "ch-3",
    title: "Agents and playbooks",
    content: [
      "Connectors are what give WRITER agents the ability to act \u2014 not just generate text, but read data from your systems, take action, and push outputs to the right destination. When you build a playbook in WRITER, connectors give the agent access to the tools it needs at each step: pulling a customer record from Salesforce, checking brand compliance against your style guide, pushing a finished asset to your CMS, or logging a completed task in your work management tool.",
      "Because connectors are part of the same platform as playbooks, skills, brand, and triggers, agents can execute complete end-to-end workflows without leaving WRITER or requiring manual handoffs. The result is consistent, on-brand, governed output across your martech stack \u2014 not just at the content creation step.",
    ],
  },
  {
    id: "ch-4",
    title: "Custom connectors",
    content: [
      "Yes. If a system isn\u2019t in WRITER\u2019s native connector library, you can build a custom connector for it. Custom connectors support OpenAPI spec (JSON or YAML) or MCP server configurations, API key or OAuth authentication at the user or org level, and granular read/write/update/delete permissions per tool operation.",
    ],
  },
  {
    id: "ch-5",
    title: "Real-time triggers",
    content: [
      "Both. WRITER supports event-driven workflows through triggers, which means an agent can be set to run automatically when something happens in a connected system \u2014 a new record in Salesforce, a Slack message matching certain criteria, a form submission, or a scheduled time. Connectors handle the two-way communication: reading the event data from the source system and pushing the output back to the right destination. This is what allows WRITER to power end-to-end automation pipelines, not just one-off content generation.",
    ],
  },
  {
    id: "ch-6",
    title: "Field-level controls",
    content: [
      "Yes. WRITER gives IT admins the ability to restrict access at the tool-action level \u2014 not just at the connector level. You can define which teams access which connectors, require per-user approval before a connector is turned on, and toggle read vs. read/write permissions individually per tool action. Nothing is open by default.",
      "OAuth authentication is scoped only to the objects IT approves, and WRITER\u2019s MCP gateway validates identity and blocks prompt injection on every request before it reaches your systems. Every connector interaction is logged \u2014 which agent, which system, which action, when \u2014 and can be exported to Splunk or Datadog.",
    ],
  },
  {
    id: "ch-7",
    title: "Folder and team controls",
    content: [
      "Yes. WRITER\u2019s connector permissions are designed for exactly this kind of scoping. For cloud storage connectors like Google Drive or SharePoint, IT admins can restrict access to specific folders or drives rather than granting WRITER access to the entire system. At the team level, you can control which WRITER users or groups can access each connector, and require per-user approval before any individual can activate a connection. The goal is to give agents access to what they need \u2014 nothing more.",
    ],
  },
] as const;

export const FAQ_SIDEBAR = [
  { id: "ch-1", label: "What is MCP?" },
  { id: "ch-2", label: "Setting up connectors" },
  { id: "ch-3", label: "Agents and playbooks" },
  { id: "ch-4", label: "Custom connectors" },
  { id: "ch-5", label: "Real-time triggers" },
  { id: "ch-6", label: "Field-level controls" },
  { id: "ch-7", label: "Folder and team controls" },
] as const;

export const CONNECTORS_BOTTOM_CTA = {
  title: "Put WRITER to work across your tools",
  description:
    "Learn how you can power end-to-end workflows with WRITER connectors.",
  ctas: [
    { label: "Try for free", href: "https://app.writer.com/register", variant: "filled" as const },
    { label: "Request a demo", href: "https://go.writer.com/demo/", variant: "outline" as const },
  ],
} as const;
