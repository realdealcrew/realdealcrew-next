import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "RealDealCrew was built by real estate investors who experienced the same operational chaos firsthand. We replaced it with a fractional deal operations model that gives investors their time back.",
};

const mission = [
  "Operations should remove friction, not create it.",
  "Every system must drive measurable results.",
  "You shouldn't need to be a tech expert to run your business.",
  "Your operation should work even when you're not.",
];

const stats = [
  { stat: "60%", label: "Cut follow-up time" },
  { stat: "80+", label: "Cold leads re-engaged in a week" },
  { stat: "<7", label: "Days to system launch" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <span className="label-pill mb-6 inline-flex">About</span>
        <h1 className="heading-xl mb-6 max-w-3xl">
          Built by Investors. Run Like an Operation.
        </h1>
        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          RealDealCrew was created to eliminate the chaos, manual work, and
          missed deals that slow investors down. We run the deal intake
          operations that give you your time — and sanity — back.
        </p>
      </Section>

      <hr className="hr-subtle" />

      {/* Origin story */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="label-pill mb-4 inline-flex">The Origin</span>
            <h2 className="heading-lg mb-6">
              It started with frustration — and a fix.
            </h2>
            <div
              className="flex flex-col gap-4 text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <p>
                After years of running deals, managing leads, and juggling CRMs
                that didn't talk to each other, we hit the same wall every
                investor does: too many tools, not enough traction.
              </p>
              <p>
                So we built a better way — an operations framework that runs
                your entire deal flow from lead to close, without adding more
                apps or staff.
              </p>
              <p>
                That framework became RealDealCrew — a fractional deal
                operations team built for real estate investors.
              </p>
            </div>
          </div>

          <div
            className="p-8 rounded-sm"
            style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)" }}
          >
            <span className="label-pill mb-5 inline-flex">Our Mission</span>
            <h3
              className="text-base font-medium mb-5"
              style={{ color: "var(--color-text-primary)" }}
            >
              Help real estate investors scale without the stress.
            </h3>
            <ul className="flex flex-col gap-4">
              {mission.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <span
                    className="mt-0.5 w-4 h-4 rounded-full shrink-0 flex items-center justify-center text-xs"
                    style={{ background: "rgba(200, 241, 53, 0.1)", color: "var(--color-accent)" }}
                  >
                    ✓
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Founder */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="max-w-2xl">
          <span className="label-pill mb-6 inline-flex">The Crew</span>
          <h2 className="heading-lg mb-8">
            Meet the crew behind the operation.
          </h2>

          <div
            className="p-8 rounded-sm"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <div className="flex items-start gap-5 mb-5">
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center text-lg font-semibold shrink-0"
                style={{ background: "var(--color-border)", color: "var(--color-text-primary)" }}
              >
                JH
              </div>
              <div>
                <p
                  className="text-base font-medium"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Jack Hoss
                </p>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Founder, RealDealCrew
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Jack is a seasoned real estate investor who spent years running
              acquisitions and fixing deal flow breakdowns firsthand. After
              building intake operations that actually worked, he founded
              RealDealCrew to give other investors the same leverage — without
              having to build or manage the systems themselves.
            </p>
          </div>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Stats */}
      <Section>
        <div className="mb-10">
          <span className="label-pill mb-4 inline-flex">Results</span>
          <h2 className="heading-lg max-w-xl">
            Trusted by investors who want results.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {stats.map((s) => (
            <div key={s.stat}>
              <span
                className="text-5xl font-semibold block mb-2"
                style={{ color: "var(--color-accent)", letterSpacing: "-0.04em" }}
              >
                {s.stat}
              </span>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Where headed */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="max-w-2xl">
          <span className="label-pill mb-4 inline-flex">Where We're Headed</span>
          <h2 className="heading-lg mb-4">Expanding capacity — not cutting corners.</h2>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            RealDealCrew is focused on expanding how many operators we can
            support — without sacrificing quality or hands-on execution. Our
            goal is to remain a trusted operations partner, not a platform, for
            investors who want their deal intake handled right.
          </p>
          <Button href="/book" variant="primary" size="lg">
            Book a Fit Call &rarr;
          </Button>
        </div>
      </Section>
    </>
  );
}
