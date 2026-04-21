import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import AssessmentForm from "@/components/assessment/AssessmentForm";

export const metadata: Metadata = {
  title: "Deal Intake Operations Assessment",
  description:
    "12 questions. Immediate results. Find out which of four operational maturity bands your real estate investor business falls into — and what it means for your deal flow.",
};

export default function AssessmentPage() {
  return (
    <>
      <Section style={{ paddingTop: "6rem", paddingBottom: "2rem" }}>
        <div className="max-w-2xl mx-auto text-center">
          <span className="label-pill mb-6 inline-flex mx-auto">
            Deal Intake Operations Assessment
          </span>
          <h1 className="heading-xl mb-4">
            Where is your intake system breaking down?
          </h1>
          <p
            className="text-base leading-relaxed mb-3"
            style={{ color: "var(--color-text-secondary)" }}
          >
            12 questions. Immediate results. No email required.
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            This is a segmentation tool, not a sales pitch. Your results are
            shown immediately and are yours to keep.
          </p>
        </div>
      </Section>

      <Section style={{ paddingTop: "2rem" }}>
        <AssessmentForm />
      </Section>
    </>
  );
}
