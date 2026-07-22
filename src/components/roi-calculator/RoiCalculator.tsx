"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import { estimateRoi, formatSmart, type RoiResult } from "@/lib/roi-estimate";

const USE_CASES = [
  {
    id: "content-supply",
    label: "Content supply chain",
    desc: "End-to-end content creation, management, and distribution at scale",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect width="32" height="32" rx="16" fill="#E4E9FF" />
        <path
          d="M14 13.3333H18.6667M13.3333 16H17.3333M15.3333 18.6667H18.6667M11.3333 10H20.6667C21.403 10 22 10.597 22 11.3333V20.6667C22 21.403 21.403 22 20.6667 22H11.3333C10.597 22 10 21.403 10 20.6667V11.3333C10 10.597 10.597 10 11.3333 10Z"
          stroke="#5551FF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "seo-aeo-geo",
    label: "SEO / AEO / GEO",
    desc: "Traditional SEO and optimization for AI-powered search engines",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect width="32" height="32" rx="16" fill="#E4E9FF" />
        <circle cx="15.11" cy="15.11" r="4.44" stroke="#5551FF" strokeWidth="1.2" fill="none" />
        <path d="M18.4 18.4L22 22" stroke="#5551FF" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "abm",
    label: "Account-based marketing",
    desc: "Hyper-personalized content and campaigns for target accounts",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect width="32" height="32" rx="16" fill="#E4E9FF" />
        <path
          d="M20 21.333C20 20.272 19.579 19.255 18.829 18.505C18.078 17.755 17.061 17.334 16 17.334M16 17.334C14.939 17.334 13.922 17.755 13.172 18.505C12.422 19.255 12 20.272 12 21.333M16 17.334C17.473 17.334 18.667 16.14 18.667 14.667C18.667 13.194 17.473 12 16 12C14.527 12 13.333 13.194 13.333 14.667C13.333 16.14 14.527 17.334 16 17.334ZM22.667 16C22.667 19.682 19.682 22.667 16 22.667C12.318 22.667 9.333 19.682 9.333 16C9.333 12.318 12.318 9.334 16 9.334C19.682 9.334 22.667 12.318 22.667 16Z"
          stroke="#5551FF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "field-marketing",
    label: "Field marketing",
    desc: "Localized campaigns, event materials, and regional activations",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect width="32" height="32" rx="16" fill="#E4E9FF" />
        <path
          d="M16 19.335C16.146 19.335 16.288 19.287 16.405 19.198C17.421 18.287 20 15.743 20 13.334C20 12.274 19.579 11.256 18.828 10.506C18.078 9.756 17.061 9.334 16 9.334C14.939 9.334 13.922 9.756 13.172 10.506C12.421 11.256 12 12.274 12 13.334C12 15.743 14.58 18.287 15.595 19.198C15.711 19.287 15.854 19.335 16 19.335Z"
          stroke="#5551FF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="13.33" r="1.33" stroke="#5551FF" />
      </svg>
    ),
  },
  {
    id: "campaign-orchestration",
    label: "Campaign orchestration",
    desc: "Multi-channel campaign execution with integrated workflows",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect width="32" height="32" rx="16" fill="#E4E9FF" />
        <path
          d="M10 15.333L22 12V20L10 17.333V15.333Z"
          stroke="#5551FF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "brand-compliance",
    label: "Brand compliance",
    desc: "Real-time governance, style enforcement, and regulatory compliance",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect width="32" height="32" rx="16" fill="#E4E9FF" />
        <circle cx="16" cy="16" r="6.67" stroke="#5551FF" />
        <path d="M14 16L15.333 17.334L18 14.667" stroke="#000" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

const STEP_LABELS = ["Company info", "Use cases", "Refine"] as const;

const ArrowRight = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
    <path
      d="M0.5 5.16667H9.83333M9.83333 5.16667L5.16667 0.5M9.83333 5.16667L5.16667 9.83333"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeft = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
    <path
      d="M5.16667 9.83333L0.5 5.16667M0.5 5.16667L5.16667 0.5M0.5 5.16667H9.83333"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type FormState = {
  industry: string;
  revenue: string;
  writerUsers: string;
  aiMaturity: string;
  agencySpend: string;
  toolStackSize: string;
  useCases: string[];
  contentVolume: string;
  contentReviews: string;
  seoImportance: string;
  campaignVolume: string;
  fieldEvents: string;
  abmAccounts: string;
  abmPersonalization: string;
  brandRegulation: string;
};

const defaults: FormState = {
  industry: "",
  revenue: "500000000",
  writerUsers: "",
  aiMaturity: "active",
  agencySpend: "500000",
  toolStackSize: "moderate",
  useCases: [],
  contentVolume: "25-50",
  contentReviews: "3",
  seoImportance: "important",
  campaignVolume: "5-6",
  fieldEvents: "25-50",
  abmAccounts: "50-100",
  abmPersonalization: "mix",
  brandRegulation: "moderate",
};

export function RoiHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="ROI__header">
      <div className="ROI__header-container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/roi/ROI-calculator-logo.png"
              alt="logo"
              width={109}
              height={35}
              priority
            />
          </Link>
        </div>
        <div className={`ROI__menu${menuOpen ? " show" : ""}`}>
          <ul>
            <li>
              <Link href="/plans">Plans</Link>
            </li>
            <li>
              <Link href="/customers">Customers</Link>
            </li>
            <li className="type-btn">
              <a
                href="https://go.writer.com/ai-marketing-consultation/"
                className="ROI__btn ROI__btn-primary consultation"
              >
                Schedule a consultation
              </a>
            </li>
          </ul>
        </div>
        <button
          className="hamburger hamburger--collapse js-hamburger"
          type="button"
          aria-label="Menu"
          onClick={() => {
            setMenuOpen((o) => !o);
            document.querySelector(".roi-page")?.classList.toggle("ROI_menu_open");
          }}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>
    </header>
  );
}

