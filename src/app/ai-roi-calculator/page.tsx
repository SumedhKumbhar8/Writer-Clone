import Link from "next/link";
import {
  RoiCalculator,
  RoiHeader,
} from "@/components/roi-calculator/RoiCalculator";
import { RoiArticle } from "@/components/roi-calculator/RoiArticle";
import { RoiFaqs } from "@/components/roi-calculator/RoiFaqs";
import { createPageMetadata } from "@/lib/seo";
import "@/styles/roi-calculator.css";

export const metadata = createPageMetadata({
  title: "Marketing AI ROI calculator | Prove value to your CFO in 5 minutes",
  description:
    "Calculate the true return on investment (ROI) for your marketing AI tools with this comprehensive calculator and guide.",
  path: "/ai-roi-calculator",
});

export default function AiRoiCalculatorPage() {
  return (
    <div className="roi-page">
      <RoiHeader />
      <section className="ROI__hero-section">
        <div className="ROI__hero-content">
          <h1>Marketing AI ROI calculator</h1>
          <p>
            Get an instant, personalized ROI calculation and see how WRITER
            transforms marketing workflows with agentic AI.
          </p>
        </div>
      </section>

      <RoiCalculator />
      <RoiArticle />
      <RoiFaqs />

      <div className="section-bottom-cta-fs section-pt-sm section-pb-sm">
        <div className="container-default-sm">
          <h2 className="mx-auto px-0 text-center">
            Transform marketing workflows with agentic AI
          </h2>
          <div className="mt-8">
            <div className="wpm-btns-row">
              <Link
                href="#ROI__steps-section"
                className="dc-btn dc-btn_outline-secondary"
              >
                See my calculation
              </Link>
              <a
                href="https://go.writer.com/ai-marketing-consultation"
                className="dc-btn dc-btn_secondary"
              >
                Schedule a consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
