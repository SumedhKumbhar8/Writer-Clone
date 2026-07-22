export const AI_STUDIO_HERO = {
  label: "WRITER AI STUDIO",
  title: "Build agents fast. Scale with enterprise governance.",
  description:
    "Empower business teams to build safely, with AI-native governance and interoperability with your stack.",
  image: {
    src: "https://writer.com/wp-content/uploads/2025/11/Group-5735.png",
    alt: "AI Studio features",
    width: 1050,
    height: 358,
  },
  ctas: [
    {
      label: "Explore docs",
      href: "https://dev.writer.com/home/introduction",
      variant: "outline" as const,
    },
    {
      label: "Request a demo",
      href: "https://go.writer.com/demo/",
      variant: "filled" as const,
    },
  ],
} as const;

export const AI_STUDIO_TRUSTED_LOGOS = [
  { name: "Willis Towers Watson", src: "https://writer.com/wp-content/uploads/2025/11/willis-towers-watson-1.svg", width: 98 },
  { name: "Vanguard", src: "https://writer.com/wp-content/uploads/2025/11/vanguard.svg", width: 155 },
  { name: "Salesforce", src: "https://writer.com/wp-content/uploads/2025/11/Salesforce.svg", width: 126 },
  { name: "Prudential", src: "https://writer.com/wp-content/uploads/2025/11/Prudential.svg", width: 169 },
  { name: "Qualcomm", src: "https://writer.com/wp-content/uploads/2025/11/Qualcomm.svg", width: 164 },
  { name: "American Eagle", src: "https://writer.com/wp-content/uploads/2025/11/American-Eagle.svg", width: 149 },
  { name: "Ally", src: "https://writer.com/wp-content/uploads/2025/11/Ally.svg", width: 74 },
  { name: "Uber", src: "https://writer.com/wp-content/uploads/2025/11/Uber_logo_2018-1.svg", width: 79 },
  { name: "Lennar", src: "https://writer.com/wp-content/uploads/2025/11/Lennar.svg", width: 159 },
  { name: "Accenture", src: "https://writer.com/wp-content/uploads/2025/11/Accenture-Logo.svg", width: 135 },
  { name: "Hilton", src: "https://writer.com/wp-content/uploads/2025/11/Hilton_9f68ca.svg", width: 117 },
  { name: "Dropbox", src: "https://writer.com/wp-content/uploads/2025/11/Dropbox.svg", width: 162 },
  { name: "HubSpot", src: "https://writer.com/wp-content/uploads/2025/11/HubSpot_Logo-1.svg", width: 128 },
  { name: "Amerilife", src: "https://writer.com/wp-content/uploads/2025/11/Amerilife.svg", width: 164 },
  { name: "Kaufman Rossin", src: "https://writer.com/wp-content/uploads/2025/11/Kaufman-Rossin-1.svg", width: 193 },
  { name: "New American Funding", src: "https://writer.com/wp-content/uploads/2025/11/Newamerican.svg", width: 166 },
  { name: "Adore Me", src: "https://writer.com/wp-content/uploads/2025/11/Adore-me.svg", width: 157 },
  { name: "6sense", src: "https://writer.com/wp-content/uploads/2025/11/6sense.svg", width: 111 },
  { name: "Commvault", src: "https://writer.com/wp-content/uploads/2025/11/commvault.svg", width: 192 },
] as const;

export const AI_STUDIO_SCROLL_CARDS = [
  {
    id: "supervise",
    badge: "SUPERVISE",
    badgeColor: "yellow" as const,
    title: "Govern agents at scale.",
    description:
      "Observe and control every aspect of your WRITER deployment, from agents and models to connected platforms.",
    link: { label: "Learn more", href: "#supervise_section" },
  },
  {
    id: "build",
    badge: "BUILD",
    badgeColor: "green" as const,
    title: "Build agents that actually work. Together.",
    description: "Unite IT and business to build agents faster – from idea to production.",
    link: { label: "Learn more", href: "#build_section" },
  },
] as const;

export const AI_STUDIO_VANGUARD_QUOTE = {
  text: "At Vanguard, trust and responsibility are at the heart of our business. We leverage Writer's Palmyra-powered agents, integrated with AWS, to strengthen our workflows. We're excited about the ongoing control and security innovation from Writer to further enable our mission to give investors the best chance for investment success.",
  author: "Nitin Tandon",
  role: "CIO",
  company: "Vanguard",
  photo: "https://writer.com/wp-content/uploads/2025/11/photo.png",
  companyLogo: "https://writer.com/wp-content/uploads/2025/11/Group-1-2.svg",
} as const;

