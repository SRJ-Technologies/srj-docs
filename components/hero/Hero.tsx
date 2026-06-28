import Link from "next/link";
import { BRAND } from "@/lib/branding";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Welcome to
        </p>

        <h1 className="text-5xl font-extrabold text-slate-900 md:text-6xl">
          {BRAND.company}
        </h1>

        <p className="mt-6 text-xl text-slate-600">
          {BRAND.tagline}
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-500">
          {BRAND.slogan}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="rounded-xl bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            Explore Documentation
          </Link>

          <Link
            href="#"
            className="rounded-xl border border-slate-300 px-8 py-3 hover:bg-slate-100"
          >
            View Products
          </Link>
        </div>

      </div>
    </section>
  );
}