import ChapterCard from "@/components/docs/ChapterCard";
import Link from "next/link";
import PageHeader from "@/components/docs/PageHeader";
import { volume01Chapters } from "@/data/volume-01";

export default function Volume01Page() {
  return (
    <>
      <PageHeader
        eyebrow="Developer Handbook"
        title="Volume 01 – Foundation"
        description="Core engineering principles, architecture and development standards of the SRJ Platform."
      />

      <div className="grid gap-4">
        {volume01Chapters.map((chapter) => (

    <ChapterCard
      key={chapter.number}
      number={chapter.number}
      title={chapter.title}
      href={chapter.href}
      available={chapter.available}
    />

))}
      </div>
    </>
  );
}