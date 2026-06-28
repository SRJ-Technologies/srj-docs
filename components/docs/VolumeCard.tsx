import Link from "next/link";

interface VolumeCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  status: string;
}

export default function VolumeCard({
  title,
  subtitle,
  description,
  href,
  status,
}: VolumeCardProps) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
        {status}
      </span>

      <h2 className="mt-4 text-2xl font-bold">
        {title}
      </h2>

      <h3 className="mt-2 text-lg text-blue-600">
        {subtitle}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </Link>
  );
}