export const AI_STUDIO_WHY_WRITER = [
  {
    icon: "https://writer.com/wp-content/uploads/2025/11/Frame-2055246718.svg",
    title: "Deploy more agents, faster.",
    description:
      "Business teams can create agents for the majority of use cases instead of waiting for developer support. Technology teams focus on high-value technical work. Both move faster, together.",
  },
  {
    icon: "https://writer.com/wp-content/uploads/2025/11/Group-3191.svg",
    title: "Embed governance system-wide.",
    description:
      "Governance is built into the agent lifecycle, from pre-deployment approvals to monitoring in production. Compliance scales without overhead.",
  },
  {
    icon: "https://writer.com/wp-content/uploads/2025/11/cloud.svg",
    title: "Connect your AI ecosystem.",
    description:
      "WRITER is interoperable across your stack: guardrails, data, models, and more. So business and IT can connect the tools they need, and you're never tied to one vendor's roadmap.",
  },
  {
    icon: "https://writer.com/wp-content/uploads/2025/11/scale.svg",
    title: "Own the foundation for innovation.",
    description:
      "IT creates the infrastructure for others to innovate and adopt AI securely. WRITER makes it easy to build and maintain the AI foundation your business needs.",
  },
] as const;

export const AI_STUDIO_SUPERVISE_TABS = [
  {
    id: "observe",
    label: "OBSERVE",
    icon: "https://writer.com/wp-content/uploads/2025/11/Frame-2055247501-3.svg",
    iconWidth: 148,
    subtitle: "Get full visibility into user and agent behaviors",
    items: [
      {
        title: "View events",
        description:
          "Monitor usage, audit compliance, and ensure accountability with event metadata and analytics.",
        image: "https://writer.com/wp-content/uploads/2025/11/Frame-2055246507-1.png",
      },
      {
        title: "Set policies",
        description:
          "Centrally manage and enforce rate limits and automatically cache requests to control costs.",
        image: "https://writer.com/wp-content/uploads/2025/11/Frame-2055246507-4.png",
      },
      {
        title: "Detect issues",
        description:
          "Identify and analyze issues with alerts and monitoring across agents and knowledge sources.",
        image: "https://writer.com/wp-content/uploads/2025/11/Frame-2055246507-1-2.png",
      },
    ],
  },
  {
    id: "control",
    label: "CONTROL",
    icon: "https://writer.com/wp-content/uploads/2025/11/Frame-2055247501-1.svg",
    iconWidth: 157,
    subtitle: "Manage centrally, scale globally to prevent risk",
    items: [
      {
        title: "Review agents",
        description:
          "See every agent being built across your org, and approve them centrally before deployment.",
        image: "https://writer.com/wp-content/uploads/2025/11/Frame-2055246507-2-1.png",
      },
      {
        title: "Set guardrails",
        description:
          "Configure guardrails to protect sensitive data and promote safe and compliant agent actions at scale.",
        image: "https://writer.com/wp-content/uploads/2025/11/Frame-2055246507-3-1.png",
      },
      {
        title: "Manage access",
        description:
          "Ensure users and agents have access to the tools and data they need – and none that they don't.",
        image: "https://writer.com/wp-content/uploads/2025/11/Frame-2055246507-4-1.png",
      },
    ],
  },
  {
    id: "connect",
    label: "CONNECT",
    icon: "https://writer.com/wp-content/uploads/2025/11/Frame-2055247501-2.svg",
    iconWidth: 160,
    subtitle: "Integrate with the platforms your business relies on",
    items: [
      {
        title: "Integrate your tech stack",
        description:
          "Easily connect observability, security, and guardrails providers to streamline oversight.",
        image: "https://writer.com/wp-content/uploads/2025/12/Frame-2055246507-8.png",
      },
      {
        title: "Secure connectors",
        description:
          "Let agents work with critical business systems securely through our MCP gateway, validating identity, permissions, and response safety.",
        image: "https://writer.com/wp-content/uploads/2025/11/Frame-2055246507-8.png",
      },
      {
        title: "Manage models",
        description:
          "Put external models to use in WRITER agents via trusted model providers, and manage them alongside Palmyra models.",
        image: "https://writer.com/wp-content/uploads/2025/11/Frame-2055246507-6-1.png",
      },
    ],
  },
] as const;

