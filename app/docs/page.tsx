import Link from "next/link";
import DocCard from "@/components/docs/DocCard";

export default function DocsHome() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Documentation
      </p>

      <h1 className="mt-3 text-5xl font-bold text-slate-900">
        Welcome to SRJ Documentation
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        This documentation provides everything required to understand,
        develop, deploy and maintain the SRJ Platform.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
  <DocCard
    title="Developer Handbook"
    description="Official engineering handbook for SRJ Platform development."
    href="/docs/handbook"
  />

  <DocCard
    title="Repository Architecture"
    description="Project structure and engineering principles."
    available={false}
  />

  <DocCard
    title="Database Design"
    description="Database schema and relationships."
    available={false}
  />

  <DocCard
    title="Core Modules"
    description="ERP modules and business workflows."
    available={false}
  />
</div>
      
    </>
  );
}