export function RoiCalculator() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(defaults);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [caseError, setCaseError] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [result, setResult] = useState<RoiResult | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState<RoiResult | null>(null);

  const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[key];
      return next;
    });
  };

  const toggleCase = (id: string) => {
    setForm((f) => ({
      ...f,
      useCases: f.useCases.includes(id)
        ? f.useCases.filter((x) => x !== id)
        : [...f.useCases, id],
    }));
    setCaseError("");
  };

  const answeredCount = useMemo(() => {
    let n = 0;
    let total = 0;
    if (form.useCases.includes("content-supply")) {
      total += 2;
      if (form.contentVolume) n++;
      if (form.contentReviews) n++;
    }
    if (form.useCases.includes("seo-aeo-geo")) {
      total += 1;
      if (form.seoImportance) n++;
    }
    if (form.useCases.includes("campaign-orchestration")) {
      total += 1;
      if (form.campaignVolume) n++;
    }
    if (form.useCases.includes("field-marketing")) {
      total += 1;
      if (form.fieldEvents) n++;
    }
    if (form.useCases.includes("abm")) {
      total += 2;
      if (form.abmAccounts) n++;
      if (form.abmPersonalization) n++;
    }
    if (form.useCases.includes("brand-compliance")) {
      total += 1;
      if (form.brandRegulation) n++;
    }
    return { n, total };
  }, [form]);

  const validateStep0 = () => {
    const next: Record<string, string> = {};
    if (!form.industry) next.industry = "Please select your industry to continue";
    if (!form.revenue) next.revenue = "This field is required.";
    const users = parseInt(form.writerUsers, 10);
    if (!form.writerUsers.trim()) next.writerUsers = "This field is required.";
    else if (Number.isNaN(users)) next.writerUsers = "Please enter a valid number of users.";
    else if (users > 500) next.writerUsers = "Contact us for teams larger than 500 users.";
    else if (users < 10) next.writerUsers = "Please enter at least 10 users.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const runCalc = useCallback(() => {
    const data = estimateRoi({
      industry: form.industry,
      revenue: parseInt(form.revenue, 10),
      writerUsers: parseInt(form.writerUsers, 10),
      aiMaturity: form.aiMaturity,
      agencySpend: parseInt(form.agencySpend, 10),
      toolStackSize: form.toolStackSize,
      selectedUseCases: form.useCases,
    });
    const unlocked =
      typeof document !== "undefined" &&
      document.cookie.includes("writerROICalculatorEmail=");
    if (unlocked) {
      setResult(data);
      setRevealed(true);
    } else {
      setPending(data);
      setModalOpen(true);
    }
  }, [form]);

  const goNext = () => {
    if (step === 0 && !validateStep0()) return;
    if (step === 1) {
      if (form.useCases.length === 0) {
        setCaseError("Please select at least one use case to continue");
        return;
      }
    }
    setStep((s) => Math.min(2, s + 1));
  };

  const revealWithEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    document.cookie = `writerROICalculatorEmail=${encodeURIComponent(email)}; path=/; max-age=31536000`;
    if (pending) {
      setResult(pending);
      setRevealed(true);
    }
    setModalOpen(false);
  };

  // Placeholders match original blurred card copy before unlock
  const placeholders = {
    total: "$0M",
    roi: "0%",
    payback: "N/A",
    labor: "$0M",
    agency: "$0M",
    software: "$0K",
    compliance: "$0K",
    capacity: "0 FTEs",
  };

  const progressPct =
    answeredCount.total === 0
      ? 0
      : Math.round((answeredCount.n / answeredCount.total) * 100);

  return (
    <>
      <section className="ROI__steps-section" id="ROI__steps-section">
        <div className="container-default-sm">
          <div className="ROI__stepper">
            <div className="ROI__steps-row">
              {STEP_LABELS.map((label, i) => (
                <div key={label} style={{ display: "contents" }}>
                  {i > 0 && <div className="line" />}
                  <div
                    className={`ROI__step${step === i && !revealed ? " active" : ""}${i < step || revealed ? " completed" : ""}`}
                    onClick={() => {
                      if (i < step) setStep(i);
                    }}
                  >
                    <div className="ROI__circle">{i + 1}</div>
                    <span>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ROI__form-row">
            <div className="ROI__form-fields">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  runCalc();
                }}
              >
                {/* Step 1 */}
                <div className={`ROI__step-col step-1${step === 0 ? " active" : ""}`}>
                  <h2>Tell us about your company</h2>

                  <div className={`step__form-group industry${errors.industry ? " error" : ""}`}>
                    <label htmlFor="industry">Industry</label>
                    <select
                      id="industry"
                      value={form.industry}
                      onChange={(e) => setField("industry", e.target.value)}
                    >
                      <option value="">Select your industry</option>
                      <option value="technology">Technology</option>
                      <option value="financial">Financial Services</option>
                      <option value="healthcare">Healthcare &amp; Life Sciences</option>
                      <option value="retail">Retail &amp; CPG</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="professional">Professional Services</option>
                      <option value="media">Media &amp; Entertainment</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.industry && <span className="error-message">{errors.industry}</span>}
                  </div>

                  <div className={`step__form-group${errors.revenue ? " error" : ""}`}>
                    <label htmlFor="revenue">Annual revenue</label>
                    <select
                      id="revenue"
                      value={form.revenue}
                      onChange={(e) => setField("revenue", e.target.value)}
                    >
                      <option value="10000000">Under $10M</option>
                      <option value="50000000">$10M - $50M</option>
                      <option value="100000000">$50M - $100M</option>
                      <option value="250000000">$100M - $250M</option>
                      <option value="500000000">$250M - $500M</option>
                      <option value="1000000000">$500M - $1B</option>
                      <option value="5000000000">$1B+</option>
                    </select>
                    <small>Company size context for benchmarking</small>
                    {errors.revenue && <span className="error-message">{errors.revenue}</span>}
                  </div>

                  <div className={`step__form-group${errors.writerUsers ? " error" : ""}`}>
                    <label htmlFor="writerUsers">Estimated WRITER users to activate</label>
                    <input
                      type="number"
                      id="writerUsers"
                      value={form.writerUsers}
                      onChange={(e) => setField("writerUsers", e.target.value)}
                    />
                    <small>Adjust this to match expected daily active WRITER users</small>
                    {errors.writerUsers && (
                      <span className="error-message">{errors.writerUsers}</span>
                    )}
                  </div>

                  <div className="step__form-group">
                    <label htmlFor="aiMaturity">AI maturity level</label>
                    <select
                      id="aiMaturity"
                      value={form.aiMaturity}
                      onChange={(e) => setField("aiMaturity", e.target.value)}
                    >
                      <option value="early">Early exploration (0-6 months using AI)</option>
                      <option value="active">Active implementation (6-18 months)</option>
                      <option value="advanced">Advanced integration (18+ months, AI-first)</option>
                    </select>
                    <small>More mature organizations see faster adoption and higher ROI</small>
                  </div>

                  <div className="step__form-group">
                    <label htmlFor="agencySpend">Annual agency/contractor spend</label>
                    <select
                      id="agencySpend"
                      value={form.agencySpend}
                      onChange={(e) => setField("agencySpend", e.target.value)}
                    >
                      <option value="0">None - All in-house</option>
                      <option value="100000">$100K - Occasional</option>
                      <option value="250000">$250K - Regular</option>
                      <option value="500000">$500K - Significant</option>
                      <option value="1000000">$1M - Heavy reliance</option>
                      <option value="2000000">$2M+ - Primary production</option>
                    </select>
                    <small>WRITER can help bring 30-50% of agency work in-house</small>
                  </div>

                  <div className="step__form-group">
                    <label htmlFor="toolStackSize">Current MarTech/AI tool stack</label>
                    <select
                      id="toolStackSize"
                      value={form.toolStackSize}
                      onChange={(e) => setField("toolStackSize", e.target.value)}
                    >
                      <option value="minimal">Minimal (1-2 content/AI tools)</option>
                      <option value="moderate">Moderate (3-5 tools)</option>
                      <option value="extensive">Extensive (6-10 tools)</option>
                      <option value="complex">Complex (10+ tools)</option>
                    </select>
                    <small>
                      WRITER consolidates content creation, DAM, workflow, compliance, and AI tools
                    </small>
                  </div>

                  <div className="step__form-button">
                    <button className="ROI__btn ROI__btn-primary next" type="button" onClick={goNext}>
                      Continue <ArrowRight />
                    </button>
                  </div>
                </div>

                {/* Step 2 */}
                <div className={`ROI__step-col step-2${step === 1 ? " active" : ""}`}>
                  <h2>Select your marketing use cases</h2>
                  <div className="ROI__cases-row">
                    {USE_CASES.map((uc) => (
                      <div className="ROI__case-card" key={uc.id}>
                        <input
                          type="checkbox"
                          id={uc.id}
                          checked={form.useCases.includes(uc.id)}
                          onChange={() => toggleCase(uc.id)}
                        />
                        <label htmlFor={uc.id}>
                          {uc.icon}
                          {uc.label}
                        </label>
                        <p>{uc.desc}</p>
                      </div>
                    ))}
                  </div>
                  {caseError && <span className="error-message">{caseError}</span>}
                  <div className="step__form-button">
                    <button
                      className="ROI__btn previous"
                      type="button"
                      onClick={() => setStep(0)}
                    >
                      <ArrowLeft /> Back
                    </button>
                    <button className="ROI__btn ROI__btn-primary next" type="button" onClick={goNext}>
                      Continue <ArrowRight />
                    </button>
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`ROI__step-col step-3${step === 2 ? " active" : ""}`}>
                  <h2>Refine your calculation</h2>
                  <p>
                    Answer a few quick questions to personalize your ROI calculation based on your
                    specific workflows and improve accuracy by up to 30%.
                  </p>
                  <div className="selection__time">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                      <path
                        d="M8.3335 1.66602H11.6668M10.0002 11.666L12.5002 9.16602M16.6668 11.666C16.6668 15.3479 13.6821 18.3327 10.0002 18.3327C6.31826 18.3327 3.3335 15.3479 3.3335 11.666C3.3335 7.98412 6.31826 4.99935 10.0002 4.99935C13.6821 4.99935 16.6668 7.98412 16.6668 11.666Z"
                        stroke="#828282"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Takes 2-3 minutes</span>
                  </div>

                  <div className="ROI__questions-list">
                    <div className="ROI__questions-progress">
                      <p>
                        <span className="obtain">{answeredCount.n}</span> of{" "}
                        <span className="total">{answeredCount.total}</span> questions answered
                      </p>
                      <div className="ROI__questions-bar">
                        <div
                          className="question__progress"
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>

                    {form.useCases.includes("content-supply") && (
                      <div className="ROI__questions-box">
                        <div className="questions__heading">
                          {USE_CASES[0].icon} Content supply chain
                        </div>
                        <div className="step__form-group">
                          <label>How many content pieces do you publish per month?</label>
                          <select
                            value={form.contentVolume}
                            onChange={(e) => setField("contentVolume", e.target.value)}
                          >
                            <option value="<10">Less than 10</option>
                            <option value="10-25">10-25 pieces</option>
                            <option value="25-50">25-50 pieces</option>
                            <option value="50+">50+ pieces</option>
                          </select>
                        </div>
                        <div className="step__form-group">
                          <label>Average review rounds per piece?</label>
                          <select
                            value={form.contentReviews}
                            onChange={(e) => setField("contentReviews", e.target.value)}
                          >
                            <option value="1-2">1-2 rounds</option>
                            <option value="3">3 rounds</option>
                            <option value="4+">4+ rounds</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {form.useCases.includes("seo-aeo-geo") && (
                      <div className="ROI__questions-box">
                        <div className="questions__heading">
                          {USE_CASES[1].icon} SEO / AEO / GEO
                        </div>
                        <div className="step__form-group">
                          <label>AI search visibility priority?</label>
                          {(
                            [
                              ["critical", "Critical priority"],
                              ["important", "Important"],
                              ["exploring", "Exploring"],
                            ] as const
                          ).map(([v, label]) => (
                            <div className="question__checkbox" key={v}>
                              <label>
                                <input
                                  type="radio"
                                  name="seo-aeo-geo-importance"
                                  value={v}
                                  checked={form.seoImportance === v}
                                  onChange={() => setField("seoImportance", v)}
                                />
                                {label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {form.useCases.includes("campaign-orchestration") && (
                      <div className="ROI__questions-box">
                        <div className="questions__heading">
                          {USE_CASES[4].icon} Campaign orchestration
                        </div>
                        <div className="step__form-group">
                          <label>Campaigns launched per quarter?</label>
                          <select
                            value={form.campaignVolume}
                            onChange={(e) => setField("campaignVolume", e.target.value)}
                          >
                            <option value="1-4">1-4 campaigns</option>
                            <option value="5-6">5-6 campaigns</option>
                            <option value="7+">7+ campaigns</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {form.useCases.includes("field-marketing") && (
                      <div className="ROI__questions-box">
                        <div className="questions__heading">
                          {USE_CASES[3].icon} Field marketing
                        </div>
                        <div className="step__form-group">
                          <label>Events executed per year?</label>
                          <select
                            value={form.fieldEvents}
                            onChange={(e) => setField("fieldEvents", e.target.value)}
                          >
                            <option value="<10">Less than 10</option>
                            <option value="10-25">10-25 events</option>
                            <option value="25-50">25-50 events</option>
                            <option value="50+">50+ events</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {form.useCases.includes("abm") && (
                      <div className="ROI__questions-box">
                        <div className="questions__heading">{USE_CASES[2].icon} Account-based marketing</div>
                        <div className="step__form-group">
                          <label>How many target accounts in your ABM program?</label>
                          <select
                            value={form.abmAccounts}
                            onChange={(e) => setField("abmAccounts", e.target.value)}
                          >
                            <option value="<25">Less than 25</option>
                            <option value="25-50">25-50 accounts</option>
                            <option value="50-100">50-100 accounts</option>
                            <option value="100+">100+ accounts</option>
                          </select>
                        </div>
                        <div className="step__form-group">
                          <label>What level of personalization?</label>
                          {(
                            [
                              ["1:1", "1:1 (Unique per account)"],
                              ["1:few", "1:Few (Segment-based)"],
                              ["mix", "Mix of approaches"],
                            ] as const
                          ).map(([v, label]) => (
                            <div className="question__checkbox" key={v}>
                              <label>
                                <input
                                  type="radio"
                                  name="abm-personalization"
                                  value={v}
                                  checked={form.abmPersonalization === v}
                                  onChange={() => setField("abmPersonalization", v)}
                                />
                                {label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {form.useCases.includes("brand-compliance") && (
                      <div className="ROI__questions-box">
                        <div className="questions__heading">{USE_CASES[5].icon} Brand compliance</div>
                        <div className="step__form-group">
                          <label>How regulated is your industry?</label>
                          {(
                            [
                              ["high", "Highly regulated"],
                              ["moderate", "Moderately regulated"],
                              ["light", "Lightly regulated"],
                            ] as const
                          ).map(([v, label]) => (
                            <div className="question__checkbox" key={v}>
                              <label>
                                <input
                                  type="radio"
                                  name="brand-compliance-regulation"
                                  value={v}
                                  checked={form.brandRegulation === v}
                                  onChange={() => setField("brandRegulation", v)}
                                />
                                {label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="step__form-button">
                    <button
                      className="ROI__btn previous"
                      type="button"
                      onClick={() => setStep(1)}
                    >
                      <ArrowLeft /> Back
                    </button>
                    {!revealed && (
                      <button className="ROI__btn ROI__btn-primary" type="submit">
                        Calculate my ROI <ArrowRight />
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className={`ROI__step-card${revealed ? "" : " hide"}`}>
              <div className="ROI__card-head">
                <h5>3-year net savings</h5>
                <div className="ROI__main-value">
                  {revealed && result ? formatSmart(result.totalSavings) : placeholders.total}
                </div>
                <span>Projected net benefit</span>
              </div>
              <div className="ROI__box-row">
                <div className="ROI__box-card">
                  <h3>{revealed && result ? `${result.roiPercent}%` : placeholders.roi}</h3>
                  <h5>ROI</h5>
                </div>
                <div className="ROI__box-card">
                  <h3>
                    {revealed && result
                      ? result.paybackPeriod.replace(/\s+/g, "")
                      : placeholders.payback}
                  </h3>
                  <h5>payback</h5>
                </div>
              </div>
              <div className="ROI__benefits-list">
                <h4>Benefits breakdown</h4>
                <ul>
                  {(
                    [
                      [
                        "Productivity gains",
                        "Time saved by automating repetitive marketing tasks and accelerating workflows with AI agents.",
                        revealed && result
                          ? formatSmart(result.breakdown.laborBenefit)
                          : placeholders.labor,
                      ],
                      [
                        "Marketing agency savings",
                        "Reduced reliance on external vendors by handling more marketing work in-house with AI agents.",
                        revealed && result
                          ? formatSmart(result.breakdown.agencyBenefit)
                          : placeholders.agency,
                      ],
                      [
                        "MarTech consolidation",
                        "Savings from replacing multiple point solutions with WRITER's unified AI platform for marketing.",
                        revealed && result
                          ? formatSmart(result.breakdown.softwareBenefit)
                          : placeholders.software,
                      ],
                      [
                        "Governance efficiencies",
                        "Risk reduction and efficiency gains from automated governance across all marketing outputs.",
                        revealed && result
                          ? formatSmart(result.breakdown.complianceBenefit)
                          : placeholders.compliance,
                      ],
                      [
                        "Capacity unlocked",
                        "Additional team bandwidth (in FTEs) redirected from manual tasks to high-value strategic work.",
                        revealed && result
                          ? `${result.capacityFTE} FTEs`
                          : placeholders.capacity,
                      ],
                    ] as const
                  ).map(([label, tip, value]) => (
                    <li key={label}>
                      <div className="ROI__tooltip-wrapper">
                        {label}
                        <div className="ROI__tooltip">
                          <div className="ROI__tooltip-text">{tip}</div>
                        </div>
                      </div>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ROI__btn-footer">
                <a
                  href="https://go.writer.com/ai-marketing-consultation/"
                  className={`ROI__btn consultation${revealed ? " ROI__btn-primary" : ""}`}
                >
                  Schedule a consultation
                </a>
                <p>
                  Results are estimates only based on industry benchmarks and information provided,
                  and may not reflect actual results. No specific results are promised or
                  guaranteed, and no specific actions are recommended or required.
                </p>
              </div>
            </div>
          </div>

          <div className="ROI__info-bottom">
            <p>
              Designed and built with{" "}
              <strong>
                <Link href="/product/writer-agent">WRITER Agent</Link>
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      <div className={`ROI__modal${modalOpen ? " show" : ""}`}>
        <div className="ROI__modal-overlay" onClick={() => setModalOpen(false)} />
        <div className="ROI__modal-box">
          <button
            type="button"
            className="ROI__modal-close"
            aria-label="Close"
            onClick={() => setModalOpen(false)}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M1 1L13 13M13 1L1 13" stroke="#000" strokeWidth="1.5" />
            </svg>
          </button>
          <h2>Unlock your results</h2>
          <form onSubmit={revealWithEmail}>
            <input
              type="email"
              placeholder="Work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p>
              By submitting, you agree to WRITER&apos;s{" "}
              <Link href="/legal/privacy">Privacy Policy</Link>.
            </p>
            <button type="submit" className="ROI__btn ROI__btn-primary">
              See my ROI
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