export const AI_STUDIO_TRUST = {
  badge: "TRUST",
  title: "World-class\u2028enterprises trust WRITER",
  lockIcon: "https://writer.com/wp-content/uploads/2025/11/lock-line.svg",
  complianceBadges: [
    { alt: "ISO 27701", src: "https://writer.com/wp-content/uploads/2025/11/ai_logo_1.png" },
    { alt: "ISO 27001", src: "https://writer.com/wp-content/uploads/2025/11/Frame-3671.png" },
    { alt: "ISO 42001", src: "https://writer.com/wp-content/uploads/2025/11/Frame-3672.png" },
    { alt: "GDPR", src: "https://writer.com/wp-content/uploads/2025/11/Frame-3662.png" },
    { alt: "HIPAA", src: "https://writer.com/wp-content/uploads/2025/11/Frame-3663.png" },
    { alt: "SOC 2 Type II", src: "https://writer.com/wp-content/uploads/2025/11/Frame-3664.png" },
    { alt: "PCI", src: "https://writer.com/wp-content/uploads/2025/11/Frame-3665.png" },
    { alt: "Data Privacy Framework", src: "https://writer.com/wp-content/uploads/2025/11/Frame-3666.png" },
    { alt: "CCPA", src: "https://writer.com/wp-content/uploads/2025/11/Frame-3667.png" },
  ],
  blocks: [
    {
      title: "Supervise safe, consistent AI\u2028behavior",
      description:
        "We give you control over how AI operates across your organization, with mechanisms that allow you to validate actions, apply policies, and shape agentic capabilities across your workflows.",
    },
    {
      title: "Your data, your systems. We\u2028don\u2019t train on your data.",
      description:
        "Connect your agents to your data and systems through governed, permissioned pathways, with visibility into how they're used and full control over what users and agents can access.",
      link: { label: "Learn more", href: "https://writer.com/trust/" },
    },
  ],
} as const;

export const AI_STUDIO_BUILD_TABS = [
  {
    id: "design",
    title: "Design interfaces",
    description:
      "Drag and drop UI blocks—inputs, buttons, layouts—to make your agent intuitive to use.",
    video: "https://writer.com/wp-content/uploads/2025/06/2-Design-Interface_final-no-zoom-1_8c90c4.mp4",
  },
  {
    id: "logic",
    title: "Map the logic",
    description:
      "Visually map your agent's behavior—tool calls, web research, inputs, outputs, decision flow, and more.",
    video: "https://writer.com/wp-content/uploads/2025/06/1-Map-logic_final-no-zoom-1_bcd013.mp4",
  },
  {
    id: "prompts",
    title: "Refine prompts",
    description:
      "Fine-tune and chain prompts in a no-code interface, designed for rapid iteration.",
    video: "https://writer.com/wp-content/uploads/2025/06/3-Refine-prompts_final-no-zoom-1_b7b894.mp4",
  },
  {
    id: "code",
    title: "Extend with code",
    description:
      "Use prebuilt blocks to eliminate boilerplate—or drop in Python when custom logic is needed.",
    video: "https://writer.com/wp-content/uploads/2025/06/4-Code-no-zoom-1_2978ac.mp4",
  },
] as const;

export const AI_STUDIO_BUILD_AVATARS = [
  "https://writer.com/wp-content/uploads/2025/11/Frame-2055246709-1.png",
  "https://writer.com/wp-content/uploads/2025/11/Frame-2055246710.png",
  "https://writer.com/wp-content/uploads/2025/11/Frame-2055246711.png",
  "https://writer.com/wp-content/uploads/2025/11/Frame-2055246712.png",
] as const;

export const AI_STUDIO_BUILDER_TOOLS = [
  {
    icon: "https://writer.com/wp-content/uploads/2025/11/tool_icon1.svg",
    title: "No-code tools",
    description:
      "Intuitive tools that enable anyone to build apps that automate repetitive tasks, generate content, or answer questions on company data.",
    link: { label: "Try it out", href: "https://app.writer.com/register" },
  },
  {
    icon: "https://writer.com/wp-content/uploads/2025/11/Frame-3389.svg",
    title: "Agent Builder",
    description:
      "Low-code tool for technical and business builders to collaborate in a shared environment, with a visual editor and a library of drag-and-drop blocks.",
    link: { label: "Explore docs", href: "https://dev.writer.com/agent-builder/overview" },
  },
  {
    icon: "https://writer.com/wp-content/uploads/2025/11/Frame-3781.svg",
    title: "Writer API",
    description:
      "API endpoints for integrating Writer generative AI technology into apps or services within your own stack",
    link: { label: "Explore docs", href: "https://dev.writer.com/home/quickstart" },
  },
] as const;

export const AI_STUDIO_ANNA_QUOTE = {
  text: "WRITER is a platform that meets the highest level of security clearance, is done responsibly and done well, and eliminates a lot of the potential risks.",
  author: "Anna Griffin",
  role: "Chief Market Officer",
  photo: "https://writer.com/wp-content/uploads/2025/11/photo-1.png",
  companyLogo: "https://writer.com/wp-content/uploads/2025/11/Frame-2055247519-1.svg",
} as const;
