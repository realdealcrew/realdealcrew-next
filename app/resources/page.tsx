import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Podcasts, YouTube videos, and tactical content on real estate operations, deal flow, and automation for serious investors.",
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <Section style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <span className="label-pill mb-6 inline-flex">Resources</span>
        <h1 className="heading-xl mb-6 max-w-3xl">
          Learn, Grow, Scale.
        </h1>
        <p
          className="text-lg max-w-xl leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Tactical conversations on real estate operations, deal flow,
          automation, and scalable investor systems.
        </p>
      </Section>

      <hr className="hr-subtle" />

      {/* Assessment CTA */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="heading-md mb-2">
              Know where your operation stands before you read further.
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              The Deal Intake Assessment takes 3 minutes and tells you which
              operational band you're in — and what that means for your deal
              flow.
            </p>
          </div>
          <Button href="/assessment" variant="primary" size="md">
            Take the Assessment
          </Button>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Tabbed content: YouTube + Podcast */}
      <Section>
        <ResourcesClient />
      </Section>

      <hr className="hr-subtle" />

      {/* CTA */}
      <Section>
        <div className="max-w-xl">
          <h2 className="heading-lg mb-4">
            Ready to improve your deal operations?
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            If you want help applying these systems to your business, let's see
            if Fractional Deal Operations are a fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/book" variant="primary" size="lg">
              Book a Fit Call
            </Button>
            <Button href="/how-it-works" variant="secondary" size="lg">
              How It Works
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
