import { features } from "@/data/features";

export default function WhySRJ() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Why SRJ Technologies?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            We build scalable, secure and future-ready software platforms
            designed for educational institutions and enterprises.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}