export type BlogPost = {
  title: string;
  href: string;
  category: string;
  categoryHref: string;
  readTime: string;
  author: string;
  avatar: string;
  image: string;
  imageAlt?: string;
  excerpt?: string;
};

export type BlogCategory = {
  name: string;
  href: string;
  posts: BlogPost[];
};

const AVATARS = {
  diego: "https://writer.com/wp-content/uploads/2025/07/diego-author.png",
  team: "https://writer.com/wp-content/uploads/2023/07/wr-sm.svg",
  matan: "https://writer.com/wp-content/uploads/2025/07/1724098561029.jpg",
  ben: "https://writer.com/wp-content/uploads/2026/01/ben-popper.jpeg",
  alaura:
    "https://secure.gravatar.com/avatar/3569390f6d466e9db3ecbd32ac857470514a10b49e364d5f05a8309b044af35b?s=96&d=mm&r=g",
  may: "https://writer.com/wp-content/uploads/2024/12/may-habib-profile.png",
  marisa: "https://writer.com/wp-content/uploads/2026/04/Marisa-Almeida-1.png",
  lindsay: "https://writer.com/wp-content/uploads/2026/05/Lindsay-Poirier-1.png",
  april: "https://writer.com/wp-content/uploads/2026/05/April-Trask-1.png",
  maureen: "https://writer.com/wp-content/uploads/2026/02/Maureen-Little-1.png",
} as const;

