import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/branding";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={BRAND.logo}
            alt={BRAND.company}
            width={48}
            height={48}
            priority
          />

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              {BRAND.company}
            </h1>

            <p className="text-xs text-slate-500">
              {BRAND.tagline}
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="#" className="hover:text-blue-600">
            Products
          </Link>

          <Link href="#" className="hover:text-blue-600">
            Documentation
          </Link>

          <Link href="#" className="hover:text-blue-600">
            Downloads
          </Link>
        </nav>

        {/* Button */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          Get Started
        </button>

      </div>
    </header>
  );
}