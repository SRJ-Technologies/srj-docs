import Link from "next/link";
import { BRAND } from "@/lib/branding";
import { footer } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

        {/* Company */}
        <div>
          <h3 className="text-2xl font-bold">
            {BRAND.company}
          </h3>

          <p className="mt-4 text-slate-400">
            {BRAND.tagline}
          </p>

          <p className="mt-6 text-sm text-slate-500">
            {BRAND.website}
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="mb-4 font-semibold">Company</h4>

          <ul className="space-y-3">
            {footer.company.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="mb-4 font-semibold">Resources</h4>

          <ul className="space-y-3">
            {footer.resources.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-4 font-semibold">Legal</h4>

          <ul className="space-y-3">
            {footer.legal.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-slate-400 hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © 2026 {BRAND.company}. All rights reserved.
      </div>
    </footer>
  );
}