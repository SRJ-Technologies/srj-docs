import Link from "next/link";

const products = [
  {
    title: "SRJ ERP",
    description: "Complete School, College & Institute Management System",
    href: "#",
  },
  {
    title: "SRJ LMS",
    description: "Learning Management System for Digital Education",
    href: "#",
  },
  {
    title: "SRJ Website",
    description: "Professional Website Builder for Educational Institutes",
    href: "#",
  },
  {
    title: "SRJ Mobile",
    description: "Mobile Apps for Students, Parents & Teachers",
    href: "#",
  },
  {
    title: "SRJ HRMS",
    description: "Employee & Payroll Management Solution",
    href: "#",
  },
  {
    title: "SRJ CRM",
    description: "Lead, Admission & Relationship Management",
    href: "#",
  },
];

export default function Products() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Products
          </p>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Complete Software Ecosystem
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-slate-600">
            SRJ Technologies develops modern software solutions for
            educational institutions, businesses and organizations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {product.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {product.description}
              </p>

              <span className="mt-6 inline-block font-medium text-blue-600">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}