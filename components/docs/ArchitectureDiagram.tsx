export default function ArchitectureDiagram() {
  const layers = [
    {
      title: "Presentation Layer",
      items: [
        "Website",
        "Documentation",
        "ERP Portal",
        "Student Portal",
        "Parent Portal",
        "Mobile Apps",
      ],
    },
    {
      title: "Application Layer",
      items: [
        "Admissions",
        "Academics",
        "Finance",
        "HRMS",
        "Library",
        "Transport",
        "LMS",
        "CRM",
      ],
    },
    {
      title: "Core Services",
      items: [
        "Authentication",
        "Authorization",
        "Notifications",
        "Storage",
        "REST APIs",
        "AI Services",
      ],
    },
    {
      title: "Infrastructure",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "GitHub",
        "Vercel",
      ],
    },
  ];

  return (
    <div className="my-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="mb-8 text-center text-3xl font-bold text-slate-900">
        SRJ Platform Architecture
      </h3>

      <div className="mx-auto mb-6 flex h-16 w-64 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
        SRJ Platform
      </div>

      <div className="mx-auto mb-8 h-10 w-1 bg-blue-300" />

      <div className="space-y-8">
        {layers.map((layer) => (
          <div
            key={layer.title}
            className="rounded-xl border border-slate-200 p-6"
          >
            <h4 className="mb-4 text-xl font-semibold text-blue-700">
              {layer.title}
            </h4>

            <div className="flex flex-wrap gap-3">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}