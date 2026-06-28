import Link from "next/link";

interface PrevNextProps {
  previous?: {
    title: string;
    href: string;
  };

  next?: {
    title: string;
    href: string;
  };
}

export default function PrevNext({
  previous,
  next,
}: PrevNextProps) {
  return (
    <div className="mt-16 flex justify-between border-t border-slate-200 pt-8">
      <div>
        {previous && (
          <Link
            href={previous.href}
            className="text-blue-600 hover:underline"
          >
            ← {previous.title}
          </Link>
        )}
      </div>

      <div>
        {next && (
          <Link
            href={next.href}
            className="text-blue-600 hover:underline"
          >
            {next.title} →
          </Link>
        )}
      </div>
    </div>
  );
}