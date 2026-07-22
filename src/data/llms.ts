export const LLMS_HERO = {
  icon: "https://writer.com/wp-content/uploads/2024/11/icons.svg",
  label: "PALMYRA LLMs",
  title: "LLMs built for your mission-critical workflows",
  description:
    "Meet Palmyra, our family of LLMs engineered for precise, dependable performance.",
  primaryCta: { label: "Request a demo", href: "https://go.writer.com/demo" },
  secondaryCta: { label: "Try for free", href: "https://app.writer.com/register" },
} as const;

export const THREE_PILLARS = [
  {
    icon: "https://writer.com/wp-content/uploads/2024/11/llms-target.svg",
    title: "Enterprise-grade accuracy",
    description:
      "Top-ranked by Stanford HELM for a range of scenarios, PubMedQA for biomedical question answering, BLEU for translations, and much more.",
  },
  {
    icon: "https://writer.com/wp-content/uploads/2024/11/claim-detection-shield.svg",
    title: "Not trained on your data",
    description:
      "We don\u2019t use the data you share with us to create, modify, or train our models, and we take a zero data retention approach, storing data for only as long as is needed to use our platform.",
  },
  {
    icon: "https://writer.com/wp-content/uploads/2024/11/Palmyra.svg",
    title: "Broad expertise, tailored solutions",
    description:
      "Excels at question-answering, analyzes images, multilingual in 30 languages, and fine-tuned for industries like healthcare and finance.",
  },
] as const;

export const BENCHMARKS = {
  label: "Benchmarks",
  subtitle: "See how our models stack up!",
  items: [
    {
      label: "Top 10 on HELM with 85% average score",
      icon: "https://writer.com/wp-content/uploads/2024/11/benchmark-pill-1.svg",
    },
    {
      label: "First model to pass CFA exam level 3",
      icon: "https://writer.com/wp-content/uploads/2024/11/benchmark-pill-2.svg",
    },
    {
      label: "Number 1 medical model. 85.9% average score",
      icon: "https://writer.com/wp-content/uploads/2024/11/benchmark-pill-3.svg",
    },
    {
      label: "Number 1 finance model. 9.04 long-fin-eval score",
      icon: "https://writer.com/wp-content/uploads/2024/11/benchmark-pill-4.svg",
    },
    {
      label: "Top 10 in tool calling. 59.1% Berkeley benchmark",
      icon: "https://writer.com/wp-content/uploads/2024/11/benchmark-pill-5.svg",
    },
  ],
} as const;

export const MODELS_SECTION = {
  icon: "https://writer.com/wp-content/uploads/2024/11/Palmyra-LLMS.svg",
  label: "Models",
  title: "An LLM for your use case",
  description:
    "A family of specialized LLMs, built for any industry and adaptable to any workflow.",
  disclaimer: "All prices are per 1 million tokens unless otherwise stated.",
  models: [
    {
      icon: "https://writer.com/wp-content/uploads/2025/04/Palmyra-models-2.png",
      name: "Palmyra X5",
      tagline: "Our most advanced model for long-context workflows and agentic AI.",
      details: ["Text, image input; text, structured output", "1M context length"],
      price: ["Input: $0.60", "Output: $6.00"],
      href: "/llms/palmyra-x5/",
    },
    {
      icon: "https://writer.com/wp-content/uploads/2024/11/palmyra-x.svg",
      name: "Palmyra X4",
      tagline: "Our general purpose model with adaptive reasoning and with tool-calling.",
      details: ["Text input & output", "128k context length"],
      price: ["Input: $5.00", "Output: $12.00"],
      href: "/llms/palmyra-x4/",
    },
    {
      icon: "https://writer.com/wp-content/uploads/2024/12/Palmyra-models.png",
      name: "Palmyra Creative",
      tagline: "Our purpose-built model designed to unlock creativity and inspire innovation.",
      details: ["Text input & output", "128k context length"],
      price: ["Input: $5.00", "Output: $12.00"],
      href: "/llms/palmyra-creative/",
    },
    {
      icon: "https://writer.com/wp-content/uploads/2024/11/palmyra-fin.svg",
      name: "Palmyra Fin",
      tagline: "Our domain-specific finance model and the first model to pass the CFA III exam.",
      details: ["Text input & output", "128k context length"],
      price: ["Input: $5.00", "Output: $12.00"],
      href: "/llms/palmyra-fin/",
    },
    {
      icon: "https://writer.com/wp-content/uploads/2024/11/palmyra-med.svg",
      name: "Palmyra Med",
      tagline: "Our top-ranking healthcare model for comprehensive medical analysis.",
      details: ["Text input & output", "32k context length"],
      price: ["Input: $5.00", "Output: $12.00"],
      href: "/llms/palmyra-med/",
    },
  ],
} as const;

export const CAPABILITIES = {
  icon: "https://writer.com/wp-content/uploads/2024/11/skills.svg",
  label: "Capabilities",
  title: "Skills that power intelligent automation",
  description:
    "Our family of models have diverse capabilities tailored for complex, industry-specific workflows",
  items: [
    { title: "Reasoning", description: "Complex decision-making and sequence planning" },
    { title: "Vision", description: "Analyzes images and videos" },
    { title: "Built-in RAG", description: "Retrieves real-time, relevant data" },
    { title: "Handwriting extraction", description: "Reads and digitizes handwritten notes" },
    { title: "Multilingual", description: "Operates in 30+ languages" },
    { title: "Medical coding", description: "RxNorm, ICD-10-CM, SNOMED CT" },
    { title: "Tool calling", description: "Calls APIs, agents, and functions" },
    { title: "Healthcare expertise", description: "Assists with medical analysis" },
    { title: "Coding", description: "Generates code in a variety of languages" },
    { title: "Finance expertise", description: "Market analysis and risk insights" },
  ],
} as const;

export const LLMS_CTA = {
  title: "Get started with Palmyra LLMs",
  primaryCta: { label: "Request a demo", href: "https://go.writer.com/demo" },
  secondaryCta: { label: "Try for free", href: "https://app.writer.com/register" },
  background: "#f6effd",
} as const;
