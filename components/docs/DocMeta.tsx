interface DocMetaProps {
  version: string;
  updated: string;
  readingTime: string;
}

export default function DocMeta({
  version,
  updated,
  readingTime,
}: DocMetaProps) {
  return (
    <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase text-slate-500">
            Version
          </p>

          <p className="mt-1 font-semibold">
            {version}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase text-slate-500">
            Last Updated
          </p>

          <p className="mt-1 font-semibold">
            {updated}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase text-slate-500">
            Reading Time
          </p>

          <p className="mt-1 font-semibold">
            {readingTime}
          </p>
        </div>
      </div>
    </div>
  );
}