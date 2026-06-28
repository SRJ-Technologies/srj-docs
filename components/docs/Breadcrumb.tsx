import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 text-sm text-slate-500"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li
            key={item.label}
            className="flex items-center gap-2"
          >
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-blue-600"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-slate-700">
                {item.label}
              </span>
            )}

            {index < items.length - 1 && (
              <span>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}