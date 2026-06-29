import VolumeCard from "@/components/docs/VolumeCard";
import PageHeader from "@/components/docs/PageHeader";
import { handbookVolumes } from "@/data/handbook";

export default function HandbookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Documentation"
        title="Developer Handbook"
        description="Official engineering handbook for SRJ Platform development."
      />

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