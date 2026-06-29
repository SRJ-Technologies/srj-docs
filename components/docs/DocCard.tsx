import Link from "next/link";

type DocCardProps = {
  title: string;
  description: string;
  href?: string;
  available?: boolean;
};

export default function DocCard({
  title,
  description,
  href = "#",
  available = true,
}: DocCardProps) {
  return (
    <Link
      href={available ? href : "#"}
      className={`block rounded-2xl border p-6 transition ${
        available
          ? "border-slate-200 hover:border-blue-500 hover:shadow-lg"
          : "border-slate-200 opacity-70 cursor-default"
      }`}
    >
      <h2 className="text-2xl font-bold">{title}</h2>

      <p className="mt-3 text-slate-600">
        {description}
      </p>

      <div className="mt-6 font-semibold text-blue-600">
        {available ? "Open →" : "Coming Soon"}
      </div>
    </Link>
  );
}