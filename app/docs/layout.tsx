import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/docs/navigation/Sidebar";


interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({
  children,
}: DocsLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex max-w-7xl gap-10 px-6 py-10">
        <Sidebar />

        <section className="min-h-screen flex-1 rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
          {children}
        </section>
      </main>

      <Footer />
    </>
  );
}