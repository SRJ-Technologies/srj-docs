"use client";

type SearchBoxProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBox({
  value,
  onChange,
}: SearchBoxProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="🔍 Search documentation..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
}