import { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
}

export default function Callout({
  children,
}: CalloutProps) {
  return (
    <div className="my-8 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
      <div className="leading-7 text-slate-700">
        {children}
      </div>
    </div>
  );
}