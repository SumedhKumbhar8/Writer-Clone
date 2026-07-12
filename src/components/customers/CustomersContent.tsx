"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { CustomerStory } from "@/data/customers";
import { CustomerFilterBar } from "./CustomerFilterBar";
import { CustomerStoriesGrid } from "./CustomerStoriesGrid";

type FilterGroup = {
  label: string;
  options: readonly { label: string; value: string }[];
};

type SelectedFilters = {
  industry: string;
  department: string;
  useCase: string;
  feature: string;
};

const DEFAULT_FILTERS: SelectedFilters = {
  industry: "all",
  department: "all",
  useCase: "all",
  feature: "all",
};

const PARAM_KEYS = {
  industry: "industry",
  department: "department",
  useCase: "use-case",
  feature: "feature",
} as const;

function readFiltersFromParams(params: URLSearchParams): SelectedFilters {
  return {
    industry: params.get(PARAM_KEYS.industry) || "all",
    department: params.get(PARAM_KEYS.department) || "all",
    useCase: params.get(PARAM_KEYS.useCase) || "all",
    feature: params.get(PARAM_KEYS.feature) || "all",
  };
}

function matchesFilter(
  values: string[] | undefined,
  selected: string,
): boolean {
  if (selected === "all") return true;
  return (values || []).includes(selected);
}

type CustomersContentProps = {
  filters: Record<string, FilterGroup>;
  stories: CustomerStory[];
};

export function CustomersContent({ filters, stories }: CustomersContentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(() =>
    readFiltersFromParams(new URLSearchParams(searchParams.toString())),
  );

  useEffect(() => {
    setSelectedFilters(readFiltersFromParams(new URLSearchParams(searchParams.toString())));
  }, [searchParams]);

  const syncUrl = useCallback(
    (next: SelectedFilters) => {
      const params = new URLSearchParams();
      params.set(PARAM_KEYS.industry, next.industry);
      params.set(PARAM_KEYS.department, next.department);
      params.set(PARAM_KEYS.useCase, next.useCase);
      params.set(PARAM_KEYS.feature, next.feature);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router],
  );

  const selectOption = useCallback(
    (groupKey: string, value: string) => {
      setSelectedFilters((prev) => {
        const next = { ...prev, [groupKey]: value } as SelectedFilters;
        syncUrl(next);
        return next;
      });
    },
    [syncUrl],
  );

  const clearFilter = useCallback(
    (key: string) => {
      setSelectedFilters((prev) => {
        const next = { ...prev, [key]: "all" } as SelectedFilters;
        syncUrl(next);
        return next;
      });
    },
    [syncUrl],
  );

  const clearAll = useCallback(() => {
    setSelectedFilters(DEFAULT_FILTERS);
    syncUrl(DEFAULT_FILTERS);
  }, [syncUrl]);

  const filteredStories = useMemo(() => {
    return stories.filter(
      (story) =>
        matchesFilter(story.industry, selectedFilters.industry) &&
        matchesFilter(story.department, selectedFilters.department) &&
        matchesFilter(story.useCase, selectedFilters.useCase) &&
        matchesFilter(story.feature, selectedFilters.feature),
    );
  }, [stories, selectedFilters]);

  return (
    <div className="section-customers-content pb-[140px]">
      <CustomerFilterBar
        filters={filters}
        selectedFilters={selectedFilters}
        onSelect={selectOption}
        onClearFilter={clearFilter}
        onClearAll={clearAll}
      />
      <CustomerStoriesGrid stories={filteredStories} />
    </div>
  );
}
