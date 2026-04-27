import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Motivated Seller Visibility Audit | RealDealCrew",
  description:
    "Find out why motivated sellers can't find you online. RealDealCrew's Motivated Seller Visibility Audit shows real estate investors exactly where they stand in local search and what to do about it.",
};

const auditCovers = [
  "Where you currently rank in local search across your market.",
  "How your Google Business Profile is performing and what's missing.",
  "Whether your content is working for or against you in local relevancy.",
  "What your competitors are doing that you aren't.",
  "A clear picture of what needs to change and in what order.",
];

const builtFor = [
  "Are already closing deals and want more motivated seller leads",
  "Have a Carrot site or similar platform and have noticed declining performance",
  "Want data, not guesses, about why their visibility has dropped",
  "Are ready to fix the problem, not just understand it",
];

export default function VisibilityPage() {
  return (
    <>
      {/* Hero */}
      <Section style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <span className="label-pill mb-6 inline-flex">Motivated Seller Visibility Audit</span>
        <h1 className="heading-xl mb-6 max-w-3xl">
          Motivated Sellers Are Searching. The Question Is Whether They Can Find You.
        </h1>
        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Most investor websites are invisible in local search and the investors
          running them have no idea. We built an audit that shows you exactly
          where you stand in your market and what it's costing you.
        </p>
      </Section>

      <hr className="hr-subtle" />

      {/* The Problem */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="max-w-2xl">
          <span className="label-pill mb-4 inline-flex">The Problem</span>
          <h2 className="heading-lg mb-6">
            Your Website Isn't the Problem. Your Visibility Is.
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Platforms like Carrot built their reputation on getting investors
            found online. That model has quietly stopped working. Google has
            gotten smarter about thin, duplicated, locally irrelevant content
            — and thousands of investor sites are paying the price in the form
            of fewer motivated seller leads. The site still looks fine. The
            traffic just isn't coming.
          </p>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* What the Audit Covers */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="label-pill mb-4 inline-flex">What the Audit Covers</span>
            <h2 className="heading-lg mb-4">Here's What We Look At</h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              A complete picture of your local search presence — not opinions,
              actual data from your market.
            </p>
          </div>
          <div
            className="p-8 rounded-sm"
            style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)" }}
          >
            <ul className="flex flex-col gap-4">
              {auditCovers.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span
                    className="mt-0.5 w-4 h-4 rounded-full shrink-0 flex items-center justify-center text-xs"
                    style={{
                      background: "rgba(200, 241, 53, 0.1)",
                      color: "var(--color-accent)",
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Who This Is For */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="max-w-2xl">
          <span className="label-pill mb-4 inline-flex">Who This Is For</span>
          <h2 className="heading-lg mb-8">This Is Built For Investors Who</h2>
          <ul className="flex flex-col gap-5">
            {builtFor.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4"
                style={{
                  paddingBottom: "1.25rem",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <span
                  className="mt-0.5 w-4 h-4 rounded-full shrink-0 flex items-center justify-center text-xs"
                  style={{
                    background: "rgba(200, 241, 53, 0.1)",
                    color: "var(--color-accent)",
                  }}
                >
                  ✓
                </span>
                <span
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* About This Audit */}
      <Section>
        <div className="max-w-2xl">
          <span className="label-pill mb-4 inline-flex">About This Audit</span>
          <h2 className="heading-lg mb-6">
            Built By an Investor Who Solved This Problem
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            We didn't build this service from a marketing textbook. We ran
            multiple investor websites, watched them stop performing, figured
            out why, and built a system to fix it. The heat map data from our
            own market is what we use to show other investors exactly what we
            found.
          </p>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* CTA */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="max-w-xl">
          <h2 className="heading-lg mb-4">See Where You Stand In Your Market</h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            The audit starts with a conversation. We'll look at your market,
            show you where you're visible and where you're not, and give you a
            clear picture of what's actually going on.
          </p>
          <Button href="/book" variant="primary" size="lg">
            Book Your Visibility Audit
          </Button>
        </div>
      </Section>
    </>
  );
}
