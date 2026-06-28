import Link from "next/link";
import { documentation } from "@/data/documentation";

export default function DocumentationHub() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Documentation
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Documentation Hub
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            Everything you need to build, deploy and maintain the SRJ Platform.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {documentation.map((doc) => (
            <Link
              key={doc.title}
              href={doc.href}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-blue-600 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {doc.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {doc.description}
              </p>

              <span className="mt-6 inline-block font-medium text-blue-600">
                Open Documentation →
              </span>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}