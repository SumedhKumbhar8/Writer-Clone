import { estimateRoi, formatSmart } from "./roi-estimate";

// ponytail: one runnable check for non-trivial estimate logic
function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(msg);
}

const sample = estimateRoi({
  industry: "technology",
  revenue: 500_000_000,
  writerUsers: 50,
  aiMaturity: "active",
  agencySpend: 500_000,
  toolStackSize: "moderate",
  selectedUseCases: ["content-supply"],
});

assert(sample.totalSavings > 0, "totalSavings should be positive");
assert(sample.roiPercent > 0, "roiPercent should be positive");
assert(sample.breakdown.laborBenefit > 0, "laborBenefit expected");
assert(formatSmart(1_250_000) === "$1.25M", `formatSmart M got ${formatSmart(1_250_000)}`);
assert(formatSmart(45_000) === "$45K", `formatSmart K got ${formatSmart(45_000)}`);

console.log("roi-estimate ok", {
  totalSavings: formatSmart(sample.totalSavings),
  roi: `${sample.roiPercent}%`,
  payback: sample.paybackPeriod,
});
