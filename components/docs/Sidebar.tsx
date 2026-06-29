"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { documentationNavigation } from "@/data/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-20 h-fit w-72 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-bold text-slate-900">
        Documentation
      </h2>

      <nav className="space-y-2">
        {documentationNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-4 py-3 transition ${
  pathname === item.href
    ? "bg-blue-600 text-white font-semibold"
    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
}`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}