export const blogData = {
  nav: [
    {
      label: "Enterprise transformation",
      href: "https://writer.com/blog/category/enterprise-transformation/",
    },
    {
      label: "AI agents at work",
      href: "https://writer.com/blog/category/ai-agents-at-work/",
    },
    {
      label: "Humans in the loop",
      href: "/blog/category/humans-in-the-loop",
    },
    { label: "Innovation", href: "https://writer.com/blog/category/innovation/" },
    {
      label: "Inside WRITER",
      href: "https://writer.com/blog/category/inside-writer/",
    },
    { label: "Guides", href: "/guides" },
  ],
  logos: {
    circle: "https://writer.com/wp-content/uploads/2024/08/blog-logo-circle.svg",
    wordmark: "https://writer.com/wp-content/uploads/2024/03/wr-room-logo.svg",
    giant: "https://writer.com/wp-content/uploads/2024/08/Writers_room_tr.svg",
  },
  featured: {
    title:
      "The AI leadership gap: Even marketers who use AI fear they’ll be replaced",
    href: "https://writer.com/blog/ai-leadership-gap-marketing-fear-replacement/",
    category: "Enterprise transformation",
    categoryHref: "https://writer.com/blog/category/enterprise-transformation/",
    readTime: "9 min read",
    author: "Diego Lomanto, CMO",
    avatar: AVATARS.diego,
    image:
      "https://writer.com/wp-content/uploads/2026/06/2026-06-What-marketers-are-saying-about-AI-in-2026-1.png",
    imageAlt: "What marketers are saying about AI in 2026",
    excerpt:
      "42.5% of marketing employees fear AI replacement. WRITER’s 2026 survey reveals the leadership gap — and the four moves CMOs need to close it.",
  } satisfies BlogPost,
  recent: [
    {
      title: "How to make AI sound like your brand, not every other brand",
      href: "https://writer.com/blog/webinar-recap-ai-brand-engine/",
      image:
        "https://writer.com/wp-content/uploads/2026/07/2025-2-Compliance-office-hours-%E2%80%93-Video-thumbnail-4-1.png",
    },
    {
      title:
        "New at WRITER: Playbooks built for quality, cost efficiency, and control",
      href: "https://writer.com/blog/more-powerful-playbooks/",
      image:
        "https://writer.com/wp-content/uploads/2026/07/Blog-hero-image-1.png",
    },
    {
      title: "This AI agent analyzes and reports on your key pipeline trends",
      href: "https://writer.com/blog/ai-agent-key-pipeline-trends/",
      image:
        "https://writer.com/wp-content/uploads/2026/07/THE-AI-Playbook-blog-Prospecting-agent-1.png",
    },
    {
      title:
        "What Cannes confirmed: Brand is the moat, AI agents are the engine",
      href: "https://writer.com/blog/brand-moat-ai-agents-cannes/",
      image:
        "https://writer.com/wp-content/uploads/2026/07/2026-07-What-Canne-Confirmed-1-1.png",
    },
    {
      title: "Bankers mostly skipped SaaS. They’re all in on AI now.",
      href: "https://writer.com/blog/bankers-skipped-saas-all-in-on-ai/",
      image:
        "https://writer.com/wp-content/uploads/2026/06/2026-06-Bankers-mostly-skipped-SaaS.-Theyre-all-in-on-AI.-1.png",
    },
    {
      title:
        "The AI leadership gap: Even marketers who use AI fear they’ll be replaced",
      href: "https://writer.com/blog/ai-leadership-gap-marketing-fear-replacement/",
      image:
        "https://writer.com/wp-content/uploads/2026/06/2026-06-What-marketers-are-saying-about-AI-in-2026-1.png",
    },
    {
      title: "Personalized AI might be taking your side over the truth",
      href: "https://writer.com/blog/personalized-ai-taking-your-side/",
      image:
        "https://writer.com/wp-content/uploads/2026/06/2026-06-Sycophancy-1.png",
    },
  ],
  categories: [
    {
      name: "Enterprise transformation",
      href: "https://writer.com/blog/category/enterprise-transformation/",
      posts: [
        {
          title: "How to make AI sound like your brand, not every other brand",
          href: "https://writer.com/blog/webinar-recap-ai-brand-engine/",
          category: "Enterprise transformation",
          categoryHref:
            "https://writer.com/blog/category/enterprise-transformation/",
          readTime: "13 min read",
          author: "Writer Team",
          avatar: AVATARS.team,
          image:
            "https://writer.com/wp-content/uploads/2026/07/2025-2-Compliance-office-hours-%E2%80%93-Video-thumbnail-4-1.png",
        },
        {
          title:
            "What Cannes confirmed: Brand is the moat, AI agents are the engine",
          href: "https://writer.com/blog/brand-moat-ai-agents-cannes/",
          category: "Enterprise transformation",
          categoryHref:
            "https://writer.com/blog/category/enterprise-transformation/",
          readTime: "8 min read",
          author: "Diego Lomanto, CMO",
          avatar: AVATARS.diego,
          image:
            "https://writer.com/wp-content/uploads/2026/07/2026-07-What-Canne-Confirmed-1-1.png",
        },
        {
          title:
            "The AI leadership gap: Even marketers who use AI fear they’ll be replaced",
          href: "https://writer.com/blog/ai-leadership-gap-marketing-fear-replacement/",
          category: "Enterprise transformation",
          categoryHref:
            "https://writer.com/blog/category/enterprise-transformation/",
          readTime: "9 min read",
          author: "Diego Lomanto, CMO",
          avatar: AVATARS.diego,
          image:
            "https://writer.com/wp-content/uploads/2026/06/2026-06-What-marketers-are-saying-about-AI-in-2026-1.png",
        },
        {
          title: "Who tends the garden?",
          href: "https://writer.com/blog/ai-agents-enterprise-intelligence-internal-knowledge/",
          category: "Enterprise transformation",
          categoryHref:
            "https://writer.com/blog/category/enterprise-transformation/",
          readTime: "10 min read",
          author: "Matan-Paul Shetrit",
          avatar: AVATARS.matan,
          image:
            "https://writer.com/wp-content/uploads/2026/04/2026-04-Who-tends-the-garden-1-1.png",
        },
        {
          title:
            "Key findings from our 2026 AI adoption survey — and why CMOs should care",
          href: "https://writer.com/blog/ai-adoption-survey-2026/",
          category: "Enterprise transformation",
          categoryHref:
            "https://writer.com/blog/category/enterprise-transformation/",
          readTime: "6 min read",
          author: "Diego Lomanto, CMO",
          avatar: AVATARS.diego,
          image:
            "https://writer.com/wp-content/uploads/2026/04/2026-04-Key-findings-from-our-2026-AI-adoption-survey-%E2%80%94-and-why-CMOs-should-care-1-1.png",
        },
      ],
    },
    {
      name: "AI agents at work",
      href: "https://writer.com/blog/category/ai-agents-at-work/",
      posts: [
        {
          title:
            "This AI agent analyzes and reports on your key pipeline trends",
          href: "https://writer.com/blog/ai-agent-key-pipeline-trends/",
          category: "AI agents at work",
          categoryHref: "https://writer.com/blog/category/ai-agents-at-work/",
          readTime: "10 min read",
          author: "Ben Popper",
          avatar: AVATARS.ben,
          image:
            "https://writer.com/wp-content/uploads/2026/07/THE-AI-Playbook-blog-Prospecting-agent-1.png",
        },
        {
          title: "Bankers mostly skipped SaaS. They’re all in on AI now.",
          href: "https://writer.com/blog/bankers-skipped-saas-all-in-on-ai/",
          category: "AI agents at work",
          categoryHref: "https://writer.com/blog/category/ai-agents-at-work/",
          readTime: "9 min read",
          author: "Ben Popper",
          avatar: AVATARS.ben,
          image:
            "https://writer.com/wp-content/uploads/2026/06/2026-06-Bankers-mostly-skipped-SaaS.-Theyre-all-in-on-AI.-1.png",
        },
        {
          title:
            "Everyday automations: two simple agents that save marketers hours of work each week",
          href: "https://writer.com/blog/simple-ai-agent-marketing-project-management-save-hours-automate/",
          category: "AI agents at work",
          categoryHref: "https://writer.com/blog/category/ai-agents-at-work/",
          readTime: "10 min read",
          author: "Ben Popper",
          avatar: AVATARS.ben,
          image:
            "https://writer.com/wp-content/uploads/2026/05/THE-AI-Playbook-blog-Daily-briefing-1.png",
        },
        {
          title: "Detect and Destroy the AI-isms Ruining Your Marketing Copy",
          href: "https://writer.com/blog/detect-destroy-ai-isms-marketing-copy/",
          category: "AI agents at work",
          categoryHref: "https://writer.com/blog/category/ai-agents-at-work/",
          readTime: "10 min read",
          author: "Ben Popper",
          avatar: AVATARS.ben,
          image:
            "https://writer.com/wp-content/uploads/2026/05/THE-AI-Playbook-blog-AI-ism-detector-1.png",
        },
        {
          title: "Use this AI agent to stage your blog posts",
          href: "https://writer.com/blog/ai-agent-stage-publish-blog-post-cms-wordpress/",
          category: "AI agents at work",
          categoryHref: "https://writer.com/blog/category/ai-agents-at-work/",
          readTime: "10 min read",
          author: "Ben Popper",
          avatar: AVATARS.ben,
          image:
            "https://writer.com/wp-content/uploads/2026/05/THE-AI-Playbook-blog-Google-Docs-%E2%80%A8to-WordPress-in-seconds-1.png",
        },
      ],
    },
    {
      name: "Humans in the loop",
      href: "/blog/category/humans-in-the-loop",
      posts: [
        {
          title:
            "When the funnel collapses: Rebuilding inbound marketing with Christian Westcott, Director of AI visibility",
          href: "https://writer.com/blog/humans-of-ai-christian-westcott/",
          category: "Humans in the loop",
          categoryHref: "/blog/category/humans-in-the-loop",
          readTime: "5 min read",
          author: "Alaura Weaver",
          avatar: AVATARS.alaura,
          image:
            "https://writer.com/wp-content/uploads/2026/05/2026-05-HoAIS5E2-%E2%80%93-Christian-Westcott-1.png",
        },
        {
          title: "Leading through the agentic revolution",
          href: "https://writer.com/blog/davos-takeaway-2026/",
          category: "Humans in the loop",
          categoryHref: "/blog/category/humans-in-the-loop",
          readTime: "7 min read",
          author: "May Habib",
          avatar: AVATARS.may,
          image:
            "https://writer.com/wp-content/uploads/2026/01/Davos-takeaway.png",
        },
        {
          title:
            "From AGI to AMI: Dan Bikel, WRITER’s head of AI, on why “manageable intelligence” is the real revolution",
          href: "https://writer.com/blog/humans-of-ai-dan-bikel/",
          category: "Humans in the loop",
          categoryHref: "/blog/category/humans-in-the-loop",
          readTime: "6 min read",
          author: "Alaura Weaver",
          avatar: AVATARS.alaura,
          image:
            "https://writer.com/wp-content/uploads/2025/11/HoAI-S4E3-%E2%80%93-Dan-Bikel-1.png",
        },
        {
          title:
            "The security paradox: Key insights on the human-agent workforce from WRITER’s CISO, Eric Freeman",
          href: "https://writer.com/blog/humans-of-ai-eric-freeman/",
          category: "Humans in the loop",
          categoryHref: "/blog/category/humans-in-the-loop",
          readTime: "6 min read",
          author: "Alaura Weaver",
          avatar: AVATARS.alaura,
          image:
            "https://writer.com/wp-content/uploads/2025/10/HoAI-S4E2-%E2%80%93-Eric-Freeman.png",
        },
        {
          title:
            "The metagame: How WRITER’s Diego Lomanto reads the agentic future of marketing",
          href: "https://writer.com/blog/humans-of-ai-diego-lomanto/",
          category: "Humans in the loop",
          categoryHref: "/blog/category/humans-in-the-loop",
          readTime: "5 min read",
          author: "Alaura Weaver",
          avatar: AVATARS.alaura,
          image:
            "https://writer.com/wp-content/uploads/2025/10/HoAI-S4E1-%E2%80%93-Diego-Lomanto-1.png",
        },
      ],
    },
    {
      name: "Innovation",
      href: "https://writer.com/blog/category/innovation/",
      posts: [
        {
          title:
            "New at WRITER: Playbooks built for quality, cost efficiency, and control",
          href: "https://writer.com/blog/more-powerful-playbooks/",
          category: "Innovation",
          categoryHref: "https://writer.com/blog/category/innovation/",
          readTime: "5 min read",
          author: "Writer Team",
          avatar: AVATARS.team,
          image:
            "https://writer.com/wp-content/uploads/2026/07/Blog-hero-image-1.png",
        },
        {
          title: "Personalized AI might be taking your side over the truth",
          href: "https://writer.com/blog/personalized-ai-taking-your-side/",
          category: "Innovation",
          categoryHref: "https://writer.com/blog/category/innovation/",
          readTime: "10 min read",
          author: "Writer Team",
          avatar: AVATARS.team,
          image:
            "https://writer.com/wp-content/uploads/2026/06/2026-06-Sycophancy-1.png",
        },
        {
          title: "New at WRITER: Brand systems built for an AI era",
          href: "https://writer.com/blog/new-roundup-may-2026/",
          category: "Innovation",
          categoryHref: "https://writer.com/blog/category/innovation/",
          readTime: "6 min read",
          author: "Writer Team",
          avatar: AVATARS.team,
          image:
            "https://writer.com/wp-content/uploads/2026/05/Style-guide-user-experience-2-1.png",
        },
        {
          title:
            "New at WRITER: More autonomy for agents, more control for admins",
          href: "https://writer.com/blog/new-roundup-april-2026/",
          category: "Innovation",
          categoryHref: "https://writer.com/blog/category/innovation/",
          readTime: "10 min read",
          author: "Writer Team",
          avatar: AVATARS.team,
          image:
            "https://writer.com/wp-content/uploads/2026/04/Gong-trigger-BLOG-HERO-IMAGE-1.png",
        },
        {
          title:
            "How WRITER Skills turn your team’s expertise into reusable AI capabilities",
          href: "https://writer.com/blog/writer-skills-team-expertise/",
          category: "Innovation",
          categoryHref: "https://writer.com/blog/category/innovation/",
          readTime: "17 min read",
          author: "Marisa Almeida",
          avatar: AVATARS.marisa,
          image:
            "https://writer.com/wp-content/uploads/2026/04/2026-04-MOFU-Educational-blog-post-on-Skills-1.png",
        },
      ],
    },
    {
      name: "Inside WRITER",
      href: "https://writer.com/blog/category/inside-writer/",
      posts: [
        {
          title:
            "Beyond “the AI show”: Operationalizing agents at the WRITER Chicago roadshow",
          href: "https://writer.com/blog/beyond-the-ai-show/",
          category: "Inside WRITER",
          categoryHref: "https://writer.com/blog/category/inside-writer/",
          readTime: "5 min read",
          author: "Lindsay Poirier, Area Vice President, Sales",
          avatar: AVATARS.lindsay,
          image:
            "https://writer.com/wp-content/uploads/2026/05/2026-05-Chicago-roadshow-recap.png",
        },
        {
          title: "Your AI journey starts here",
          href: "https://writer.com/blog/ai-academy-passport-curriculum/",
          category: "Inside WRITER",
          categoryHref: "https://writer.com/blog/category/inside-writer/",
          readTime: "4 min read",
          author: "April Trask, Head of Customer and Partner Education",
          avatar: AVATARS.april,
          image:
            "https://writer.com/wp-content/uploads/2026/05/2026-05-Academy-launch-Blog-Image-1.png",
        },
        {
          title: "Who tends the garden?",
          href: "https://writer.com/blog/ai-agents-enterprise-intelligence-internal-knowledge/",
          category: "Enterprise transformation",
          categoryHref:
            "https://writer.com/blog/category/enterprise-transformation/",
          readTime: "10 min read",
          author: "Matan-Paul Shetrit",
          avatar: AVATARS.matan,
          image:
            "https://writer.com/wp-content/uploads/2026/04/2026-04-Who-tends-the-garden-1-1.png",
        },
        {
          title: "New at WRITER: Scale the best work across your team",
          href: "https://writer.com/blog/new-roundup-february-2026/",
          category: "Inside WRITER",
          categoryHref: "https://writer.com/blog/category/inside-writer/",
          readTime: "8 min read",
          author: "Matan-Paul Shetrit",
          avatar: AVATARS.matan,
          image:
            "https://writer.com/wp-content/uploads/2026/02/2026-02-February-Launch-Roundup-Blog-5-1.png",
        },
        {
          title:
            "Introducing the new partner program enterprise AI actually needs",
          href: "https://writer.com/blog/new-partner-program/",
          category: "Inside WRITER",
          categoryHref: "https://writer.com/blog/category/inside-writer/",
          readTime: "5 min read",
          author: "Maureen Little, SVP of Partnerships and Ecosystem",
          avatar: AVATARS.maureen,
          image:
            "https://writer.com/wp-content/uploads/2026/02/2026-02-Introducing-the-new-Partner-Program-Enterprise-AI-actually-needs-HERO-3.png",
        },
      ],
    },
  ] satisfies BlogCategory[],
  newsletter: {
    title: "Monthly dispatches on the AI revolution.",
    titleLine2: "Delivered to your inbox.",
    placeholder: "Add your email*",
    privacy:
      "By completing and submitting this form, you agree that WRITER may email or call you with product updates, educational resources, and other promotional information. To learn more about how WRITER uses your information, see our",
    privacyHref: "/legal/privacy",
  },
};
