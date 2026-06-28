import VolumeCard from "@/components/docs/VolumeCard";
import { handbookVolumes } from "@/data/handbook";

export default function HandbookPage() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Developer Handbook
      </p>

      <h1 className="mt-3 text-5xl font-bold">
        SRJ Platform Developer Handbook
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Official engineering handbook for all SRJ Platform projects.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {handbookVolumes.map((volume) => (
          <VolumeCard
            key={volume.id}
            {...volume}
          />
        ))}
      </div>
    </>
  );
}