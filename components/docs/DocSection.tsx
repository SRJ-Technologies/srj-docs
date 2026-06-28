import { ReactNode } from "react";

interface DocSectionProps {
  title: string;
  children: ReactNode;
}

export default function DocSection({
  title,
  children,
}: DocSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-3xl font-bold text-slate-900">
        {title}
      </h2>

      <div className="space-y-5 leading-8 text-slate-700">
        {children}
      </div>
    </section>
  );
}