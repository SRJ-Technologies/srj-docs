import Link from "next/link";

interface ChapterCardProps {
  number: number;
  title: string;
  href: string;
  available: boolean;
}

export default function ChapterCard({
  number,
  title,
  href,
  available,
}: ChapterCardProps) {
  return (
    <Link
      href={href}
      className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-600 hover:bg-blue-50"
    >
      <span className="text-sm text-slate-500">
        Chapter {number}
      </span>

      <h2 className="mt-2 text-xl font-semibold">
        {title}
      </h2>

      <div className="mt-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            available
              ? "bg-green-100 text-green-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {available ? "Available" : "Coming Soon"}
        </span>
      </div>
    </Link>
  );
}