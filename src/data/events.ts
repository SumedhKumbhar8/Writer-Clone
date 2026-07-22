export type EventItem = {
  tag: string;
  label: string;
  title: string;
  href: string;
  desc: string;
  date: string;
  image: string;
};

export const eventsPageData = {
  eyebrow: "EVENTS",
  title: "Connect, learn, repeat",
  subtitle: "Be part of the next event coming to a city (or virtually) near you!",
  onDemand: {
    title: "On-demand",
    subtitle: "Missed it? We’ve got you covered.",
  },
  filters: [
    { id: "all", label: "All" },
    { id: "webinar", label: "Webinars" },
  ] as const,
  pageSize: 12,
  cta: {
    title: "Increase productivity, align your brand, and enable more writers",
    primary: { label: "Request a demo", href: "https://go.writer.com/demo" },
    secondary: { label: "Try for free", href: "https://app.writer.com/register" },
  },
  events: [
    {
      tag: "Webinar",
      label: "webinar",
      title: "From content factory to brand engine",
      href: "https://go.writer.com/brand-engine-webinar/",
      desc: "Learn how CMOs scale AI content without losing brand credibility. Get research-backed governance frameworks from Forrester and H&R Block.",
      date: "June 30, 2026",
      image:
        "https://writer.com/wp-content/uploads/2026/06/Events_Compliance-753x568-12-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "WRITER at work",
      href: "https://go.writer.com/writer-at-work-june26",
      desc: "Empower your whole team to create content with brand integrity",
      date: "June 9, 2026",
      image: "https://writer.com/wp-content/uploads/2026/06/Frame-2055247864-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "WRITER at work",
      href: "https://go.writer.com/writer-at-work-may/",
      desc: "Free up time with everyday automations",
      date: "May 19, 2026",
      image: "https://writer.com/wp-content/uploads/2026/05/Frame-2055247863-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "WRITER at work",
      href: "https://go.writer.com/writer-at-work-teach-your-tactics-once",
      desc: "Teach your tactics once. Scale yourself as a marketer.",
      date: "April 16, 2026",
      image: "https://writer.com/wp-content/uploads/2026/05/Frame-2055247586-2-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "WRITER at work",
      href: "https://go.writer.com/writer-work-march-2026",
      desc: "New ways to create on-brand assets on repeat",
      date: "March 12, 2026",
      image: "https://writer.com/wp-content/uploads/2026/03/Frame-2055247586-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "Scaling the digital shelf",
      href: "https://go.writer.com/ee-webinar",
      desc: "How EE transformed marketing operations to scale 4,500+ products",
      date: "January 21",
      image:
        "https://writer.com/wp-content/uploads/2026/01/Events_Compliance-753x568-11-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title:
        "The real economics of enterprise AI: What Forrester’s new ROI study reveals",
      href: "https://go.writer.com/tei-webinar-2025",
      desc: "Stop debating AI’s value. Start proving it.",
      date: "December 11",
      image:
        "https://writer.com/wp-content/uploads/2025/12/Events_Compliance-753x568-9-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "VOIS and Vodafone UK’s transformation story",
      href: "https://go.writer.com/vois-vodafone-webinar",
      desc: "Chris Meads, CCO of VOIS, and Alex Pott, Consumer Digital Director at Vodafone UK, reveal their playbook for AI transformation at enterprise scale.",
      date: "November 20, 2025",
      image:
        "https://writer.com/wp-content/uploads/2025/11/Events_Compliance-753x568-7-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "The agentic marketer",
      href: "https://go.writer.com/the-agentic-marketer-webinar",
      desc: "The old marketing playbook is broken. Learn how to build an agentic marketing team, featuring insights from leaders at KPMG, American Eagle, and Qualcomm.",
      date: "November 20, 2025",
      image:
        "https://writer.com/wp-content/uploads/2025/11/Events_Compliance-753x568-6-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title:
        "Agents of change: How SCAN Health Plan balances AI innovation and member trust",
      href: "https://go.writer.com/scan-webinar-2025",
      desc: "",
      date: "October 14, 2025",
      image:
        "https://writer.com/wp-content/uploads/2025/10/Events_Compliance-753x568-4-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title:
        "From denim to data: American Eagle’s seamless transition into AI-powered retail",
      href: "https://go.writer.com/ae-webinar-2025",
      desc: "",
      date: "June 5, 2025",
      image:
        "https://writer.com/wp-content/uploads/2025/05/Events_Compliance-753x568-4-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title:
        "Empowering teams with AI agents: Learn from the real-world success of Uber",
      href: "https://go.writer.com/empoweringteams-uber",
      desc: "Tune into our fireside chat for a firsthand look at what worked, where they faced challenges, and the things they’d do differently.",
      date: "May 13, 2025",
      image:
        "https://writer.com/wp-content/uploads/2025/04/uber-webinar-event-featured.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "Agentic AI in the enterprise: A look at our biggest launch yet",
      href: "https://go.writer.com/agentic-ai-enterprise",
      desc: "Get a look at the product innovations that will make agentic AI work for enterprises.",
      date: "April 10, 2025",
      image: "https://writer.com/wp-content/uploads/2025/03/events-hype.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "Generating alpha in the age of AI: Weighing rewards against risk",
      href: "https://go.writer.com/generatingalpha-ama",
      desc: "Join Head of Financial Services, Dilshoda Yergasheva, and Director of Developer Relations, Sam Julien, on March 20 at 1pm ET for a financial services AMA.",
      date: "March 20, 2025",
      image:
        "https://writer.com/wp-content/uploads/2025/03/failsafe-ama-feature-3.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "Content compliance AMA: AI for regulated industries",
      href: "https://go.writer.com/content-compliance-2-26-25",
      desc: "Christine Tran, Director of Solutions Marketing at WRITER, is hosting a conversation with Johanna Murphy, Implementation Manager. Johanna will share her firsthand experience helping companies transform compliance workflows with generative AI.",
      date: "February 26, 2025",
      image:
        "https://writer.com/wp-content/uploads/2025/02/Events_Compliance-753x568-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title:
        "A tale of two PDPs: How CPG brands are transforming PDP workflows with generative AI",
      href: "https://go.writer.com/demo-retail-01-28-25",
      desc: "Join us for a 30-minute session — a tale of two PDP workflows — led by CPG industry expert, Kushala Silva.",
      date: "January 28, 2025",
      image:
        "https://writer.com/wp-content/uploads/2025/02/Events_CPG-753x568-1.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "The future of enterprise AI",
      href: "https://go.writer.com/fireside-chat-2024",
      desc: "WRITER's CEO, May Habib, and CMO, Diego Lomanto explore WRITER's journey from AI upstart to a generative AI powerhouse. They discuss how AI is set to become the backbone of mission-critical enterprise workflows.",
      date: "November 22, 2024",
      image:
        "https://writer.com/wp-content/uploads/2024/11/future-enterprise-ai-events-hub-compressed.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "Escaping AI POC purgatory",
      href: "https://go.writer.com/escaping-poc-purgatory-10-29",
      desc: "Sam Julien, Director of Developer Relations, walks us through a practical roadmap for overcoming key challenges in enterprise AI engineering using a full-stack approach to generative AI.",
      date: "October 29, 2024",
      image:
        "https://writer.com/wp-content/uploads/2024/07/ai-studio-workshop-events-hub.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "Unlocking AI in medical affairs",
      href: "https://go.writer.com/medical-affairs-10-23",
      desc: "An insight-packed discussion on “What every medical affairs leader needs to know about generative AI in pharma,” featuring healthcare experts Rob Stevens and Zayed Yasin, MD, and Samin Saeed, MBBS, VP Early Medical Pipeline, Specialty Care, from GSK.",
      date: "October 23, 2024",
      image:
        "https://writer.com/wp-content/uploads/2024/11/pharma-webinar-events-hub.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "The future of finance",
      href: "https://go.writer.com/finance-8-22",
      desc: "Don't miss this fireside chat with Deep Ratna Srivastav, SVP, Head of AI & Digital Transformation at Franklin Templeton, and our very own CMO, Diego Lomanto. Learn about the role of generative AI in finance and how it’s moving from data processing to decision-making.",
      date: "August 22, 2024",
      image:
        "https://writer.com/wp-content/uploads/2024/07/future-finance-events-hub.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "AI Studio workshop",
      href: "https://go.writer.com/ai-studio-workshop-7-31-24",
      desc: "Watch on-demand as Sam Julien, our Director of Developer Relations, shows you how to make an app that turns messy closed ticket data into formatted release notes.",
      date: "July 31, 2024",
      image:
        "https://writer.com/wp-content/uploads/2024/07/ai-studio-workshop-events-hub.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "Generative AI for all",
      href: "https://go.writer.com/ai-studio-6-25",
      desc: "Watch on-demand as WRITER teammates Ashely Brooks and Andrew Miller deep-dive into AI Studio. See how it can streamline app development in your organization.",
      date: "June 25, 2024",
      image:
        "https://writer.com/wp-content/uploads/2024/06/generative-ai-all-events-hub.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "Cracking the retail generative AI code",
      href: "https://go.writer.com/adoreme-5-20",
      desc: "Leading intimate apparel DTC brand Adore Me shares learnings from their three-year journey into generative AI. Watch this fireside chat featuring Ranjan Roy, Adore Me's SVP of Strategy.",
      date: "May 20, 2024",
      image:
        "https://writer.com/wp-content/uploads/2024/05/adore-me-webinar-events-hub-compressed.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "From hype to action",
      href: "https://go.writer.com/from-hype-to-action-webinar-4-25-24",
      desc: "Deep dive into the practical aspects of implementing generative AI for your enterprise. Watch on-demand and discover how to separate the hype from reality.",
      date: "April 25, 2024",
      image:
        "https://writer.com/wp-content/uploads/2024/04/hype-to-action-events-hub.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "Generative AI for healthcare",
      href: "https://go.writer.com/generative-ai-for-healthcare-payers-providers-webinar",
      desc: "Discover the untapped opportunities of generative AI for healthcare payors and providers with Burton Ye and Zayed Yasin. Watch on-demand.",
      date: "March 28, 2024",
      image: "https://writer.com/wp-content/uploads/2024/03/zayed-burton-hub.png",
    },
    {
      tag: "Webinar",
      label: "webinar",
      title: "The retail revolution",
      href: "https://go.writer.com/retail-revolution-webinar",
      desc: "Tap into the transformative power of generative AI in the retail industry with Andrew Racine and Burton Ye. Watch on-demand.",
      date: "February 8, 2024",
      image:
        "https://writer.com/wp-content/uploads/2024/02/andrew-burton-events-hub-2.png",
    },
  ] satisfies EventItem[],
};
