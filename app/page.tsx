import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "RealDealCrew — Fractional Deal Operations for Real Estate Investors",
};

const capabilities = [
  {
    title: "Every Lead Captured, Instantly",
    body: "AI Receptionist answers calls, qualifies sellers, and routes them instantly. Every lead gets captured, 24/7.",
  },
  {
    title: "Follow-Up That Runs Without You",
    body: "Pre-built text and email sequences that re-engage cold leads and keep your pipeline warm — no manual effort.",
  },
  {
    title: "Appointments Booked Without Chasing",
    body: "Smart scheduling that syncs to your calendar and eliminates phone tag.",
  },
  {
    title: "Clear Deal Visibility at Every Stage",
    body: "Visual pipelines and alerts keep your deals organized. Nothing falls through the cracks.",
  },
  {
    title: "Know What's Converting — and Why",
    body: "Real-time dashboards tracking the KPIs that actually matter to your bottom line.",
  },
];

const problems = [
  "Missed calls and untracked leads slipping through",
  "Inconsistent follow-up leaving money on the table",
  "Disconnected tools creating work, not clarity",
  "No view into which conversations turn into deals",
];

const testimonials = [
  {
    quote:
      "RealDealCrew gave me back 15 hours a week. Now I'm focused on closing deals, not chasing leads.",
    name: "Marcus",
    location: "Columbus, OH",
    role: "Wholesaler",
    stat: "60%",
    statLabel: "Faster Response Time",
  },
  {
    quote:
      "The follow-up systems alone have helped us close deals we would have lost. It's like having a full-time assistant.",
    name: "Sarah",
    location: "Atlanta, GA",
    role: "Small Team",
    stat: "40%",
    statLabel: "Increase in Lead Engagement",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section
        style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="label-pill mb-6 inline-flex">
              Fractional Deal Operations
            </span>
            <h1 className="heading-xl mb-6" style={{ color: "var(--color-text-primary)" }}>
              We build and run your deal intake system.{" "}
              <span style={{ color: "var(--color-text-secondary)" }}>
                You focus on closing.
              </span>
            </h1>
            <p
              className="text-lg mb-8 max-w-xl leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Speed-to-lead handled automatically. Follow-up runs without manual
              effort. Every deal tracked in one system.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/book" variant="primary" size="lg">
                Book a Fit Call
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                How It Works
              </Button>
            </div>
            <p
              className="mt-6 text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              We don't close deals. We run the intake operation.
            </p>
          </div>

          {/* Right — live call simulation card */}
          <div
            style={{
              background: "#111111",
              border: "1px solid #222222",
              borderRadius: "4px",
              padding: "1.5rem",
              fontFamily: "'DM Mono', 'Courier New', monospace",
            }}
          >
            {/* Card header */}
            <div className="flex items-center gap-2 mb-5">
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#c8f135",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "#c8f135",
                  textTransform: "uppercase",
                }}
              >
                Live System Activity
              </span>
            </div>

            {/* Activity rows */}
            <div className="flex flex-col gap-3">
              {[
                { time: "0:00", event: "Seller calls your number", status: "Answered instantly" },
                { time: "0:45", event: "AI qualifies seller motivation and property details", status: "Lead scored" },
                { time: "2:30", event: "Appointment scheduled to your calendar", status: "Confirmed" },
                { time: "2:35", event: "Follow-up sequence activated", status: "Running" },
                { time: "3:00", event: "Deal card created in pipeline", status: "Organized" },
              ].map((row, i) => (
                <div
                  key={row.time}
                  className="flex items-start gap-3"
                  style={{
                    opacity: 0,
                    animation: "fadeInRow 0.4s ease forwards",
                    animationDelay: `${i * 100}ms`,
                    paddingBottom: "0.75rem",
                    borderBottom: i < 4 ? "1px solid #1a1a1a" : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color: "var(--color-text-muted)",
                      minWidth: "2.5rem",
                      paddingTop: "1px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {row.time}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-secondary)",
                      flex: 1,
                      lineHeight: "1.4",
                    }}
                  >
                    {row.event}
                  </span>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.05em",
                      color: "#c8f135",
                      background: "rgba(200, 241, 53, 0.08)",
                      border: "1px solid rgba(200, 241, 53, 0.2)",
                      borderRadius: "2px",
                      padding: "2px 6px",
                      whiteSpace: "nowrap",
                      textTransform: "uppercase",
                    }}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Card footer */}
            <div
              style={{
                marginTop: "1rem",
                paddingTop: "1rem",
                borderTop: "1px solid #222222",
              }}
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.05em",
                }}
              >
                Response time: &lt;90 seconds
              </span>
            </div>
          </div>
        </div>

        {/* Flow indicator */}
        <div
          className="mt-16 flex flex-wrap gap-0 items-center"
          style={{ color: "var(--color-text-muted)" }}
        >
          {["Lead", "Qualify", "Booked", "Follow-Up", "Reporting"].map(
            (step, i, arr) => (
              <span key={step} className="flex items-center">
                <span
                  className="text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-sm"
                  style={{ border: "1px solid var(--color-border)" }}
                >
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span
                    className="mx-2 text-xs"
                    style={{ color: "var(--color-border)" }}
                  >
                    →
                  </span>
                )}
              </span>
            )
          )}
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Problem section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="label-pill mb-4 inline-flex">The Problem</span>
            <h2 className="heading-lg mb-4">
              Your leads aren't the problem — your systems are.
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Most investors don't have a lead problem — they have an operational
              one. Missed calls, inconsistent follow-up, and disconnected tools
              cause good opportunities to fall through the cracks.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              RealDealCrew provides fractional deal operations — not software — to
              fix the breakdown between lead, conversation, and contract.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {problems.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 px-5 py-4 rounded-sm text-sm"
                style={{
                  border: "1px solid var(--color-border)",
                  background: "var(--color-surface)",
                  color: "var(--color-text-secondary)",
                }}
              >
                <span style={{ color: "#f87171", marginTop: "2px" }}>✗</span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Assessment CTA */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <span className="label-pill mb-4 inline-flex mx-auto">
            Not Sure Where You Stand?
          </span>
          <h2 className="heading-lg mb-4">
            Most investors don't need more leads.
          </h2>
          <p
            className="text-base mb-8 leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            They need clarity on where their intake system is breaking down. Take
            the Deal Intake Assessment to see where your operation currently falls.
          </p>
          <Button href="/assessment" variant="primary" size="lg">
            Take the Deal Intake Assessment
          </Button>
          <p
            className="mt-4 text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            3 minutes. Immediate clarity. No sales pitch.
          </p>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* How it works mini */}
      <Section>
        <div className="text-center mb-12">
          <span className="label-pill mb-4 inline-flex mx-auto">
            How It Works
          </span>
          <h2 className="heading-lg">
            A simple operational flow designed to turn leads into deal-ready conversations.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              n: "1",
              title: "Intake & Routing",
              body: "We capture every inbound lead, qualify it, and route it correctly — without manual effort.",
            },
            {
              n: "2",
              title: "Follow-Up Operations",
              body: "Text, email, and reminders run in the background so no deal goes cold or forgotten.",
            },
            {
              n: "3",
              title: "Visibility & Optimization",
              body: "You see what's happening, what's converting, and where deals stall — all in one place.",
            },
          ].map((step) => (
            <div
              key={step.n}
              className="px-6 py-7 rounded-sm"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span
                className="text-xs font-mono mb-4 block"
                style={{ color: "var(--color-accent)" }}
              >
                0{step.n}
              </span>
              <h3
                className="text-base font-medium mb-2"
                style={{ color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/how-it-works" variant="secondary" size="md">
            See the Full Framework
          </Button>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Capabilities */}
      <Section>
        <div className="mb-12">
          <span className="label-pill mb-4 inline-flex">Capabilities</span>
          <h2 className="heading-lg max-w-2xl">
            Five capabilities working together.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-sm"
              style={{
                border: "1px solid var(--color-border)",
                background: "var(--color-surface)",
              }}
            >
              <h3
                className="text-sm font-medium mb-2"
                style={{ color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}
              >
                {cap.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Testimonials */}
      <Section>
        <div className="mb-12">
          <span className="label-pill mb-4 inline-flex">Results</span>
          <h2 className="heading-lg">
            Trusted by active real estate operators.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-sm flex flex-col justify-between gap-6"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-end justify-between">
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {t.location} &middot; {t.role}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className="text-2xl font-semibold"
                    style={{ color: "var(--color-accent)", letterSpacing: "-0.03em" }}
                  >
                    {t.stat}
                  </span>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {t.statLabel}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Final CTA */}
      <Section>
        <div className="max-w-2xl">
          <h2 className="heading-lg mb-4">
            If you already know how to close deals, we'll make sure the right conversations reach you.
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            We work with a limited number of operators to maintain quality.
          </p>
          <Button href="/book" variant="primary" size="lg">
            Book a Fit Call
          </Button>
        </div>
      </Section>
    </>
  );
}
