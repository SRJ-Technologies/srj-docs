import PageHeader from "@/components/docs/PageHeader";
import DocSection from "@/components/docs/DocSection";
import Callout from "@/components/docs/Callout";
import PrevNext from "@/components/docs/PrevNext";

export default function WelcomePage() {
  return (
    <>
      <PageHeader
        eyebrow="Developer Handbook • Volume 01"
        title="Welcome to SRJ Technologies"
        description="Welcome to the official engineering handbook of the SRJ Platform. This documentation explains how we design, build, test and maintain enterprise software."
      />

      <DocSection title="Purpose">
        <p>
          The Developer Handbook is the single source of truth for engineering
          standards at SRJ Technologies.
        </p>

        <p>
          Every developer, designer and contributor is expected to follow the
          architecture, coding standards and workflows described in this
          handbook.
        </p>
      </DocSection>

      <Callout>
        <strong>Engineering Principle</strong>
        <br />
        Documentation is written before or alongside implementation, not after
        the project is completed.
      </Callout>

      <DocSection title="Objectives">
        <ul className="list-disc space-y-3 pl-6">
          <li>Create consistent engineering standards.</li>
          <li>Reduce onboarding time for new developers.</li>
          <li>Maintain a scalable and well-documented platform.</li>
          <li>Ensure every module follows the same architecture.</li>
        </ul>
      </DocSection>

      <DocSection title="What You Will Learn">
        <ul className="list-disc space-y-3 pl-6">
          <li>SRJ Platform architecture</li>
          <li>Repository organization</li>
          <li>Coding standards</li>
          <li>Git workflow</li>
          <li>Deployment pipeline</li>
          <li>Engineering best practices</li>
        </ul>
      </DocSection>

      <PrevNext
        next={{
          title: "Vision & Mission",
          href: "/docs/handbook/vision",
        }}
      />
    </>
  );
}