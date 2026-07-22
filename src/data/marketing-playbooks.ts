export type PlaybookCard = {
  title: string;
  description: string;
  badge?: string;
  videoId: string;
  locked: boolean;
  /** external URL, or "unlock" to open the gate modal */
  outputHref?: string | "unlock";
};

export type PlaybookSection = {
  id: string;
  navLabel: string;
  title: string;
  intro?: string;
  cards: PlaybookCard[];
};

export const playbookHub = {
  title: "From 1X to 10X",
  hero: {
    headline: "From 1X to 10X",
    subhead:
      "Check out the Playbooks used by our marketing team to scale creative, automate workflows, and deliver 10x leverage.",
    cta: "Unlock all resources",
    videoId: "EbC2twsPHDc",
    contentTitle: ["The AI Playbooks", "10x marketers use daily"],
    paragraphs: [
      "The marketing teams winning with AI aren't using prompts. They're using Playbooks. There's a reason some teams are amplifying their output while others are still struggling. You need repeatable, scalable systems — not one-off prompts that live in someone's head.",
      "Read on and we'll show you how to master 15 different AI Marketing agents — producing content far faster without the generic AI slop, the brand disasters, or the burnout.",
    ],
    seeTitle: "You're about to see:",
    bullets: [
      "Production-ready Playbooks organized by marketing function",
      "How to embed your brand voice and data into every AI interaction",
      "Real examples of AI amplifying human creativity",
    ],
    closing:
      "Everyone is racing to deploy and utilize AI tools, because the teams that figure these key principles out first are going to dominate the next 12 months.",
  },
  nav: [
    { id: "intro", label: "Intro" },
    { id: "content", label: "Content" },
    { id: "demand-gen", label: "Demand gen" },
    { id: "seo-geo", label: "SEO - GEO" },
    { id: "field", label: "Field" },
    { id: "brand", label: "Brand" },
  ],
  workflow: {
    title: "How content supply chain runs with WRITER",
    description:
      "Our content agents go from idea, to execution, to versioning, to distribution. Leverage multi-step automation, integrated workflows, scaled personalization, and built-in compliance to scale your speed without sacrificing quality.",
    image: "/images/playbooks/workflow.png",
  },
  differences: {
    title: "Difference between\nprompts and playbooks",
    paragraphs: [
      "Playbooks are like prompts, but better. They are instructions for AI agents that can leverage a toolkit on the WRITER platform to enrich their responses with your company's voice and data, run on a schedule or be triggered by an event.",
      "Best of all? They can easily be shared with individuals teams and departments, meaning an upgrade to a Playbook benefits everyone. See what agents can do with the right structure and tooling.",
    ],
    headers: ["Dimension", "Prompt", "Playbook"],
    rows: [
      ["What it is", "Text you type into a chatbot", "Reusable instructions for AI agents"],
      ["Input", "Manual, free-form text every time", "Structured form fills with variables"],
      ["Who benefits", "Only the person who wrote it", "Entire team, instantly"],
      [
        "Integration",
        "Disconnected from your tools & data",
        "Native connectors, knowledge graphs, brand voice",
      ],
      ["Improvement", "Stays in your head or a doc", "Updates improve it for everyone"],
      ["Consistency", "Results vary by how you phrase it", "Reliable, repeatable outputs"],
      [
        "Workflow",
        "Single question → single answer",
        "Multi-step orchestration (research → analyze → deliver)",
      ],
      [
        "Skill required",
        "Prompt engineering expertise",
        "WRITER Agent collaborates on crafting Playbook instructions",
      ],
      [
        "Flexibility",
        "Finely tuned to a specific use case",
        "Variables adaptive to different use cases",
      ],
      [
        "Output",
        "Raw text response",
        "Structured deliverables (reports, dashboards, campaigns)",
      ],
      ["Scale", "Scales with individual skill", "Scales with team size"],
    ],
  },
  sections: [
    {
      id: "content",
      navLabel: "Content",
      title: "Content",
      intro:
        "At WRITER, we use Playbooks every day to help us move faster, generating the first draft of assets for an entire campaign in minutes instead of days or weeks. Crucially, WRITER ensures the content matches your voice and style, avoids generic AI-ism, and steers clear of the endless work slop flooding the market. Let's dive into a few key examples below.",
      cards: [
        {
          title: "From generic AI output to nailing your brand tone",
          description:
            "In this video, we'll show you an agent that turns a single rich piece of content into dozens of assets for a multi-channel campaign. Along the way we'll explore the five key rules we use at WRITER to avoid work slop.",
          badge: "TEAM FAVORITE",
          videoId: "EbC2twsPHDc",
          locked: false,
          outputHref:
            "https://go.writer.com/hubfs/playbook-hub-html-dashboards/content-playbook-3-voice-and-kg-tuned.html",
        },
        {
          title: "5 rules for avoiding work slop",
          description:
            "In this demo we'll show you how to turn a single rich asset, like a PDF, into dozens of assets for a multi-channel campaign. More importantly, we'll cover five key rules we follow at WRITER to ensure quality and brand consistency while avoiding work slop.",
          badge: "QUALITY OVER QUANTITY",
          videoId: "v2dHPwqwFAg",
          locked: true,
          outputHref: "unlock",
        },
        {
          title: "Instant Product Launch Analysis",
          description:
            "A major event just ended and and your boss wants a brief on their desk tomorrow analyzing everything your competitors launched - from web pages to YouTube videos, to podcast appearances - and how you plan to respond. Luckily, this agent can automate the research and strategy.",
          badge: "COMPETITIVE INTEL",
          videoId: "-RQajGOCutY",
          locked: true,
          outputHref: "unlock",
        },
      ],
    },
    {
      id: "demand-gen",
      navLabel: "Demand gen",
      title: "Demand gen",
      intro:
        "Our Demand Generation and Campaign team uses Playbooks to automate the analysis of campaign and gated asset performance. See how our team plans for campaigns by analyzing Snowflake data to segment customers and plan an email strategy that will maximize revenue.",
      cards: [
        {
          title: "From messy data to revenue opportunity",
          description:
            "This agent can integrate with your Snowflake database, pull customer data from across 1500 clients, run SQL queries to determine metrics like engagement score, then merge this with a different data set, for example a customer's credit score. It analyzes a wide variety of factors before producing a projection for the revenue opportunity and the top three priorities to address in order to have a successful campaign.",
          badge: "TEAM FAVORITE",
          videoId: "_mCPHtHbHvE",
          locked: false,
          outputHref:
            "https://go.writer.com/hubfs/playbook-hub-html-dashboards/campaigns-playbook-2-snowflake-rev-max.html",
        },
        {
          title: "Lead to conversion ROI agent",
          description:
            "Performance marketers managing campaigns across social, display, search, and CTV spend hours each week analyzing metrics, comparing against benchmarks, and compiling reports for leadership.",
          badge: "PIPELINE PRODUCTION",
          videoId: "fMBunBWmNGA",
          locked: true,
        },
        {
          title: "Campaign performance analysis agent",
          description:
            "Performance marketers managing campaigns across social, display, search, and CTV spend hours each week analyzing metrics, comparing against benchmarks, and compiling reports for leadership. This AI agent does it for you.",
          videoId: "o1gJujPKVmo",
          locked: true,
        },
      ],
    },
    {
      id: "seo-geo",
      navLabel: "SEO - GEO",
      title: "SEO - GEO",
      intro:
        "As buying decisions increasingly happen inside of AI-powered conversations, companies need to go beyond SEO, building on that foundation and layering on AI. At WRITER, we've built a number of Playbooks that have helped our clients and our own company significantly improve their standing across the most popular AI chatbot services.",
      cards: [
        {
          title: "From SEO to GEO",
          description:
            "Performance marketers managing campaigns across social, display, search, and CTV spend hours each week analyzing metrics, comparing against benchmarks, and compiling reports for leadership.",
          badge: "TEAM FAVORITE",
          videoId: "rN473SYk8iU",
          locked: false,
          outputHref:
            "https://go.writer.com/hubfs/playbook-hub-html-dashboards/geo-playbook-1-geo-optimizer.html",
        },
        {
          title: "From SEO to FAQ+Schema",
          description:
            "Consumers are turning from traditional search to conversational commerce with AI chatbots. To ensure your brand gets mentioned, you need to reimagine your website, moving from keywords to FAQ content and GEO optimized JSON schema. This agent show you how.",
          videoId: "VJ7f3zCq9L4",
          locked: true,
          outputHref: "unlock",
        },
        {
          title: "Turning keywords to natural language queries",
          description:
            "Many companies have mountains of existing keyword data and infrastructure. The problem is users making purchasing decisions are rapidly shifting from traditional search engines to conversations with chat bots. This playbook takes the strength of your existing web presence, looks at the competitive landscape, and lays out a strategy for adapting to more natural language queries, driving up your brand's presence in AI chatbot responses.",
          videoId: "CxsZIUWmyg4",
          locked: true,
          outputHref: "unlock",
        },
      ],
    },
    {
      id: "field",
      navLabel: "Field",
      title: "Field",
      intro:
        "Field marketing is all about being present. As AI begins to take over various knowledge work functions, the ability to network and connect with people in real life is growing more valuable. Below, we'll share some of our field marketing team’s favorite Playbooks. They focus on giving the drudge work to AI, saving the field marketer time and stress so they can focus on what's in front of them.",
      cards: [
        {
          title: "Instant Look Book generator",
          description:
            "While everyone is paying attention to the talk tracks and show floor, the real action at many conferences is in the 1:1 meetings between executives.\n\nFor a field marketer, you need to ensure your executives are fully prepped. This AI agent quickly and accurately generates a look book that your exec can easily scan on the move, giving them all of the context they need.",
          badge: "EXEC FAVORITE",
          videoId: "rUhWpJUtNAI",
          locked: false,
          outputHref:
            "https://go.writer.com/hubfs/playbook-hub-html-dashboards/field-playbook-3-executive-lookbook.html",
        },
        {
          title: "Swag tracker",
          description:
            "Stop checking apps and entering tracking codes. This agent tracks swag and notifies you by Slack when something is worth your attention, letting you get back to working the event IRL.",
          badge: "TEAM FAVORITE",
          videoId: "xLUP7DJ30Z8",
          locked: true,
        },
        {
          title: "Calendar wizard",
          description:
            "When it's a busy event season and you're constantly in the air, you need one calendar for yourself, and another that helps your team track when you're in the air, juggling shifting time zones and rerouted flights. This agent makes it simple.",
          videoId: "1Cb_WNSC2Yc",
          locked: true,
        },
      ],
    },
    {
      id: "brand",
      navLabel: "Brand",
      title: "Brand",
      cards: [
        {
          title: "Automate regulatory compliance",
          description:
            "Marketers working in highly regulated industries can have a tough time moving quickly. This agent automates a check for FINRA compliance, then automatically annotates and updates copy so you can understand the suggestions and easily accept edits.",
          badge: "TEAM FAVORITE",
          videoId: "p25IYVoFBgI",
          locked: false,
          outputHref: "https://ben10x.netlify.app/finra-document-compliance-dashboard.html",
        },
        {
          title: "Brand compliance QA agent",
          description:
            "Ensuring digital content meets brand and legal compliance requirements is critical — but manual QA is slow and inconsistent. In this demo, we show how teams create sophisticated quality assurance agents on the WRITER platform to ensure content meets brand and legal standards.",
          videoId: "kUdF8rsC_Vs",
          locked: true,
        },
      ],
    },
  ] satisfies PlaybookSection[],
  footer: {
    copyright: "© 2026 WRITER",
    links: [
      { label: "MANAGE SETTINGS", href: "#" },
      { label: "TERMS", href: "/legal/terms/" },
      { label: "PRIVACY", href: "/legal/privacy/" },
    ],
  },
};
