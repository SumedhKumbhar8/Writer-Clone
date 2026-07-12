export const BRAND_HERO = {
  icon: "https://writer.com/wp-content/uploads/2026/05/swatch-book.svg",
  label: "BRAND",
  title: "Your brand standards, enforced by default.",
  description:
    "WRITER keeps every AI output on-brand \u2014 with approved language, writing rules, and voice applied automatically, so standards are built in from the start.",
  cta: { label: "Request a demo", href: "https://go.writer.com/demo" },
  image: {
    src: "https://writer.com/wp-content/uploads/2026/05/Frame-2055247851.png",
    alt: "WRITER Brand interface showing Voice & Style Guide",
    width: 1080,
    height: 675,
  },
} as const;

export const BRAND_TRUSTED_LOGOS = {
  title: "World-class enterprises trust WRITER",
  logos: [
    { name: "Vanguard", src: "https://writer.com/wp-content/uploads/2026/06/Group.svg", width: 155 },
    { name: "Salesforce", src: "https://writer.com/wp-content/uploads/2026/06/Union.svg", width: 126 },
    { name: "KPMG", src: "https://writer.com/wp-content/uploads/2026/06/KPMG_logo-1.svg", width: 76 },
    { name: "Qualcomm", src: "https://writer.com/wp-content/uploads/2026/06/Group-4078.svg", width: 130 },
    { name: "American Eagle", src: "https://writer.com/wp-content/uploads/2026/06/american-Group.svg", width: 149 },
    { name: "Uber", src: "https://writer.com/wp-content/uploads/2026/06/Uber_logo_2018-1.svg", width: 70 },
    { name: "Dropbox", src: "https://writer.com/wp-content/uploads/2026/06/Group-3514.svg", width: 120 },
    { name: "e.l.f. Cosmetics", src: "https://writer.com/wp-content/uploads/2026/06/ELF-1.svg", width: 80 },
    { name: "SCAN Health Plan", src: "https://writer.com/wp-content/uploads/2026/06/scan-health-logo-strip.svg", width: 160 },
    { name: "VOIS", src: "https://writer.com/wp-content/uploads/2026/06/Layer_1.svg", width: 80 },
  ],
} as const;

export const BRAND_HOW_IT_WORKS = {
  eyebrow: "HOW IT WORKS",
  title: "Brand consistency, built into every output.",
  items: [
    {
      id: "voice",
      title: "Sounds like your brand,\nnot generic AI.",
      description:
        "Set a distinct voice for every team and WRITER applies it automatically \u2014 so every output reflects the right tone and personality, whether it comes from marketing, sales, or CS.",
      image: "https://writer.com/wp-content/uploads/2026/05/Frame-2055247937.png?w=640",
    },
    {
      id: "words",
      title: "The right words,\nevery time.",
      description:
        "WRITER can enforce approved language, correct capitalization, and rewrite restricted terms \u2014 before any reviewer sees the draft.",
      image: "https://writer.com/wp-content/uploads/2026/05/Frame-2055247938.png?w=640",
    },
    {
      id: "rules",
      title: "Your writing rules,\napplied at creation.",
      description:
        "WRITER checks every output against your rules for punctuation, capitalization, grammar, readability, and inclusivity \u2014 before it reaches review.",
      image: "https://writer.com/wp-content/uploads/2026/05/Frame-2055247941.png?w=640",
    },
    {
      id: "messaging",
      title: "What your brand says,\nnot just how it sounds.",
      description:
        "Encode messaging frameworks, positioning, product descriptions, and brand narratives as Skills \u2014 and make them available inside any workflow, for any team.",
      image: "https://writer.com/wp-content/uploads/2026/05/Frame-2055247942.png?w=640",
    },
    {
      id: "decks",
      title: "Branded decks, without\nthe formatting work.",
      description:
        "Upload your slide template once and WRITER generates complete presentations from it \u2014 your fonts, colors, and layouts already in place, ready to export and share.",
      image: "https://writer.com/wp-content/uploads/2026/05/Frame-2055247944.png?w=640",
    },
  ],
} as const;

export const BRAND_WHY_WRITER = {
  icon: "https://writer.com/wp-content/uploads/2026/04/mouse-pointer-click_8bcc37.png?w=32",
  eyebrow: "WHY WRITER",
  title: "More output.\nFewer brand reviews.",
  items: [
    {
      icon: "https://writer.com/wp-content/uploads/2026/05/lock-keyhole.svg",
      title: "Scale content without\nscaling reviews.",
      description:
        "Brand standards are enforced at generation \u2014 not at the end of the review cycle \u2014 so teams can produce more without creating more approval overhead.",
    },
    {
      icon: "https://writer.com/wp-content/uploads/2026/05/eye.svg",
      title: "Finished assets,\nready to share.",
      description:
        "From presentations to blogs to customer comms WRITER generates complete, on-brand outputs \u2014 so the work that leaves your team already looks the part.",
    },
    {
      icon: "https://writer.com/wp-content/uploads/2026/05/shield-check.svg",
      title: "Consistent output\nacross every team.",
      description:
        "Whether it\u2019s marketing, sales, or CS \u2014 every team works from the same approved voices, terms, and writing rules, so brand drift doesn\u2019t compound as output scales.",
    },
  ],
} as const;

export const BRAND_TESTIMONIAL = {
  quote: "\u201COne-off prompting just doesn\u2019t work for brand consistency across a growing team. The real game changer was baking our brand DNA right into WRITER\u2014when staying on brand is as simple as clicking a button, you\u2019re not just protecting the brand, you\u2019re speeding up everyone\u2019s day.\u201D",
  author: "Tara Castrejona",
  role: "SVP and Head of Marketing",
  photo: "https://writer.com/wp-content/uploads/2026/05/photo.png",
  companyLogo: "https://writer.com/wp-content/uploads/2026/05/Layer_1.png",
  backgroundImage: "https://writer.com/wp-content/uploads/2026/05/34-1.webp?w=640",
} as const;

export const BRAND_BOTTOM_CTA = {
  title: "Your brand, consistent at any scale.",
  ctas: [
    { label: "Try for free", href: "https://app.writer.com/register", variant: "filled" as const },
    { label: "Request a demo", href: "https://go.writer.com/demo/", variant: "outline" as const },
  ],
} as const;
