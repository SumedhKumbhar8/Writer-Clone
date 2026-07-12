export const pricingData = {
  hero: {
    title: "Plans for every team",
    description: "Flexible pricing that scales with your organization.",
  },
  plans: [
    {
      name: "Team",
      price: "Custom",
      description: "For growing teams getting started with AI.",
      features: ["Core AI tools", "Team collaboration", "Standard support"],
      cta: { label: "Contact sales", href: "/contact" },
      highlighted: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced AI needs.",
      features: ["Full platform access", "SSO & governance", "Dedicated support"],
      cta: { label: "Contact sales", href: "/contact" },
      highlighted: true,
    },
  ],
  comparison: {
    title: "Compare plans",
    features: ["AI Agents", "Knowledge Graph", "Governance", "SSO", "Dedicated support"],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "How is pricing determined?",
        answer: "Pricing is based on team size, usage, and enterprise requirements.",
      },
    ],
  },
  cta: {
    title: "Need a custom plan?",
    description: "Our team will help you find the right fit.",
    primaryCta: { label: "Contact sales", href: "/contact" },
  },
};
