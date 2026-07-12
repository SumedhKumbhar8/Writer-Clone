"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type FilterOption = {
  label: string;
  value: string;
};

type FilterGroup = {
  label: string;
  options: readonly FilterOption[];
};

type SelectedFilters = Record<string, string>;

type CustomerFilterBarProps = {
  filters: Record<string, FilterGroup>;
  selectedFilters: SelectedFilters;
  onSelect: (groupKey: string, value: string) => void;
  onClearFilter: (key: string) => void;
  onClearAll: () => void;
};

export function CustomerFilterBar({
  filters,
  selectedFilters,
  onSelect,
  onClearFilter,
  onClearAll,
}: CustomerFilterBarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-75px 0px 0px 0px" },
    );

    const sentinel = document.createElement("div");
    sentinel.style.position = "absolute";
    sentinel.style.top = "0";
    sentinel.style.height = "1px";
    sentinel.style.width = "1px";
    sectionRef.current?.parentElement?.insertBefore(
      sentinel,
      sectionRef.current,
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  const toggleDropdown = useCallback((key: string) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  }, []);

  const hasActiveFilters = Object.values(selectedFilters).some(
    (v) => v !== "all",
  );

  const filterEntries = Object.entries(filters);

  const getSelectedLabel = (key: string) => {
    const group = filters[key];
    if (!group) return "";
    const option = group.options.find((o) => o.value === selectedFilters[key]);
    return option?.label || "All";
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".filter-dropdown-wrap")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`customers-filters-anchor ${isSticky ? "customers-filters-anchor--stuck" : ""}`}
    >
      <div
        className={`customers-filters sticky top-[75px] z-20 w-full py-4 transition-shadow ${
          isSticky ? "shadow-sm" : ""
        }`}
        style={{
          background: hasActiveFilters
            ? "#fff"
            : "linear-gradient(180deg, #FFF 77.42%, rgba(255,255,255,0) 100%)",
        }}
      >
        <div className="mx-auto max-w-[1080px] px-[15px]">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-midnight-graphite">
              Filter by
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="lg:hidden"
              aria-hidden
            >
              <rect x="1" y="3" width="14" height="2" rx="1" fill="#000" />
              <rect x="1" y="7" width="14" height="2" rx="1" fill="#000" />
              <rect x="1" y="11" width="14" height="2" rx="1" fill="#000" />
            </svg>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {filterEntries.map(([key, group]) => (
              <div key={key} className="filter-dropdown-wrap relative">
                <button
                  type="button"
                  onClick={() => toggleDropdown(key)}
                  suppressHydrationWarning
                className={`flex min-w-[143px] items-center gap-2.5 rounded-xl border px-5 py-[15px] text-left text-[20px] font-medium leading-none text-midnight-graphite transition-all ${
                    activeDropdown === key
                      ? "border-cloud-white bg-[#E4E7ED]"
                      : "border-[#D2D4D7] bg-canvas-white hover:border-cloud-white hover:bg-[#E4E7ED]"
                  }`}
                >
                  <span className="flex-1">{group.label}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transition-transform ${
                      activeDropdown === key ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    <path
                      d="M3 5L6 8L9 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <ul
                  className={`absolute left-0 top-full z-30 mt-1 max-h-[280px] w-[227px] overflow-y-auto rounded-lg border border-[#EFF0F2] bg-canvas-white p-1 transition-all ${
                    activeDropdown === key
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                  style={{ boxShadow: "0 1px 8px 0 rgba(191,203,255,0.25)" }}
                >
                  {group.options.map((option) => (
                    <li key={option.value}>
                      <button
                        type="button"
                        onClick={() => {
                          onSelect(key, option.value);
                          setActiveDropdown(null);
                        }}
                        suppressHydrationWarning
                        className={`flex h-8 w-full cursor-pointer items-center gap-2 rounded px-2 text-left text-[12px] leading-none text-midnight-graphite transition-colors hover:bg-[#E4E7ED] ${
                          selectedFilters[key] === option.value
                            ? "bg-[#E4E9FF]"
                            : ""
                        }`}
                      >
                        {selectedFilters[key] === option.value ? (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M2.5 6L5 8.5L9.5 3.5"
                              stroke="#5551FF"
                              strokeWidth="1.5"
                            />
                          </svg>
                        ) : (
                          <span className="w-3" />
                        )}
                        <span>{option.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-wrap items-center gap-2">
              {filterEntries.map(([key]) => {
                if (selectedFilters[key] === "all") return null;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => onClearFilter(key)}
                    className="flex items-center gap-1.5 rounded-[40px] bg-[#F5F5F9] px-3 py-2.5 text-[14px] font-medium leading-[1.1] text-midnight-graphite transition-colors hover:bg-cloud-white"
                    suppressHydrationWarning
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path
                        d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                    </svg>
                    {getSelectedLabel(key)}
                  </button>
                );
              })}
              {hasActiveFilters ? (
                <button
                  type="button"
                  onClick={onClearAll}
                  className="text-[11px] font-medium text-midnight-graphite underline underline-offset-2 transition-colors hover:text-action-blue"
                  suppressHydrationWarning
                >
                  Clear all filters
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
