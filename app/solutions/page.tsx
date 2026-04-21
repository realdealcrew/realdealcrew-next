import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "One deal operations model applied to different investor types — wholesalers, flippers, landlords, and investor-led educators.",
};

const solutions = [
  {
    id: "wholesalers",
    title: "For Wholesalers",
    tagline: "Close More Assignments Without Adding a Team.",
    problems: [
      "Manual lead entry and follow-up",
      "Deals lost due to slow communication",
      "No easy way to track buyers and sellers in one place",
    ],
    handles: [
      "Every lead captured and followed up without manual effort",
      "Buyers and sellers organized so nothing slips through the cracks",
      "Appointments booked automatically while you focus on closing",
    ],
  },
  {
    id: "flippers",
    title: "For Flippers",
    tagline: "From Lead to Rehab — Without Dropping a Step.",
    problems: [
      "Missed calls and unqualified seller leads",
      "Disorganized deal tracking",
      "Too much time in spreadsheets, not on-site",
    ],
    handles: [
      "Leads qualified and routed instantly — no missed calls",
      "Pipeline always current so you know where every deal stands",
      "Follow-up handled automatically while you focus on renovations",
    ],
  },
  {
    id: "landlords",
    title: "For Landlords",
    tagline: "Centralize Rental Inquiries and New Deal Intake — Without Missing Opportunities.",
    problems: [
      "Missed inquiries from potential renters or sellers",
      "No clear view of acquisition opportunities in the pipeline",
      "Manual follow-up on new deal opportunities",
    ],
    handles: [
      "Rental inquiries and inbound leads captured and responded to instantly",
      "Screening and follow-up handled for new acquisition opportunities",
      "Full visibility into every deal-related conversation",
    ],
  },
  {
    id: "educators",
    title: "For Investor-Led Educators",
    tagline: "Turn inbound conversations from your brand into qualified deal opportunities and partnerships — without managing another system.",
    problems: [
      "Inbound conversations scattered across email, DMs, and forms",
      "No clear system to qualify partnership or deal-related inquiries",
      "Manual follow-up pulling focus away from acquisitions",
    ],
    handles: [
      "Inbound conversations captured and routed intelligently",
      "Follow-up handled automatically so no opportunity is missed",
      "Clear visibility into every deal-related or partnership conversation",
    ],
    note: "This is for educators who are also active real estate investors — not info-product or marketing-only businesses.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <Section style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <span className="label-pill mb-6 inline-flex">Solutions</span>
        <h1 className="heading-xl mb-6 max-w-3xl">
          Fractional Deal Operations for Serious Real Estate Operators.
        </h1>
        <p
          className="text-lg max-w-xl leading-relaxed mb-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          We run the same deal operations system — tailored to how you invest.
        </p>
      </Section>

      <hr className="hr-subtle" />

      {/* One model callout */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="max-w-2xl">
          <span className="label-pill mb-4 inline-flex">One Model</span>
          <h2 className="heading-lg mb-4">
            One operations model. Applied to different investor types.
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            We don't build custom systems for each niche. We run the same proven
            deal intake operation, adjusted only for how deals move in your
            business.
          </p>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Solutions */}
      <Section>
        <div className="flex flex-col gap-16">
          {solutions.map((s, i) => (
            <div
              key={s.id}
              className="grid md:grid-cols-2 gap-10 items-start"
              style={{
                paddingBottom: i < solutions.length - 1 ? "4rem" : 0,
                borderBottom:
                  i < solutions.length - 1
                    ? "1px solid var(--color-border)"
                    : "none",
              }}
            >
              <div>
                <span
                  className="text-xs font-mono uppercase tracking-widest mb-3 block"
                  style={{ color: "var(--color-accent)" }}
                >
                  {s.title}
                </span>
                <h2
                  className="heading-md mb-4"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {s.tagline}
                </h2>

                <div className="mb-6">
                  <p
                    className="text-xs font-mono uppercase tracking-widest mb-3"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Common Pain Points
                  </p>
                  <ul className="flex flex-col gap-2">
                    {s.problems.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <span style={{ color: "#f87171", marginTop: "2px" }}>✗</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href="/book" variant="primary" size="md">
                  Book a Fit Call
                </Button>
              </div>

              <div
                className="p-7 rounded-sm"
                style={{ border: "1px solid var(--color-border)" }}
              >
                <p
                  className="text-xs font-mono uppercase tracking-widest mb-4"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  What We Handle for You
                </p>
                <ul className="flex flex-col gap-3">
                  {s.handles.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <span
                        className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs"
                        style={{
                          background: "rgba(200, 241, 53, 0.1)",
                          color: "var(--color-accent)",
                        }}
                      >
                        ✓
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
                {s.note && (
                  <p
                    className="mt-5 text-xs leading-relaxed"
                    style={{
                      color: "var(--color-text-muted)",
                      borderTop: "1px solid var(--color-border)",
                      paddingTop: "1rem",
                    }}
                  >
                    {s.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Stats + CTA */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {[
            { stat: "50%", label: "Faster lead response time" },
            { stat: "3x", label: "Increase in appointments booked automatically" },
            { stat: "100%", label: "Visibility across every lead and deal" },
          ].map((r) => (
            <div key={r.stat}>
              <span
                className="text-4xl font-semibold block mb-1"
                style={{ color: "var(--color-accent)", letterSpacing: "-0.03em" }}
              >
                {r.stat}
              </span>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                {r.label}
              </p>
            </div>
          ))}
        </div>
        <p
          className="text-sm mb-6 italic"
          style={{ color: "var(--color-text-muted)" }}
        >
          &ldquo;We didn't add more staff — we added RealDealCrew.&rdquo;
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button href="/book" variant="primary" size="lg">
            Book a Fit Call
          </Button>
          <Button href="/how-it-works" variant="secondary" size="lg">
            How It Works
          </Button>
        </div>
      </Section>
    </>
  );
}
