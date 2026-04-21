import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for Fractional Deal Operations. $2,000 one-time setup, $750/month ongoing operations, and optional 10% backend participation on deals managed through the system.",
};

const included = [
  "Seller intake & lead routing",
  "Speed-to-lead automation",
  "Lead qualification & pre-screening",
  "CRM and workflow setup",
  "Ongoing monitoring and optimization",
];

const excluded = [
  "Seller negotiations",
  "Contract signing",
  "Dispositions",
  "Capital or funding",
];

const forInvestors = [
  "Investors already closing deals",
  "Operators with buyers or capital in place",
  "Teams that value speed, structure, and follow-up",
];

const notFor = [
  "Brand-new investors learning sales",
  "Commission-only arrangements",
  "Anyone looking for free help",
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <Section style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <span className="label-pill mb-6 inline-flex">Pricing</span>
        <h1 className="heading-xl mb-6 max-w-3xl">
          Fractional Deal Operations.
        </h1>
        <p
          className="text-lg max-w-xl leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          We build and run your deal intake operation. You focus on closing. For
          real estate investors who already know how to close — and want fewer,
          better conversations.
        </p>
      </Section>

      <hr className="hr-subtle" />

      {/* Not acquisitions */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="max-w-2xl">
          <span className="label-pill mb-4 inline-flex">Scope</span>
          <h2 className="heading-lg mb-4">
            This is not acquisitions. This is infrastructure.
          </h2>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            RealDealCrew designs, launches, and operates the front-end of your
            deal flow — including intake, speed-to-lead, qualification, and
            routing — so you only spend time on motivated, deal-ready sellers.
          </p>
          <p
            className="text-base font-medium"
            style={{ color: "var(--color-text-primary)" }}
          >
            You stay focused on closing and dispositions. We handle the system
            that feeds you clean conversations.
          </p>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Pricing cards */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {/* Setup */}
          <div
            className="p-8 rounded-sm flex flex-col gap-4"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <div>
              <span
                className="text-4xl font-semibold"
                style={{ color: "var(--color-text-primary)", letterSpacing: "-0.03em" }}
              >
                $2,000
              </span>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                one-time setup
              </p>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Builds and deploys your deal intake system. Covers configuration,
              testing, and go-live.
            </p>
          </div>

          {/* Monthly */}
          <div
            className="p-8 rounded-sm flex flex-col gap-4"
            style={{
              border: "1px solid var(--color-accent)",
              background: "rgba(200, 241, 53, 0.03)",
            }}
          >
            <div>
              <span
                className="text-4xl font-semibold"
                style={{ color: "var(--color-text-primary)", letterSpacing: "-0.03em" }}
              >
                $750
              </span>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                per month
              </p>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Covers ongoing operation, monitoring, and optimization. We manage
              the system so you don't have to.
            </p>
          </div>

          {/* Backend */}
          <div
            className="p-8 rounded-sm flex flex-col gap-4"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <div>
              <span
                className="text-4xl font-semibold"
                style={{ color: "var(--color-text-primary)", letterSpacing: "-0.03em" }}
              >
                10%
              </span>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--color-text-muted)" }}
              >
                optional backend participation
              </p>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Applies only to deals sourced through the system. Performance
              alignment — not commission dependency.
            </p>
          </div>
        </div>

        {/* Alignment note */}
        <div
          className="rounded-sm p-6 mb-12 max-w-2xl"
          style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)" }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            If deals close, we both win. If not, you still own a working system
            and we're paid for the work. This is performance alignment — not
            commission dependency.
          </p>
        </div>

        {/* Included / Excluded */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              What's Included
            </p>
            <ul className="flex flex-col gap-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span
                    className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center text-xs"
                    style={{ background: "rgba(200, 241, 53, 0.1)", color: "var(--color-accent)" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Clear Boundaries
            </p>
            <ul className="flex flex-col gap-3">
              {excluded.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span style={{ color: "#f87171" }}>✗</span>
                  No {item.toLowerCase()}
                </li>
              ))}
            </ul>
            <p
              className="mt-4 text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              You remain the investor. We remain the operators.
            </p>
          </div>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* This is for / not for */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              This Is For
            </p>
            <ul className="flex flex-col gap-3">
              {forInvestors.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span
                    className="mt-0.5 w-4 h-4 rounded-full shrink-0 flex items-center justify-center text-xs"
                    style={{ background: "rgba(200, 241, 53, 0.1)", color: "var(--color-accent)" }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              This Is Not For
            </p>
            <ul className="flex flex-col gap-3">
              {notFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span style={{ color: "#f87171" }}>✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Final CTA */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="heading-lg mb-4">
            Ready to improve your deal operations?
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            We only work with a small number of operators at a time to maintain
            quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button href="/book" variant="primary" size="lg">
              Book a Fit Call
            </Button>
          </div>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Not sure if you're ready?{" "}
            <Link
              href="/assessment"
              className="underline transition-colors hover:text-text-primary"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Take the Deal Intake Assessment first &rarr;
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
