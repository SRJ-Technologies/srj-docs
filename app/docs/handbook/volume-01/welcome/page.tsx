import Breadcrumb from "@/components/docs/Breadcrumb";
import PageHeader from "@/components/docs/PageHeader";
import DocSection from "@/components/docs/DocSection";
import Callout from "@/components/docs/Callout";
import PrevNext from "@/components/docs/PrevNext";
import DocMeta from "@/components/docs/DocMeta";

export default function WelcomePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Documentation", href: "/docs" },
          { label: "Developer Handbook", href: "/docs/handbook" },
          { label: "Volume 01", href: "/docs/handbook/volume-01" },
          { label: "Welcome" },
        ]}
      />

      <PageHeader
        eyebrow="Developer Handbook • Volume 01"
        title="Welcome to SRJ Technologies"
        description="Welcome to the official engineering handbook of the SRJ Platform."
      />

      <DocSection title="Purpose">
        <p>
          The Developer Handbook is the official engineering guide for every
          SRJ Technologies project.
        </p>

        <p>
          It defines how we plan, design, develop, test, deploy and maintain
          enterprise software.
        </p>
      </DocSection>

      <Callout>
        <strong>Engineering Principle</strong>
        <br />
        Documentation is written before or alongside implementation—not after
        the software is completed.
      </Callout>

      <DocSection title="Objectives">
        <ul className="list-disc pl-6 space-y-2">
          <li>Create consistent engineering standards.</li>
          <li>Reduce onboarding time for new developers.</li>
          <li>Build scalable and maintainable software.</li>
          <li>Keep documentation as the single source of truth.</li>
        </ul>
      </DocSection>

      <PrevNext
        next={{
          title: "Vision & Mission",
          href: "/docs/handbook/volume-01/vision",
        }}
      />

      <DocMeta
        version="v1.0"
        updated="28 June 2026"
        readingTime="3 min"
      />
    </>
  );
}