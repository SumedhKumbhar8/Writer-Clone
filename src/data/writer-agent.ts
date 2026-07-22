export const WRITER_AGENT_HERO = {
  icon: "https://writer.com/wp-content/uploads/2026/04/mouse-pointer-click.png",
  label: "WRITER AGENT",
  // ponytail: U+2028 matches writer.com soft line breaks; swap for <br> if CMS-driven copy lands
  title: "Your team\u2019s capacity,\u2028multiplied.",
  description:
    "WRITER Agent autonomously plans and executes work across your data and tools,\u2028grounded in your context and governed by enterprise controls.",
  image: {
    src: "https://writer.com/wp-content/uploads/2026/04/Frame-2055247851.png",
    alt: "WRITER Agent interface with prompt input and suggested workflows",
    width: 1050,
    height: 600,
  },
} as const;

export const HOW_IT_WORKS_STEPS = [
  {
    id: "outcome",
    title: "Works backwards from your outcome.",
    description:
      "Just tell WRITER Agent what you want to accomplish — it builds the plan to get there, mapping every step across the right data and tools.",
    image: {
      src: "https://writer.com/wp-content/uploads/2026/04/Frame-2055247936.png",
      alt: "WRITER Agent prompt interface with suggested workflows",
      width: 1024,
      height: 585,
    },
  },
  {
    id: "act",
    title: "Knows when to act and when to ask.",
    description:
      "WRITER Agent autonomously executes the plan and stops along the way for input — so you stay in full control without micromanaging every step.",
    image: {
      src: "https://writer.com/wp-content/uploads/2026/04/Frame-2055247934b.png",
      alt: "WRITER Agent workflow in progress with checklist",
      width: 1024,
      height: 585,
    },
  },
  {
    id: "assets",
    title: "Delivers polished assets, not first drafts.",
    description:
      "No more endless back-and-forth. Get complete documents, presentations, dashboards, and spreadsheets — tailored to your brand.",
    image: {
      src: "https://writer.com/wp-content/uploads/2026/04/Frame-2055247900a.png",
      alt: "WRITER Agent campaign results with presentation preview",
      width: 1024,
      height: 585,
    },
  },
  {
    id: "repeatable",
    title: "Makes work repeatable across the team.",
    description:
      "Everything is built to share by default — from playbooks and skills to voice profiles, and more — so you can build once and scale everywhere.",
    image: {
      src: "https://writer.com/wp-content/uploads/2026/04/Frame-2055247901.png",
      alt: "WRITER Agent playbook sharing workflow",
      width: 1024,
      height: 585,
    },
  },
] as const;

export const ENTERPRISE_FEATURES = [
  {
    icon: "https://writer.com/wp-content/uploads/2026/04/lock-keyhole.png",
    title: "Granular permissions,\nnot blank access.",
    description:
      "Ensure users and agents only have access to the connectors, tools, and knowledge sources they need — and nothing they don't.",
  },
  {
    icon: "https://writer.com/wp-content/uploads/2026/04/chart-line.png",
    title: "Full visibility\ninto every\nagent action.",
    description:
      "Get complete visibility into WRITER with system-wide analytics — from audit logs to usage trends — so nothing runs without a trace.",
  },
  {
    icon: "https://writer.com/wp-content/uploads/2026/04/shield-check.png",
    title: "Guardrails\nset centrally,\nenforced globally",
    description:
      "Set the rules once and WRITER enforces everywhere — so data stays protected and agents stay on-brand, by default.",
  },
] as const;

export const WRITER_AGENT_QUOTE = {
  text: "With WRITER's playbooks and skills, we're seeing north of 85% savings in terms of time and tasks that go away.",
  author: "Matt Harker",
  role: "VP, Consumer Experience Transformation",
  company: "The Clorox Company",
  photo: "https://writer.com/wp-content/uploads/2026/04/photo_22f4a8.png",
  companyLogo: "https://writer.com/wp-content/uploads/2026/04/The-Clorox-Company-white.png",
  gradientOrb: "https://writer.com/wp-content/uploads/2026/04/105-4.png?w=640",
} as const;

export const WRITER_AGENT_FEATURES = [
  {
    id: "playbooks",
    src: "https://writer.com/wp-content/uploads/2026/04/Group-5768-2.png",
    alt: 'Playbooks — repeatable workflows, not one-off prompts',
    width: 1030,
    height: 958,
    slideWidth: 515,
  },
  {
    id: "connectors",
    src: "https://writer.com/wp-content/uploads/2026/04/img_d65ea7.png",
    alt: "Connectors — works across your tools, so you don't have to",
    width: 1030,
    height: 958,
    slideWidth: 515,
  },
  {
    id: "skills",
    src: "https://writer.com/wp-content/uploads/2026/04/img-1-2.png",
    alt: "Skills — domain expertise, captured once and scaled everywhere",
    width: 1030,
    height: 958,
    slideWidth: 515,
  },
  {
    id: "voice",
    src: "https://writer.com/wp-content/uploads/2026/04/img-2-1.png",
    alt: "Voice profiles — brand standards, enforced everywhere",
    width: 1030,
    height: 958,
    slideWidth: 515,
  },
  {
    id: "presentations",
    src: "https://writer.com/wp-content/uploads/2026/04/img-3.png",
    alt: "Presentations — on-brand slides, automatically",
    width: 1030,
    height: 958,
    slideWidth: 515,
  },
  {
    id: "my-work",
    src: "https://writer.com/wp-content/uploads/2026/04/img-4.png",
    alt: "My Work — all your deliverables, organized and shared in one place",
    width: 1030,
    height: 958,
    slideWidth: 515,
  },
] as const;
