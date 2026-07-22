export type EngineeringPost = {
  title: string;
  href: string;
  readTime: string;
  author: string;
  avatar: string;
  image: string;
  excerpt?: string;
};

export type EngineeringRecent = {
  title: string;
  href: string;
  readTime: string;
};

export const engineeringData = {
  nav: [
    {
      label: "Thought leadership",
      href: "https://writer.com/engineering/category/thought-leadership/",
    },
    {
      label: "Engineering",
      href: "https://writer.com/engineering/category/engineering/",
    },
    {
      label: "Research",
      href: "https://writer.com/engineering/category/research/",
    },
    {
      label: "Product updates",
      href: "https://writer.com/engineering/category/product-updates/",
    },
    { label: "Documentation", href: "https://dev.writer.com/" },
    { label: "Start building", href: "https://app.writer.com/register" },
  ],
  logos: {
    circle: "https://writer.com/wp-content/uploads/2024/08/blog-logo-circle.svg",
  },
  featured: {
  "title": "From Months to Minutes: Rebuilding Our AI Infrastructure for Scale",
  "href": "https://writer.com/engineering/rebuilding-ai-infrastructure-scale-llm-gateway/",
  "readTime": "11 min read",
  "author": "Writer Team",
  "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg",
  "image": "https://writer.com/wp-content/uploads/2025/12/2025-12-Supervise-EPD-1-1.png",
  "excerpt": "WRITER engineers share a deep dive into rebuilding AI infrastructure for scale. Learn how they slashed model integration time from months to minutes. The piece details how a new LLM Gateway replaces hard-coded integrations with a dynamic, self-service platform. Engineers can now add models in seconds, configure guardrails instantly, and track every request with full visibility. Learn how infrastructure was reimagined to serve thousands of agents across hundreds of companies, enabling flexible model choice, real-time supervision, and instant credential rotation—all without downtime."
} satisfies EngineeringPost,
  recent: [
  {
    "readTime": "17 min read",
    "title": "Cerebro: An open source agentic system for security alert triage",
    "href": "https://writer.com/engineering/cerebro-ai-security-alert-triage-system/"
  },
  {
    "readTime": "11 min read",
    "title": "From Months to Minutes: Rebuilding Our AI Infrastructure for Scale",
    "href": "https://writer.com/engineering/rebuilding-ai-infrastructure-scale-llm-gateway/"
  },
  {
    "readTime": "9 min read",
    "title": "When too many tools become too much context",
    "href": "https://writer.com/engineering/rag-mcp/"
  },
  {
    "readTime": "9 min read",
    "title": "Rethinking Security: Moving from Human Speed to Machine Speed",
    "href": "https://writer.com/engineering/ai-security-machine-speed-defense/"
  },
  {
    "readTime": "8 min read",
    "title": "Avoid context rot and improve tool accuracy for AI agents using MCP",
    "href": "https://writer.com/engineering/mcp-gateways/"
  }
] satisfies EngineeringRecent[],
  posts: [
  {
    "href": "https://writer.com/engineering/personalized-context-degrades-ai-accuracy/",
    "image": "https://writer.com/wp-content/uploads/2026/06/2026-06-Sycophancy-1.png",
    "readTime": "5 min read",
    "title": "How personalized context quietly degrades AI accuracy: a deeper look",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://writer.com/engineering/cerebro-ai-security-alert-triage-system/",
    "image": "https://writer.com/wp-content/uploads/2026/03/2026-03-Cerebro-1.png",
    "readTime": "17 min read",
    "title": "Cerebro: An open source agentic system for security alert triage",
    "author": "Ben Popper",
    "avatar": "https://writer.com/wp-content/uploads/2026/01/ben-popper.jpeg"
  },
  {
    "href": "https://writer.com/engineering/rebuilding-ai-infrastructure-scale-llm-gateway/",
    "image": "https://writer.com/wp-content/uploads/2025/12/2025-12-Supervise-EPD-1-1.png",
    "readTime": "11 min read",
    "title": "From Months to Minutes: Rebuilding Our AI Infrastructure for Scale",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://writer.com/engineering/rag-mcp/",
    "image": "https://writer.com/wp-content/uploads/2025/11/2025-11-RAG-MCP-for-context-engineering-1.png",
    "readTime": "9 min read",
    "title": "When too many tools become too much context",
    "author": "Ashley Weaver",
    "avatar": "https://writer.com/wp-content/uploads/2025/07/ashley-weaver.jpeg"
  },
  {
    "href": "https://writer.com/engineering/ai-security-machine-speed-defense/",
    "image": "https://writer.com/wp-content/uploads/2025/11/2025-11-Response-to-Anthropic-cyberattack.png",
    "readTime": "9 min read",
    "title": "Rethinking Security: Moving from Human Speed to Machine Speed",
    "author": "WRITER Security Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://writer.com/engineering/mcp-gateways/",
    "image": "https://writer.com/wp-content/uploads/2025/10/2025-10-From-API-sprawl-to-just-two-intelligent-tools-2-1.png",
    "readTime": "8 min read",
    "title": "Avoid context rot and improve tool accuracy for AI agents using MCP",
    "author": "Dennis Thompson",
    "avatar": "https://writer.com/wp-content/uploads/2025/10/dennis-thompson.jpeg"
  },
  {
    "href": "https://writer.com/engineering/agent-development-lifecycle-prototype/",
    "image": "https://writer.com/wp-content/uploads/2025/09/2025-09-ADLC-Post_-1.png",
    "readTime": "11 min read",
    "title": "Beyond vibe coding: prototyping enterprise agents",
    "author": "Sam Julien",
    "avatar": "https://writer.com/wp-content/uploads/2024/06/image-1.png"
  },
  {
    "href": "https://writer.com/engineering/palmyra-mini-open-source-models/",
    "image": "https://writer.com/wp-content/uploads/2025/09/2025-09-Palmyra-mini-2-1.png",
    "readTime": "8 min read",
    "title": "Palmyra-mini: Small models, big throughput, powerful reasoning",
    "author": "Rakshith Vasudev",
    "avatar": "https://writer.com/wp-content/uploads/2025/09/rakshith-vasudev.jpeg"
  },
  {
    "href": "https://writer.com/engineering/bedrock/",
    "image": "https://writer.com/wp-content/uploads/2025/09/Introducing-Palmyra-X5-share-image-3-1.png",
    "readTime": "9 min read",
    "title": "WRITER's Palmyra X5 on Amazon Bedrock: Unlock long context AI for enterprise",
    "author": "Ashley Weaver",
    "avatar": "https://writer.com/wp-content/uploads/2025/07/ashley-weaver.jpeg"
  },
  {
    "href": "https://writer.com/engineering/enterprise-as-living-brain/",
    "image": "https://writer.com/wp-content/uploads/2025/08/2025-05-The-living-brain-of-the-enterprise-Matan-IV.-hero-updated.png",
    "readTime": "6 min read",
    "title": "The living brain of the enterprise",
    "author": "Matan-Paul Shetrit",
    "avatar": "https://writer.com/wp-content/uploads/2025/07/1724098561029.jpg"
  },
  {
    "href": "https://writer.com/engineering/orchestration-graph/",
    "image": "https://writer.com/wp-content/uploads/2025/07/2025-07-The-orchestration-graph-Matan-III.-2-1.png",
    "readTime": "7 min read",
    "title": "The orchestration graph",
    "author": "Matan-Paul Shetrit",
    "avatar": "https://writer.com/wp-content/uploads/2025/07/1724098561029.jpg"
  },
  {
    "href": "https://writer.com/engineering/writer-action-agent/",
    "image": "https://writer.com/wp-content/uploads/2025/07/action-agent-hero-2-1.png",
    "readTime": "6 min read",
    "title": "Say hello to Action Agent",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://writer.com/engineering/strands-writer/",
    "image": "https://writer.com/wp-content/uploads/2025/07/2025-07-Strands-integration-announcement-1.png",
    "readTime": "8 min read",
    "title": "Enterprise-grade AI meets multi-agent orchestration: WRITER integrates with Strands Agents SDK",
    "author": "Ashley Weaver",
    "avatar": "https://writer.com/wp-content/uploads/2025/07/ashley-weaver.jpeg"
  },
  {
    "href": "https://writer.com/engineering/employee-into-manager/",
    "image": "https://writer.com/wp-content/uploads/2025/07/2025-07-Everyone-is-a-manager-now-1.png",
    "readTime": "6 min read",
    "title": "Everyone is a manager now",
    "author": "Matan-Paul Shetrit",
    "avatar": "https://writer.com/wp-content/uploads/2025/07/1724098561029.jpg"
  },
  {
    "href": "https://writer.com/engineering/supervising-synthetic-workforce/",
    "image": "https://writer.com/wp-content/uploads/2025/07/2025-06-Research-paper-video-cover-and-share-img-1.png",
    "readTime": "8 min read",
    "title": "Supervising the synthetic workforce: Observability for AI agents requires managers, not metrics",
    "author": "Matan-Paul Shetrit",
    "avatar": "https://writer.com/wp-content/uploads/2025/07/1724098561029.jpg"
  },
  {
    "href": "https://writer.com/engineering/agent-development-lifecycle/",
    "image": "https://writer.com/wp-content/uploads/2025/06/new-era-2-1.png",
    "readTime": "11 min read",
    "title": "Anyone can build software now — and it's causing hell for developers",
    "author": "May Habib",
    "avatar": "https://writer.com/wp-content/uploads/2024/12/may-habib-profile.png"
  },
  {
    "href": "https://writer.com/engineering/self-reflection-llm-reinforcement-learning/",
    "image": "https://writer.com/wp-content/uploads/2025/06/2025-06-Research-paper-thumbnail-1.png",
    "readTime": "10 min read",
    "title": "Reflect, retry, reward: Self-improving LLMs via reinforcement learning",
    "author": "Shelly Bensal",
    "avatar": "https://writer.com/wp-content/uploads/2025/06/shelly.jpeg"
  },
  {
    "href": "https://writer.com/engineering/production-ai-enterprises/",
    "image": "https://writer.com/wp-content/uploads/2025/06/2025-06-CPG-shared-services-are-at-an-inflection-point_-Time-to-reimagine-and-reinvent-1.png",
    "readTime": "9 min read",
    "title": "Beyond the demo: What I've learned deploying production AI for enterprises",
    "author": "Ugo Osuji, customer AI engineer",
    "avatar": "https://writer.com/wp-content/uploads/2025/06/ugo-osuji.jpeg"
  },
  {
    "href": "https://writer.com/engineering/mcp-security-considerations/",
    "image": "https://writer.com/wp-content/uploads/2025/04/mpc-hero.png",
    "readTime": "14 min read",
    "title": "Model Context Protocol (MCP) security",
    "author": "Muayad Ali, Director of Engineering",
    "avatar": "https://writer.com/wp-content/uploads/2025/04/muayad-sayed-ali-headshot.jpeg"
  },
  {
    "href": "https://writer.com/engineering/langchain-writer/",
    "image": "https://writer.com/wp-content/uploads/2025/03/2025-03-LangChain-integration-announcement-blog-hero-1.png",
    "readTime": "7 min read",
    "title": "WRITER is now available for LangChain: Build powerful AI applications with ease",
    "author": "Sam Julien",
    "avatar": "https://writer.com/wp-content/uploads/2024/06/image-1.png"
  },
  {
    "href": "https://writer.com/engineering/sdk-2-0/",
    "image": "https://writer.com/wp-content/uploads/2025/03/2025-03-SDK-2.0-release-blog-hero-1.png",
    "readTime": "4 min read",
    "title": "Writer SDK 2.0 release: async jobs, model delegation, and more",
    "author": "Sam Julien",
    "avatar": "https://writer.com/wp-content/uploads/2024/06/image-1.png"
  },
  {
    "href": "https://writer.com/engineering/failsafeqa-benchmark/",
    "image": "https://writer.com/wp-content/uploads/2025/02/Thought-leadership-hero.png",
    "readTime": "10 min read",
    "title": "Expecting the unexpected: A new benchmark for LLM resilience in finance — FailSafeQA",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://www.linkedin.com/posts/waseemalshikh_test-time-compute-methods-like-r1-o1-o3-activity-7291269564900782080-E1Ep",
    "image": "https://writer.com/wp-content/uploads/2024/07/waseem_linkedin.png",
    "readTime": "10 min read",
    "title": "Self-evolving models, not test-time compute methods, are the future of AI",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://www.linkedin.com/posts/waseemalshikh_lots-of-hype-about-deepseek-and-its-r1-llm-activity-7288684074699816961-1UEy",
    "image": "https://writer.com/wp-content/uploads/2024/07/waseem_linkedin.png",
    "readTime": "10 min read",
    "title": "The incentives of model innovation",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://www.linkedin.com/posts/waseemalshikh_as-im-sure-everyone-has-been-shouting-from-activity-7283879651062558720-37Oa",
    "image": "https://writer.com/wp-content/uploads/2024/07/waseem_linkedin.png",
    "readTime": "10 min read",
    "title": "A breakdown of LLM agent types",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://writer.com/engineering/synthetic-data-myths-vs-facts/",
    "image": "https://writer.com/wp-content/uploads/2025/01/synthetic-data-hero-compressed.png",
    "readTime": "10 min read",
    "title": "Synthetic data: Busting the myths holding back enterprise AI progress",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://writer.com/engineering/rag-tool/",
    "image": "https://writer.com/wp-content/uploads/2024/12/rag-tool-hero-3-1.png",
    "readTime": "5 min read",
    "title": "WRITER RAG tool: build production-ready RAG apps in minutes",
    "author": "Hollis Kool",
    "avatar": "https://writer.com/wp-content/uploads/2024/12/hollis-kool.jpeg"
  },
  {
    "href": "https://writer.com/engineering/vendor-lock-in-generative-ai/",
    "image": "https://writer.com/wp-content/uploads/2024/12/2024-12-Navigating-the-challenges-of-generative-AI-and-_vendor-lock-In_-in-enterprises-1.png",
    "readTime": "5 min read",
    "title": "Navigating the challenges of generative AI and \"vendor lock-in\" in enterprises",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://writer.com/engineering/escaping-ai-poc-purgatory/",
    "image": "https://writer.com/wp-content/uploads/2024/11/2024-11-Escaping-AI-POC-purgatory_-techniques-for-enterprise-AI-engineers-compressed.png",
    "readTime": "10 min read",
    "title": "The three keys to escaping AI POC purgatory",
    "author": "Sam Julien",
    "avatar": "https://writer.com/wp-content/uploads/2024/06/image-1.png"
  },
  {
    "href": "https://writer.com/engineering/self-evolving-models/",
    "image": "https://writer.com/wp-content/uploads/2024/11/self-evolving-hero.png",
    "readTime": "6 min read",
    "title": "Introducing self-evolving models",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://writer.com/engineering/ai-native-apps/",
    "image": "https://writer.com/wp-content/uploads/2024/10/2024-10-Escaping-AI-PoC-purgatory-with-graph-based-RAG-blog-1.png",
    "readTime": "13 min read",
    "title": "Why AI-native enterprise apps are the business brain of the future",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://writer.com/engineering/actions-with-palmyra-x4/",
    "image": "https://writer.com/wp-content/uploads/2024/10/Frame-3831-1.png",
    "readTime": "8 min read",
    "title": "Introducing actions with Palmyra X4",
    "author": "Sam Julien",
    "avatar": "https://writer.com/wp-content/uploads/2024/06/image-1.png"
  },
  {
    "href": "https://writer.com/engineering/vector-database-vs-graph-database/",
    "image": "https://writer.com/wp-content/uploads/2024/10/2024-10-Vector-database-vs.-graph-database_-A-detailed-comparison-with-Knowledge-Graph-implications-Blog-1.png",
    "readTime": "21 min read",
    "title": "Vector database vs. graph database",
    "author": "Ksenia Anske",
    "avatar": "https://writer.com/wp-content/uploads/2024/09/Ksenia-Anske.jpeg"
  },
  {
    "href": "https://writer.com/engineering/rag-vector-database/",
    "image": "https://writer.com/wp-content/uploads/2024/09/2024-09-RAG-vector-database-explained_-key-benefits-limitations-for-ML-projects-compressed.png",
    "readTime": "11 min read",
    "title": "RAG vector database explained",
    "author": "Ksenia Anske",
    "avatar": "https://writer.com/wp-content/uploads/2024/09/Ksenia-Anske.jpeg"
  },
  {
    "href": "https://writer.com/engineering/app-graph-based-rag/",
    "image": "https://writer.com/wp-content/uploads/2024/09/2024-09-Embedded-app-KG-file-upload-1.png",
    "readTime": "14 min read",
    "title": "How to build an embedded app with graph-based RAG",
    "author": "Sam Julien",
    "avatar": "https://writer.com/wp-content/uploads/2024/06/image-1.png"
  },
  {
    "href": "https://writer.com/engineering/writing-in-the-margins/",
    "image": "https://writer.com/wp-content/uploads/2024/08/wim-feature-compressed.png",
    "readTime": "4 min read",
    "title": "Introducing Writing in the Margins",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://writer.com/engineering/financial-app-writer-framework-palmyra-fin/",
    "image": "https://writer.com/wp-content/uploads/2024/08/Palmyra-fin-hero-compressed.png",
    "readTime": "6 min read",
    "title": "Simplify financial app development with the WRITER Framework and Palmyra Fin",
    "author": "Sam Julien",
    "avatar": "https://writer.com/wp-content/uploads/2024/06/image-1.png"
  },
  {
    "href": "https://writer.com/engineering/palmyra-med-fin-models/",
    "image": "https://writer.com/wp-content/uploads/2024/07/palmyra-fin-med-featured-image-compressed.png",
    "readTime": "6 min read",
    "title": "Introducing Palmyra Med and Palmyra Fin",
    "author": "Sam Julien",
    "avatar": "https://writer.com/wp-content/uploads/2024/06/image-1.png"
  },
  {
    "href": "https://www.linkedin.com/posts/waseemalshikh_as-a-cto-with-over-a-decade-of-experience-activity-7211435753275277312-2ZOw",
    "image": "https://writer.com/wp-content/uploads/2024/07/waseem_linkedin.png",
    "readTime": "10 min read",
    "title": "The new paradigm: AI-native enterprise applications",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://writer.com/engineering/rag-benchmark/",
    "image": "https://writer.com/wp-content/uploads/2024/06/Knowledge-Graph-benchmarking-Blog.png",
    "readTime": "6 min read",
    "title": "RAG benchmarking: Writer Knowledge Graph ranks #1",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://writer.com/engineering/ai-studio/",
    "image": "https://writer.com/wp-content/uploads/2024/06/AI-Studio-develoeprs-compressed.png",
    "readTime": "6 min read",
    "title": "Introducing Writer AI Studio",
    "author": "Sam Julien",
    "avatar": "https://writer.com/wp-content/uploads/2024/06/image-1.png"
  },
  {
    "href": "https://www.linkedin.com/posts/melisa-russak-5b7987145_short-transformers-easily-prune-redundant-activity-7201220721677635584-lWcg",
    "image": "https://writer.com/wp-content/uploads/2024/07/melisa-russak-li-eng-blog-compressed.png",
    "readTime": "10 min read",
    "title": "Short transformers: easily prune redundant LLM layers",
    "author": "Melisa Russak",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/melisa-russak_d88fd5.png"
  },
  {
    "href": "https://www.linkedin.com/posts/waseemalshikh_in-the-rapidly-evolving-landscape-of-aillm-activity-7210758077128568833-wkfj",
    "image": "https://writer.com/wp-content/uploads/2024/07/waseem_linkedin.png",
    "readTime": "10 min read",
    "title": "The rise of domain-specific Large Language Models",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://www.linkedin.com/posts/waseemalshikh_fid-fid-knowledgegraphs-activity-7193474643377221632-sTc9",
    "image": "https://writer.com/wp-content/uploads/2024/07/waseem_linkedin.png",
    "readTime": "10 min read",
    "title": "Q&A with Knowledge Graphs",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://www.linkedin.com/posts/waseemalshikh_gpt4-palmyra-llama-activity-7192582597774880768-pfeB",
    "image": "https://writer.com/wp-content/uploads/2024/07/waseem_linkedin.png",
    "readTime": "10 min read",
    "title": "Insights from LLM Control Theory",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://writer.com/engineering/robustqa-graph-rag-benchmarking/",
    "image": "https://writer.com/wp-content/uploads/2024/07/research_feature_image.png",
    "readTime": "10 min read",
    "title": "Comparative analysis of retrieval systems in the real world",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://www.linkedin.com/posts/waseemalshikh_omniact-palmyra-ai-activity-7170402655897378818-hHqL",
    "image": "https://writer.com/wp-content/uploads/2024/07/waseem_linkedin.png",
    "readTime": "10 min read",
    "title": "OmniACT: a groundbreaking dataset and benchmark for autonomous agents",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://writer.com/engineering/omniact-dataset-benchmark-multimodal-autonomous-agents/",
    "image": "https://writer.com/wp-content/uploads/2024/07/research_feature_image.png",
    "readTime": "10 min read",
    "title": "OmniACT: A dataset and benchmark for enabling multimodal generalist autonomous agents for desktop and web",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://www.linkedin.com/posts/waseemalshikh_dpo-dss-rlhf-activity-7157908439803793408-FUdo",
    "image": "https://writer.com/wp-content/uploads/2024/07/waseem_linkedin.png",
    "readTime": "10 min read",
    "title": "Why we chose DPO over RHLF",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://www.linkedin.com/posts/waseemalshikh_llms-skills-llms-activity-7154994885786288128-XmiY",
    "image": "https://writer.com/wp-content/uploads/2024/07/waseem_linkedin.png",
    "readTime": "10 min read",
    "title": "LLMs: Skills, behaviors, and knowledge",
    "author": "Waseem AlShikh",
    "avatar": "https://writer.com/wp-content/uploads/2024/07/waseem-alshikh_667a9b.png"
  },
  {
    "href": "https://writer.com/engineering/palmyra-pubmedqa-benchmark/",
    "image": "https://writer.com/wp-content/uploads/2023/08/Social_-PubMedQA-hero-1.png",
    "readTime": "4 min read",
    "title": "Meet Palmyra Med, a powerful LLM designed for healthcare",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://writer.com/engineering/palmyra-med-instruction-based-fine-tuning-medical-domain-performance/",
    "image": "https://writer.com/wp-content/uploads/2024/07/research_feature_image.png",
    "readTime": "10 min read",
    "title": "Palmyra Med: instruction-based fine-tuning of LLMs enhancing medical domain performance",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://writer.com/engineering/becoming-self-instruct-early-stopping-criteria/",
    "image": "https://writer.com/wp-content/uploads/2024/07/research_feature_image.png",
    "readTime": "10 min read",
    "title": "Becoming self-instruct: introducing early stopping criteria for minimal instruct tuning",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://writer.com/engineering/research-grammatical-error-correction/",
    "image": "https://writer.com/wp-content/uploads/2024/07/research_feature_image.png",
    "readTime": "10 min read",
    "title": "Grammatical error correction: a survey of the state of the art",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  },
  {
    "href": "https://writer.com/engineering/fusion-in-decoder-open-domain-qa/",
    "image": "https://writer.com/wp-content/uploads/2024/07/research_feature_image.png",
    "readTime": "10 min read",
    "title": "Fusion-in-Decoder: Achieving state-of-the-art open-domain QA performance",
    "author": "Writer Team",
    "avatar": "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg"
  }
] satisfies EngineeringPost[],
  newsletter: {
    title: "The latest AI innovations.",
    titleLine2: "Delivered to your inbox.",
    placeholder: "Add your email*",
    privacy:
      "By completing and submitting this form, you agree that WRITER may email or call you with product updates, educational resources, and other promotional information. To learn more about how WRITER uses your information, see our",
    privacyHref: "/legal/privacy",
  },
} as const;
