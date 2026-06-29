"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationItemProps = {
  title: string;
  href: string;
  available?: boolean;
  level?: number;
   hasChildren?: boolean;
};

export default function NavigationItem({
  title,
  href,
  available = true,
  level = 0,
  hasChildren = false,
}: NavigationItemProps) {

  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={available ? href : "#"}
      className={`
flex items-center justify-between rounded-lg px-3 py-2 text-sm transition

${
  isActive
    ? "bg-blue-600 text-white shadow"
    : available
      ? "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
      : "cursor-not-allowed text-slate-400"
}
`}
      style={{
        paddingLeft: `${level * 16 + 12}px`,
      }}
    >
      <span
  className={
    hasChildren
      ? "font-semibold text-slate-900"
      : ""
  }
>
  {title}
</span>

      {available ? (
        <span
  className={`
rounded-full px-2 py-0.5 text-xs font-medium

${
  isActive
    ? "bg-white text-blue-600"
    : available
      ? "bg-green-100 text-green-700"
      : "bg-slate-100 text-slate-500"
}
`}
>
  {available ? "✓" : "Soon"}
</span>
      ) : (
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
          Soon
        </span>
      )}
    </Link>
  );
}