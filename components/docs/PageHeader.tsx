interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="mb-12 border-b border-slate-200 pb-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        {eyebrow}
      </p>

      <h1 className="mt-3 text-5xl font-bold tracking-tight text-slate-900">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        {description}
      </p>
    </header>
  );
}