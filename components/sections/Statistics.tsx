import { statistics } from "@/data/statistics";

export default function Statistics() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Trusted Platform
          </h2>

          <p className="mt-4 text-slate-600">
            Building next-generation software solutions for educational
            institutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-5xl font-extrabold text-blue-600">
                {item.value}
              </h3>

              <p className="mt-4 text-lg font-medium text-slate-700">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}