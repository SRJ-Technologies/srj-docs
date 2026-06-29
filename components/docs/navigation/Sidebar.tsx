"use client";

import { useMemo, useState } from "react";
import NavigationGroup from "./NavigationGroup";
import SearchBox from "./SearchBox";
import { documentationNavigation } from "@/data/navigation";

export default function Sidebar() {
  const [search, setSearch] = useState("");

  const filteredNavigation = useMemo(() => {
    if (!search.trim()) {
      return documentationNavigation;
    }

    const filterItems = (
      items: typeof documentationNavigation
    ): typeof documentationNavigation =>
      items
        .map((item) => ({
          ...item,
          children: item.children
            ? filterItems(item.children)
            : undefined,
        }))
        .filter(
          (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            (item.children && item.children.length > 0)
        );

    return filterItems(documentationNavigation);
  }, [search]);

  return (
    <aside className="sticky top-20 h-fit w-72 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-bold text-slate-900">
        📘 Documentation
      </h2>

      <SearchBox
        value={search}
        onChange={setSearch}
      />

      <NavigationGroup
        items={filteredNavigation}
      />

      <div className="mt-8 border-t border-slate-200 pt-6">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Documentation
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-900">
          Version 0.3.0
        </p>

        <p className="mt-2 text-xs text-slate-500">
          Last Updated
        </p>

        <p className="text-xs font-medium text-slate-700">
          June 2026
        </p>
      </div>
    </aside>
  );
}