import Breadcrumb from "@/components/docs/Breadcrumb";
import PageHeader from "@/components/docs/PageHeader";
import DocSection from "@/components/docs/DocSection";
import Callout from "@/components/docs/Callout";
import PrevNext from "@/components/docs/PrevNext";
import DocMeta from "@/components/docs/DocMeta";

export default function VisionPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Documentation", href: "/docs" },
          { label: "Developer Handbook", href: "/docs/handbook" },
          { label: "Volume 01", href: "/docs/handbook/volume-01" },
          { label: "Vision & Mission" },
        ]}
      />

      <PageHeader
        eyebrow="Developer Handbook • Volume 01"
        title="Vision & Mission"
        description="The engineering vision, mission, and core principles that guide every SRJ Technologies product."
      />

      <DocSection title="Our Vision">
        <p>
          To build reliable, scalable, and intelligent digital platforms that
          simplify education, administration, and organizational management
          through modern technology.
        </p>

        <p>
          We aim to create software that remains useful, maintainable, and
          valuable for many years.
        </p>
      </DocSection>

      <DocSection title="Our Mission">
        <ul className="list-disc space-y-2 pl-6">
          <li>Build enterprise-grade software.</li>
          <li>Keep documentation as the single source of truth.</li>
          <li>Deliver secure and maintainable solutions.</li>
          <li>Automate repetitive work wherever possible.</li>
          <li>Create products designed for long-term scalability.</li>
        </ul>
      </DocSection>

      <Callout>
        <strong>Engineering Philosophy</strong>
        <br />
        Great software is not built by writing more code. It is built by making
        better engineering decisions.
      </Callout>

      <DocSection title="Engineering Principles">
        <ol className="list-decimal space-y-2 pl-6">
          <li>Documentation First</li>
          <li>Architecture Before Coding</li>
          <li>Reusability Over Duplication</li>
          <li>Security by Design</li>
          <li>Performance by Default</li>
          <li>Quality Before Quantity</li>
          <li>Continuous Improvement</li>
          <li>Simplicity in Design</li>
          <li>Automation Wherever Possible</li>
          <li>User-Centric Development</li>
        </ol>
      </DocSection>

      <PrevNext
        previous={{
          title: "Welcome",
          href: "/docs/handbook/volume-01/welcome",
        }}
        next={{
          title: "Platform Overview",
          href: "/docs/handbook/volume-01/platform-overview",
        }}
      />

      <DocMeta
        version="v1.0"
        updated="29 June 2026"
        readingTime="5 min"
      />
    </>
  );
}