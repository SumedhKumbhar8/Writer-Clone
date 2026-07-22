export type Guide = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt?: string;
};

export const guidesData = {
  title: "Guides",
  sectionLabel: "Most Recent",
  guides: [
    {
      title: "How to create an AI-native marketing engine",
      description:
        "Stop measuring AI in hours saved. Start measuring in pipeline gained.",
      href: "https://go.writer.com/ai-native-marketing-engine",
      image:
        "https://writer.com/wp-content/uploads/2026/05/Share-image-for-webpage_-1920x1080-AI-native-marketing-engine-1.png",
      alt: "AI native marketing engine",
    },
    {
      title: "AI & Brand integrity: How to maintain and scale your brand DNA",
      description:
        "Scale your content. Protect your brand DNA. Learn how to encode your standards into AI before a single word is generated.",
      href: "https://go.writer.com/ai-brand-integrity",
      image:
        "https://writer.com/wp-content/uploads/2026/05/Share-image-for-webpage_-1920x1080-AI-and-brand-integrity-1.png",
    },
    {
      title: "AI adoption in the enterprise",
      description:
        "How to overcome adoption hurdles, reduce risk, and turn AI ambition into enterprise impact.",
      href: "https://go.writer.com/ai-adoption-enterprise-2026",
      image: "https://writer.com/wp-content/uploads/2026/04/2026-04-WPI-2026-1.png",
      alt: "AI adoption in the enterprise",
    },
    {
      title: "From 1X to 10X",
      description:
        "Move beyond marketing prompts to scalable AI playbooks. Production-ready workflows for content, campaigns, SEO/GEO, brand, and demand generation teams.",
      href: "/marketing-playbooks/",
      image:
        "https://writer.com/wp-content/uploads/2026/03/Share-image-for-webpage_-1920x1080-Playbooks-1.png",
      alt: "Playbooks 10x",
    },
    {
      title:
        "From pilots to performance: The AI native marketing guide for marketing leaders",
      description:
        "Get the strategic framework that leading CMOs at KPMG, and American Eagle used to achieve measurable ROI in 8-12 weeks used.",
      href: "https://go.writer.com/scaling-ai-enterprise-marketing-cmo",
      image:
        "https://writer.com/wp-content/uploads/2026/02/Share-image-for-webpage_-1920x1080-AI-native-marketing-guide-1.png",
    },
    {
      title: "The marketing prioritization toolkit for agentic AI",
      description:
        "Most marketing teams waste months debating which AI use cases to build. This toolkit shows you exactly where to start in one focused session.",
      href: "https://go.writer.com/ai-marketing-toolkit",
      image:
        "https://writer.com/wp-content/uploads/2026/01/Share-image-for-webpage_-1920x1080-The-marketing-AI-agent-prioritization-toolkit-1.png",
    },
    {
      title: "Evaluating agentic AI solutions for the enterprise",
      description:
        "Evaluate agentic AI with confidence. Get the strategic framework to navigate costs, governance, and security for enterprise-wide scale.",
      href: "https://go.writer.com/evaluating-agentic-ai",
      image:
        "https://writer.com/wp-content/uploads/2026/01/Share-image-for-webpage_-1920x1080-Evaluators-guide-1.png",
    },
    {
      title: "The agentic AI governance playbook",
      description:
        "An enterprise framework for AI supervision, observability, and trust.",
      href: "https://writer.com/guides/agentic-ai-governance/",
      image:
        "https://writer.com/wp-content/uploads/2025/11/Share-image-for-webpage_-1920x1080-The-agentic-AI-governance-playbook-2-1.png",
    },
    {
      title: "The Agentic Compact: A framework for enterprise agentic AI",
      description:
        "Agentic AI creates a new governance crisis. This whitepaper is your blueprint for deploying safe, responsible, and high-ROI autonomous digital workers.",
      href: "https://go.writer.com/the-agentic-compact",
      image:
        "https://writer.com/wp-content/uploads/2025/10/Share-image-for-webpage_-1920x1080-The-big-book-of-enterprise-AI-use-cases-2-1.png",
    },
    {
      title: "Agentic enterprise AI use cases",
      description:
        "Explore agentic enterprise AI use cases that automate entire workflows in finance, HR, legal, marketing, sales, and support.",
      href: "https://writer.com/guides/ai-use-cases/",
      image:
        "https://writer.com/wp-content/uploads/2025/10/Share-image-for-webpage_-1920x1080-The-big-book-of-enterprise-AI-use-cases-1.png",
      alt: "The big book of agentic enterprise AI use cases",
    },
    {
      title: "The business leader’s guide to agentic AI",
      description:
        "Move beyond generative AI. Our guide for business leaders covers the strategic adoption of agentic AI to redefine productivity, innovation, and advantage.",
      href: "https://writer.com/guides/adopting-ai/",
      image:
        "https://writer.com/wp-content/uploads/2025/09/Share-image-for-webpage_-1920x1080-Business-leaders-guide.png",
      alt: "The business leader’s guide to agentic AI",
    },
    {
      title: "The Forrester Total Economic Impact™ of WRITER",
      description:
        "Discover how WRITER’s AI platform delivers 333% ROI and $12.02M NPV in 3 years, as validated by Forrester’s Total Economic Impact™ Study.",
      href: "https://go.writer.com/forrester-tei-study",
      image: "https://writer.com/wp-content/uploads/2025/05/tei-guide-page-1.png",
      alt: "Total Economic Impact of Writer",
    },
    {
      title: "The 2025 WRITER AI survey: Generative AI adoption in the enterprise",
      description:
        "Get key insights from 1,600 knowledge workers and C-suite execs. The 2025 WRITER AI Survey explores the challenges and opportunities of enterprise AI adoption.",
      href: "https://go.writer.com/enterprise-ai-adoption-survey",
      image: "https://writer.com/wp-content/uploads/2025/05/wpi-guide-page-1.png",
      alt: "The 2025 Writer AI survey: Generative AI adoption in the enterprise",
    },
    {
      title: "AI agents for healthcare payors",
      description:
        "Discover how agentic AI can revolutionize healthcare payor operations. Enhance member engagement, streamline processes, and improve customer support.",
      href: "https://writer.com/guides/agentic-ai-healthcare-payor-use-cases/",
      image:
        "https://writer.com/wp-content/uploads/2025/05/Share-image-Healthcare-payer-use-cases-2025-1.png",
      alt: "Big book of AI agents for healthcare payors",
    },
    {
      title: "Generative AI use cases for financial services",
      description:
        "Explore how generative AI transforms financial services by enhancing efficiency and personalization in research, market analysis, client relations, and more, offering key insights.",
      href: "https://writer.com/guides/generative-ai-financial-services-use-cases/",
      image:
        "https://writer.com/wp-content/uploads/2025/03/financial-services-use-case-share-1.png",
      alt: "Generative AI use cases for financial services",
    },
    {
      title: "Graph-based RAG for enterprise with WRITER Knowledge Graph",
      description:
        "Explore the practical applications of graph-based RAG and the ease of integration into existing systems using WRITER Knowledge Graph.",
      href: "https://writer.com/guides/graph-based-rag-starter-guide/",
      image:
        "https://writer.com/wp-content/uploads/2025/01/Share-image-Graph-based-RAG-for-enterprise-with-Writer-Knowledge-Graph-compressed.png",
      alt: "Graph-based RAG for enterprise with Writer Knowledge Graph",
    },
    {
      title: "Generative AI use cases for retail and consumer goods",
      description:
        "Learn how generative AI is revolutionizing retail and consumer goods industries with practical use cases and real-life examples of its successful implementation.",
      href: "https://writer.com/guides/generative-ai-retail-use-cases/",
      image:
        "https://writer.com/wp-content/uploads/2025/01/big-book-retail-cpg-share-compressed.png",
      alt: "Generative AI use cases for retail and consumer goods",
    },
    {
      title: "WRITER’s best of 2024: Generative AI resources",
      description:
        "Discover WRITER’s top generative AI content from 2024. Whether you’re just starting or refining your approach, these pieces will provide the confidence and clarity you need for your AI strategy.",
      href: "https://go.writer.com/best-of-2024",
      image: "https://writer.com/wp-content/uploads/2025/01/Share-image-Best-of-2024.png",
      alt: "Writer's best of 2024",
    },
    {
      title: "Starter guide: Generative AI for retail personalization with WRITER",
      description:
        "Discover how generative AI can transform your retail personalization strategy. Learn to create bespoke experiences with our comprehensive guide from WRITER.",
      href: "https://writer.com/guides/generative-ai-retail-personalization/",
      image:
        "https://writer.com/wp-content/uploads/2024/10/Share-image-Starter-Guide_-Retail-personalization-1.png",
      alt: "Starter Guide Retail personalization",
    },
    {
      title: "The state of generative AI in the enterprise 2024",
      description:
        "Discover how generative AI is changing businesses in 2024, focusing on growth, benefits, and security issues.",
      href: "https://writer.com/guides/generative-ai-survey/",
      image:
        "https://writer.com/wp-content/uploads/2024/09/Share-image-The-state-of-generative-AI-in-the-enterprise-2024.png",
      alt: "The state of generative AI in the enterprise, 2024",
    },
    {
      title: "Evaluating generative AI solutions for enterprise",
      description:
        "Discover how to evaluate and integrate generative AI into your enterprise with our CIO guide. Learn about AI solutions, vendor selection, and strategic implementation.",
      href: "https://writer.com/guides/evaluating-generative-ai/",
      image:
        "https://writer.com/wp-content/uploads/2024/07/share_evaluators_guide_compressed.png",
      alt: "Evaluating generative AI solutions for enterprise",
    },
    {
      title: "Black Friday reimagined",
      description:
        "Explore how generative AI transforms Black Friday in retail and eCommerce. Optimize campaigns, enhance service, and streamline operations.",
      href: "https://writer.com/guides/black-friday-generative-ai/",
      image:
        "https://writer.com/wp-content/uploads/2024/06/Share-image-Balck-Friday-Guide-small.png",
      alt: "Black Friday reimagined",
    },
    {
      title: "Generative AI explained",
      description:
        "Discover the ultimate guide to enterprise generative AI. Stay ahead, unlock opportunities, and succeed in the AI era.",
      href: "https://writer.com/guides/generative-ai/",
      image:
        "https://writer.com/wp-content/uploads/2024/04/Share-image-Generative-AI-explained-compressed.png",
      alt: "Generative AI explained",
    },
    {
      title: "Full-stack generative AI",
      description:
        "Learn about the landscape of generative AI technology on the market today, evaluating vendors, and how to establish a clear path to ROI.",
      href: "https://writer.com/guides/full-stack-generative-ai/",
      image:
        "https://writer.com/wp-content/uploads/2023/12/full-stack-generative-ai-guides-hub.png",
      alt: "Full-stack generative AI for the enterprise",
    },
    {
      title: "Generative AI insurance use cases",
      description:
        "Learn how to use AI for insurance. Get the ball rolling on your AI-related initiatives and figure out the right requirements for a successful AI platform.",
      href: "https://writer.com/guides/generative-ai-insurance-use-cases/",
      image:
        "https://writer.com/wp-content/uploads/2023/10/guides-generative-ai-insurance.png",
      alt: "Generative AI insurance use cases",
    },
    {
      title: "Future-ready your people for an AI workplace",
      description:
        "How to nurture a “people-first” culture and future-ready your workforce in an AI-infused world, ensuring competitiveness and compassion coexist.",
      href: "https://writer.com/guides/ai-workplace/",
      image: "https://writer.com/wp-content/uploads/2023/10/guides-ai-workplace-2.png",
      alt: "Future-ready your people for an AI workplace",
    },
    {
      title: "The state of generative AI in the enterprise 2023",
      description:
        "Discover the results of our survey on generative AI in the enterprise, with a sample of 466 directors and above in organizations with >1,000 employees.",
      href: "https://writer.com/guides/generative-ai-survey-2023/",
      image: "https://writer.com/wp-content/uploads/2023/05/generative-ai-survey-v2.png",
    },
    {
      title: "Generative AI explained: A field guide for CMOs",
      description:
        "We break down the big questions about generative AI into simple, plain language so you can sound like the expert in the boardroom.",
      href: "https://writer.com/guides/generative-ai-marketing/",
      image: "https://writer.com/wp-content/uploads/2023/04/generative-ai-share.png",
      alt: "Generative AI explained",
    },
    {
      title: "Prompt crafting",
      description:
        "The knowledge and skills you need to become your company’s expert on using generative AI for marketing content creation.",
      href: "https://writer.com/guides/prompt-crafting/",
      image: "https://writer.com/wp-content/uploads/2023/03/prompt-crafting-share.png",
      alt: "Prompt crafting",
    },
    {
      title: "Brand messaging framework",
      description:
        "Take your brand’s identity to new heights when you implement a brand messaging framework. Make sure your audience knows your value, and your values.",
      href: "https://writer.com/guides/brand-messaging-framework/",
      image:
        "https://writer.com/wp-content/uploads/2022/07/brand-messaging-framework-guide.png",
      alt: "Brand messaging framework",
    },
  ] satisfies Guide[],
};
