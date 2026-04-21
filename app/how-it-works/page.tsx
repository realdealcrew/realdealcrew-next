import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "The RealDeal Operations Framework: four core operations that transform chaos into clarity. Lead intake, follow-up, appointment booking, and reporting — all managed for you.",
};

const framework = [
  {
    n: "01",
    title: "Lead Intake Operations",
    body: "Our operations system handles incoming calls, qualifies sellers, and routes new opportunities directly into your pipeline. Every lead gets captured instantly — 24/7, with no missed opportunities.",
  },
  {
    n: "02",
    title: "Follow-Up Operations",
    body: "We operate a system that re-engages cold leads via SMS and email sequences and keeps warm ones moving toward a contract. Stay top-of-mind without lifting a finger.",
  },
  {
    n: "03",
    title: "Appointment & Deal Flow Operations",
    body: "Our operations system handles scheduling, syncs with your calendar, and updates deal stages — no manual tracking. From booked to closed, everything flows seamlessly.",
  },
  {
    n: "04",
    title: "Reporting & Optimization Operations",
    body: "We operate real-time dashboards showing KPIs like response time, lead source, and conversion rate so you can make data-driven decisions. See what's working and scale it.",
  },
];

const timeline = [
  { time: "0:00", event: "Seller calls your number", status: "Answered instantly" },
  { time: "0:45", event: "AI qualifies seller motivation & property details", status: "Lead scored" },
  { time: "2:30", event: "Appointment auto-scheduled to your calendar", status: "Confirmed" },
  { time: "2:35", event: "Follow-up sequence activated", status: "Sent" },
  { time: "3:00", event: "Deal card created in your pipeline", status: "Organized" },
];

const pillars = [
  {
    title: "Built by Investors",
    body: "Created by real operators who understand the chaos of acquisitions, follow-ups, and closings. We've lived your pain points.",
  },
  {
    title: "Operations, Not Data Entry",
    body: "Our operations team does the work, not just records it. Stop managing tasks and start closing deals.",
  },
  {
    title: "Fast Setup",
    body: "Launch in days, not weeks — every automation pre-tested and ready to perform from day one.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <Section style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <span className="label-pill mb-6 inline-flex">How It Works</span>
        <h1 className="heading-xl mb-6 max-w-3xl">
          How Fractional Deal Operations Work
        </h1>
        <p
          className="text-lg max-w-2xl leading-relaxed mb-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          We build, run, and maintain your deal intake system — from first seller
          contact to deal-ready conversation.
        </p>
        <div className="flex items-center gap-4 flex-wrap text-sm" style={{ color: "var(--color-text-muted)" }}>
          {["Lead Comes In", "Operations Handle It", "Deal Closes"].map((s, i, arr) => (
            <span key={s} className="flex items-center gap-4">
              <span>{s}</span>
              {i < arr.length - 1 && <span style={{ color: "var(--color-border)" }}>→</span>}
            </span>
          ))}
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Framework */}
      <Section>
        <div className="mb-12">
          <span className="label-pill mb-4 inline-flex">The Framework</span>
          <h2 className="heading-lg max-w-2xl">
            Four core operations that transform chaos into clarity.
          </h2>
          <p
            className="mt-4 text-base max-w-xl leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            This framework represents how we operate and manage your deal intake
            system — not software you configure yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {framework.map((f) => (
            <div
              key={f.n}
              className="p-8 rounded-sm"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <span
                className="text-xs font-mono mb-5 block"
                style={{ color: "var(--color-accent)" }}
              >
                {f.n}
              </span>
              <h3
                className="text-base font-medium mb-3"
                style={{ color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Timeline — what happens when a seller calls */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="max-w-2xl mx-auto">
          <span className="label-pill mb-6 inline-flex">Live Example</span>
          <h2 className="heading-lg mb-2">
            What happens when a seller contacts you.
          </h2>
          <p
            className="text-base mb-10 leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            A seller calls your number. Here is what happens inside the
            operations system — in real time.
          </p>

          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div
                key={item.time}
                className="flex items-start gap-6 py-5"
                style={{
                  borderTop: i > 0 ? "1px solid var(--color-border)" : "none",
                }}
              >
                <span
                  className="text-xs font-mono shrink-0 w-10 pt-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.time}
                </span>
                <div className="flex-1">
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {item.event}
                  </p>
                </div>
                <span
                  className="text-xs shrink-0 px-2 py-0.5 rounded-sm"
                  style={{
                    background: "rgba(200, 241, 53, 0.1)",
                    color: "var(--color-accent)",
                  }}
                >
                  ✓ {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Pillars */}
      <Section>
        <div className="mb-10">
          <span className="label-pill mb-4 inline-flex">Why It Works</span>
          <h2 className="heading-lg max-w-xl">
            Powered by proven tech. Customized for you.
          </h2>
          <p
            className="mt-4 text-base max-w-xl leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            RealDealCrew connects the tools you already use — phone, email, CRM,
            calendar, and more — into one seamless operations engine. We handle
            configuration, maintenance, and optimization. You don't need to learn
            or manage any tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-sm"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <h3
                className="text-sm font-medium mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Results */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {[
            { stat: "100%", label: "Everything Runs on Autopilot", sub: "My team just closes now." },
            { stat: "15+", label: "Hours Saved Per Week", sub: "Built for how investors actually work." },
            { stat: "Cut", label: "Lead Response Time in Half", sub: "Finally answering every call instantly." },
          ].map((r) => (
            <div key={r.stat}>
              <span
                className="text-4xl font-semibold block mb-1"
                style={{ color: "var(--color-accent)", letterSpacing: "-0.03em" }}
              >
                {r.stat}
              </span>
              <p className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                {r.label}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                {r.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/book" variant="primary" size="lg">
            Book a Fit Call
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            See Pricing
          </Button>
        </div>
      </Section>
    </>
  );
}
