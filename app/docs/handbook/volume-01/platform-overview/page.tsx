import Breadcrumb from "@/components/docs/Breadcrumb";
import PageHeader from "@/components/docs/PageHeader";
import DocSection from "@/components/docs/DocSection";
import Callout from "@/components/docs/Callout";
import PrevNext from "@/components/docs/PrevNext";
import DocMeta from "@/components/docs/DocMeta";
import ArchitectureDiagram from "@/components/docs/ArchitectureDiagram";

export default function PlatformOverviewPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Documentation", href: "/docs" },
          { label: "Developer Handbook", href: "/docs/handbook" },
          { label: "Volume 01", href: "/docs/handbook/volume-01" },
          { label: "Platform Overview" },
        ]}
      />

      <PageHeader
        eyebrow="Developer Handbook • Volume 01"
        title="Platform Overview"
        description="A high-level overview of the SRJ Platform architecture and the relationship between its major systems."
      />

      <DocSection title="Overview">
        <p>
          The SRJ Platform is designed as a unified ecosystem rather than a
          collection of independent applications. Every product shares common
          engineering standards, authentication, infrastructure, and
          development practices.
        </p>
      </DocSection>

      <ArchitectureDiagram />

      <DocSection title="Application Layer">
        <p>
          Business functionality is divided into independent modules that share
          the same architecture and engineering standards.
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Admissions</li>
          <li>Academics</li>
          <li>Finance</li>
          <li>Human Resource Management</li>
          <li>Library</li>
          <li>Transport</li>
          <li>Hostel</li>
          <li>Learning Management System</li>
          <li>Customer Relationship Management</li>
        </ul>
      </DocSection>

      <DocSection title="Core Services">
        <p>
          Shared platform services remove duplication and provide a consistent
          experience across every module.
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Authentication</li>
          <li>Authorization</li>
          <li>Notifications</li>
          <li>File Storage</li>
          <li>REST APIs</li>
          <li>Reporting</li>
          <li>AI Services</li>
          <li>Audit Logs</li>
        </ul>
      </DocSection>

      <DocSection title="Infrastructure">
        <p>
          The SRJ Platform is built on modern cloud-native technologies that
          ensure scalability, security, and maintainability.
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Next.js</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Supabase</li>
          <li>PostgreSQL</li>
          <li>GitHub</li>
          <li>Vercel</li>
          <li>CI/CD Pipeline</li>
        </ul>
      </DocSection>

      <Callout>
        <strong>Platform Principle</strong>
        <br />
        Every new module must integrate into the shared SRJ Platform
        architecture instead of creating isolated systems.
      </Callout>

      <PrevNext
        previous={{
          title: "Vision & Mission",
          href: "/docs/handbook/volume-01/vision",
        }}
        next={{
          title: "Technology Stack",
          href: "/docs/handbook/volume-01/technology-stack",
        }}
      />

      <DocMeta
        version="v1.0"
        updated="29 June 2026"
        readingTime="6 min"
      />
    </>
  );
}