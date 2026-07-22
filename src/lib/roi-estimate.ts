/** Local ROI estimate — mirrors writer.com response shape for UI.
 * ponytail: approximate formula; swap for writer API if nonce/CORS available */
export type RoiResult = {
  totalSavings: number;
  roiPercent: number;
  paybackPeriod: string;
  breakdown: {
    laborBenefit: number;
    agencyBenefit: number;
    softwareBenefit: number;
    complianceBenefit: number;
  };
  capacityFTE: number;
};

const MATURITY: Record<string, number> = {
  early: 0.75,
  active: 1,
  advanced: 1.2,
};

const TOOLS: Record<string, number> = {
  minimal: 30000,
  moderate: 60000,
  extensive: 105000,
  complex: 150000,
};

const INDUSTRY_COMPLIANCE: Record<string, number> = {
  financial: 180000,
  healthcare: 200000,
  technology: 0,
  retail: 40000,
  manufacturing: 30000,
  professional: 20000,
  media: 15000,
  other: 25000,
};

const USE_CASE_WEIGHT: Record<string, number> = {
  "content-supply": 1.15,
  "seo-aeo-geo": 1.05,
  abm: 1.1,
  "field-marketing": 1.05,
  "campaign-orchestration": 1.12,
  "brand-compliance": 1.08,
};

export function estimateRoi(input: {
  industry: string;
  revenue: number;
  writerUsers: number;
  aiMaturity: string;
  agencySpend: number;
  toolStackSize: string;
  selectedUseCases: string[];
}): RoiResult {
  const maturity = MATURITY[input.aiMaturity] ?? 1;
  const caseMult =
    input.selectedUseCases.reduce(
      (acc, id) => acc * (USE_CASE_WEIGHT[id] ?? 1),
      1,
    ) || 1;
  const caseBoost = Math.min(1.45, caseMult);

  // ~8 hrs/week × $75 × 50 weeks × 3 yrs × adoption, with AI-tax
  const laborBenefit = Math.round(
    input.writerUsers * 8 * 75 * 50 * 3 * 0.55 * maturity * caseBoost * 0.85,
  );

  const agencyBenefit = Math.round(
    input.agencySpend * 0.4 * 1.265625 * maturity,
  );

  const softwareBenefit = Math.round(
    (TOOLS[input.toolStackSize] ?? 60000) * 2.3625 * maturity,
  );

  const complianceBase = INDUSTRY_COMPLIANCE[input.industry] ?? 25000;
  const complianceBenefit = input.selectedUseCases.includes("brand-compliance")
    ? Math.round(complianceBase * maturity)
    : Math.round(complianceBase * 0.15 * maturity);

  const grossBenefits =
    laborBenefit + agencyBenefit + softwareBenefit + complianceBenefit;

  // Platform cost scales with seats (aligned to ~$450K–$2M 3yr ranges in blog)
  const seatCost = Math.min(600000, Math.max(80000, input.writerUsers * 2800));
  const totalCost = Math.round(seatCost * 3 * 0.95 + 80000);
  const totalSavings = Math.max(0, Math.round(grossBenefits - totalCost));
  const roiPercent = totalCost > 0 ? Math.round((totalSavings / totalCost) * 100) : 0;

  const monthlyBenefit = grossBenefits / 36;
  const monthlyCost = totalCost / 36;
  const netMonthly = monthlyBenefit - monthlyCost;
  const paybackMonths =
    netMonthly > 0 ? Math.max(3, Math.min(24, Math.round(totalCost / (monthlyBenefit || 1)))) : 24;

  const capacityFTE = Math.round(input.writerUsers * 0.058 * maturity * 10) / 10;

  return {
    totalSavings,
    roiPercent,
    paybackPeriod: `${paybackMonths} mo`,
    breakdown: {
      laborBenefit,
      agencyBenefit,
      softwareBenefit,
      complianceBenefit,
    },
    capacityFTE,
  };
}

export function formatSmart(value: number): string {
  const num = parseFloat(String(value)) || 0;
  const absNum = Math.abs(num);
  const sign = num < 0 ? "-" : "";
  if (absNum >= 1_000_000) return `${sign}$${(absNum / 1_000_000).toFixed(2)}M`;
  if (absNum >= 1_000) return `${sign}$${(absNum / 1_000).toFixed(0)}K`;
  return `${sign}$${absNum.toFixed(0)}`;
}
