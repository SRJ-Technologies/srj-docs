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
        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold">
            Developer Handbook
          </h2>

          <p className="mt-3 text-slate-600">
            Learn the development workflow, architecture and standards.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6">
          <h2 className="text-2xl font-bold">
            Repository Architecture
          </h2>

          <p className="mt-3 text-slate-600">
            Understand the project structure and engineering principles.
          </p>
        </div>
      </div>
    </>
  );
}