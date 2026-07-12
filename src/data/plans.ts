export const plansData = {
  hero: {
    title: "Plans & Pricing",
    description: "Empower your entire organization to transform work with agentic AI",
  },
  plans: [
    {
      name: "Starter",
      badge: null,
      description: "For fast-moving teams kickstarting AI exploration",
      cta: { label: "Try for free", href: "https://app.writer.com/register" },
      footnote: "14-day free trial. No credit card required.",
      features: [
        "Up to 5 users",
        "WRITER Agent — one interface for chat and automation",
        "Create and run up to 5 Playbooks",
        "1 team Personality profile",
        "Basic connectors",
        "Limited Knowledge Graph",
      ],
      highlighted: false,
    },
    {
      name: "Enterprise",
      badge: "ENTERPRISE",
      description: "Built for large organizations scaling agentic workflows with control, and compliance",
      cta: { label: "Contact sales", href: "https://go.writer.com/contact-sales" },
      footnote: null,
      features: [
        "As many users, teams, and free collaborators as needed",
        "Unrestricted number of playbooks, routines, and cross-team workflows",
        "Advanced orchestration, approvals, and admin controls",
        "Full Knowledge Graph capabilities with unrestricted connectors",
        "Departmental brand and voice profiles",
        "Full interoperability with your systems and LLMs",
        "Granular agent governance, observability, and auditability",
        "Priority enterprise support and AI program management",
      ],
      highlighted: true,
    },
  ],
  logos: {
    title: "World-class companies trust WRITER",
    companies: [
      { name: "Vanguard", src: "/logos/vanguard-logo-strip.svg", width: 115 },
      { name: "Salesforce", src: "/logos/salesforce-logo-strip.svg", width: 93 },
      { name: "Qualcomm", src: "/logos/qualcomm-logo-strip.svg", width: 122 },
      { name: "American Eagle", src: "/logos/american-eagle-logo-strip.svg", width: 111 },
      { name: "Ally", src: "/logos/placeholder.svg", width: 80 },
      { name: "Uber", src: "/logos/uber-logo-strip.svg", width: 59 },
      { name: "Lennar", src: "/logos/placeholder.svg", width: 100 },
      { name: "Accenture", src: "/logos/placeholder.svg", width: 120 },
      { name: "Hilton", src: "/logos/placeholder.svg", width: 100 },
      { name: "Dropbox", src: "/logos/dropbox-logo-strip.svg", width: 120 },
      { name: "HubSpot", src: "/logos/placeholder.svg", width: 100 },
      { name: "AmeriLife", src: "/logos/placeholder.svg", width: 100 },
      { name: "New American Funding", src: "/logos/placeholder.svg", width: 100 },
      { name: "Adore Me", src: "/logos/placeholder.svg", width: 100 },
      { name: "6sense", src: "/logos/placeholder.svg", width: 80 },
      { name: "Commvault", src: "/logos/placeholder.svg", width: 120 },
      { name: "WTW", src: "/logos/placeholder.svg", width: 80 },
    ],
  },
  comparison: {
    title: "Compare plans and features",
    categories: [
      {
        name: "Intelligent interface",
        features: [
          { name: "WRITER Agent", starter: true, enterprise: true },
          { name: "Multi-modal outputs", starter: true, enterprise: true },
          { name: "Canvas editing", starter: true, enterprise: true },
          { name: "AI Studio", starter: "Limited Access", enterprise: "Full Access" },
          { name: "Agent Builder", starter: false, enterprise: true },
        ],
      },
      {
        name: "Workflow engine",
        features: [
          { name: "Users included", starter: "Up to 5 users", enterprise: "As many as needed" },
          { name: "Build access", starter: "Required for all users", enterprise: "As many as needed" },
          { name: "Run access", starter: true, enterprise: true },
          { name: "Playbooks", starter: "5", enterprise: "Unlimited" },
          { name: "Scheduled routines", starter: "Up to 3", enterprise: "Unlimited" },
          { name: "Chained workflows", starter: false, enterprise: true },
          { name: "Sharable playbooks", starter: "Team-only", enterprise: "Cross-team" },
          { name: "Agent Library", starter: "100+ prebuilt agents", enterprise: "Full access with admin curation" },
        ],
      },
      {
        name: "Data and Context",
        features: [
          { name: "WRITER Knowledge Graph", starter: true, enterprise: true },
          { name: "Storage", starter: "50 GB in a single graph", enterprise: true },
          { name: "Basic connectors", starter: true, enterprise: true },
          { name: "Advanced connectors", starter: false, enterprise: true },
          { name: "Industry-specific connectors", starter: false, enterprise: true },
          { name: "Enterprise data sources", starter: false, enterprise: true },
          { name: "Active connectors", starter: "Up to 3", enterprise: "Unlimited" },
          { name: "Website allow / block lists", starter: true, enterprise: true },
          { name: "API access", starter: true, enterprise: "Expanded rate limits" },
        ],
      },
      {
        name: "Agent Intelligence",
        features: [
          { name: "Code execution", starter: true, enterprise: true },
          { name: "Browser automation & takeover", starter: true, enterprise: true },
          { name: "Presentation generator", starter: true, enterprise: true },
          { name: "Deployments & hosting", starter: true, enterprise: true },
          { name: "File generation", starter: true, enterprise: true },
          { name: "Image analysis", starter: true, enterprise: true },
          { name: "Image generation", starter: true, enterprise: true },
          { name: "Data analysis", starter: true, enterprise: true },
          { name: "Web search", starter: true, enterprise: true },
          { name: "Domain-specific models", starter: false, enterprise: true },
          { name: "Model flexibility", starter: "WRITER default models", enterprise: "Works with preferred LLMs" },
          { name: "Brand voice & personality", starter: "Team default", enterprise: true },
          { name: "Guardrails", starter: "Basic", enterprise: "Advance" },
          { name: "Custom skills", starter: false, enterprise: true },
        ],
      },
      {
        name: "Governance",
        features: [
          { name: "Agent observability", starter: true, enterprise: true },
          { name: "Audit logs", starter: true, enterprise: true },
          { name: "Knowledge and connector access controls", starter: true, enterprise: true },
          { name: "Integration with third party guardrails", starter: false, enterprise: true },
          { name: "Role-based access", starter: true, enterprise: true },
          { name: "Customisable roles and permissions", starter: "For 1 team", enterprise: true },
          { name: "Multi-factor-authentication", starter: true, enterprise: true },
          { name: "SAML SSO", starter: true, enterprise: true },
          { name: "SCIM provisioning", starter: true, enterprise: true },
          { name: "Team & org-level policies", starter: "For 1 team", enterprise: true },
          { name: "Admin reporting", starter: "Basic", enterprise: true },
          { name: "Brand controls", starter: true, enterprise: true },
          { name: "Service hours", starter: "Available as add-ons", enterprise: "Available as add-ons" },
        ],
      },
      {
        name: "Security and compliance",
        features: [
          { name: "Data privacy", starter: "256-bit AES and SSL/TLS encryption", enterprise: true },
          { name: "DPA for GDPR and CCPA compliance", starter: true, enterprise: true },
          { name: "Fully managed platform deployment and scaling", starter: true, enterprise: true },
          { name: "BAA for HIPAA compliance", starter: false, enterprise: true },
          { name: "SOC 2 Type II", starter: "Report available upon request", enterprise: "Report available upon request" },
          { name: "LLM technical report", starter: "Report available upon request", enterprise: "Report available upon request" },
        ],
      },
      {
        name: "Customer support and onboarding",
        features: [
          { name: "Email support", starter: "Observable bugs", enterprise: true },
          { name: "WRITER Academy", starter: true, enterprise: true },
          { name: "Technical onboarding support", starter: false, enterprise: true },
          { name: "Quarterly onsite reviews", starter: false, enterprise: true },
          { name: "Ongoing platform support & scaling", starter: false, enterprise: true },
          { name: "Visibility into product roadmap", starter: false, enterprise: true },
          { name: "AI program management", starter: false, enterprise: true },
        ],
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    tabs: [
      {
        name: "General",
        items: [
          {
            question: "What is WRITER Agent?",
            answer:
              "WRITER Agent is a single intelligent interface that turns complex, multi-step work into repeatable, automated workflows. Different from a chat-only AI assistant, WRITER Agent can orchestrate and execute work across teams and systems, while operating within org-level rules and compliance requirements.",
          },
          {
            question: "How is WRITER different from chatbots or copilots?",
            answer:
              "AI chat is great for individual productivity, and simple tasks, but WRITER helps organizations execute and run workflows. Playbooks, routines, data grounding, and governance make WRITER capable of producing consistent, compliant, on-brand work at scale — not just one-off outputs.",
          },
          {
            question: "How does WRITER's pricing work?",
            answer:
              "Starter offers monthly or annual per-seat plans with fixed credit limits. Enterprise includes regular seats, and unlimited free users, plus optional solution packs and services as you grow.",
          },
          {
            question: "How does WRITER keep outputs on-brand and compliant?",
            answer:
              "Personality profiles, style guides, and data grounding ensure every deliverable reflects your brand and rules — automatically. Teams stay consistent without extra review cycles.",
          },
          {
            question: "Can WRITER work with our systems and data?",
            answer:
              "Yes. WRITER connects to the tools where work happens so playbooks can use real, up-to-date information. This enables automation that's reliable, contextual, and measurable.",
          },
        ],
      },
      {
        name: "Security",
        items: [
          {
            question: "How secure is WRITER?",
            answer:
              "WRITER is the only end-to-end platform for scaling agentic AI in the enterprise. We adhere to global privacy laws and industry-recognized security standards with measures to help you meet your compliance obligations, including GDPR, HIPAA, SOC 2 Type II, and PCI. HIPAA and SOC 2 Type II compliance certifications and reports are available upon request for Enterprise plans.",
          },
          {
            question: "What does WRITER do with my data?",
            answer:
              "With WRITER, you retain full ownership of your data, and we take a zero data retention approach. By default, we don't train or improve our models on customer data. Some AI providers use customer data to test or optimize their models and services, often requiring customers to opt out of training on their data or upgrade to a paid plan to avoid training.",
          },
        ],
      },
      {
        name: "Billing",
        items: [
          {
            question: "What's the difference between Pro and Lite seats?",
            answer:
              "Pro seats are the standard paid WRITER seat type. They give users full access to create, customize, and automate workflows with extended usage capacity. Lite seats are only available on Enterprise plans as a way for new or invited users to try the WRITER platform. Lite seat users can view and run existing playbooks and use WRITER Agent in a limited capacity per month. Additional usage beyond the limited capacity will require an upgrade to a pro seat.",
          },
          {
            question: "How do I cancel my plan or reduce the number of seats?",
            answer:
              'To cancel a paid plan, open "Org settings" in the left panel, go to "Billing", and select "Cancel plan" for the account you\'re logged into.',
          },
          {
            question: "What's the refund policy?",
            answer:
              "If you cancel your plan before the next renewal cycle, you will retain access to paid features until the end of your current subscription period. When your subscription expires, you will lose access to paid features and all data associated with those features. We reserve the right to approve refunds on a case-by-case basis, but we are not obligated to give a refund in any circumstance.",
          },
          {
            question: "I am a nonprofit. Do you offer any discounts?",
            answer:
              "WRITER offers a 20% discount on the Starter and Enterprise plans to non-profits and educational institutions. Email hello@writer.com using your non-profit or .edu email address to get your discount code.",
          },
          {
            question: "What payment methods do you support?",
            answer:
              "WRITER supports all major credit cards and debit cards. Unfortunately, we do not support ACH, offline invoicing, or PayPal at this time.",
          },
          {
            question: "We need to change the number of people in our team. How will that work?",
            answer:
              'To update the number of users in your plan, go to the billing section of your admin console, and click "Manage Plan". Only the billing admin has the ability to add or remove users.',
          },
        ],
      },
    ],
  },
  cta: {
    title: "Make WRITER part of your team",
    description: null,
    primaryCta: { label: "Request a demo", href: "https://go.writer.com/demo" },
    secondaryCta: { label: "Try for free", href: "https://app.writer.com/register" },
  },
};
