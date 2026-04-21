import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import TidyCalEmbed from "./TidyCalEmbed";

export const metadata: Metadata = {
  title: "Book a Fit Call",
  description:
    "Book a 30-minute Fractional Deal Operations Fit Call. Not a pitch, not a demo. A conversation to determine operational fit.",
};

const whatToExpect = [
  {
    n: "01",
    title: "Not a sales pitch",
    body: "We won't sell you on anything. This is a diagnostic conversation, not a close.",
  },
  {
    n: "02",
    title: "Not a free consulting session",
    body: "We're determining whether there's an operational fit — not solving your system on the call.",
  },
  {
    n: "03",
    title: "Both sides qualify",
    body: "If there's no fit, we'll say so. That's the point of the call.",
  },
  {
    n: "04",
    title: "Come with context",
    body: "Know roughly how many leads you're getting per month and where your biggest intake bottleneck is.",
  },
];

export default function BookPage() {
  return (
    <>
      <Section style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — context */}
          <div>
            <span className="label-pill mb-6 inline-flex">Fit Call</span>
            <h1 className="heading-xl mb-6">
              Fractional Deal Operations Fit Call.
            </h1>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              A 30-minute operational conversation. We look at where your intake
              system stands and determine whether Fractional Deal Operations is
              the right fit for your business.
            </p>

            <div className="flex flex-col gap-6">
              {whatToExpect.map((item) => (
                <div key={item.n} className="flex items-start gap-4">
                  <span
                    className="text-xs font-mono shrink-0 pt-0.5 w-6"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {item.n}
                  </span>
                  <div>
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 p-5 rounded-sm"
              style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)" }}
            >
              <p
                className="text-xs font-mono uppercase tracking-widest mb-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                Who This Is For
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Investors already closing deals who want fewer junk leads, faster
                response, and a system that runs without them. Not for beginners
                or commission-only expectations.
              </p>
            </div>
          </div>

          {/* Right — TidyCal embed */}
          <div>
            <TidyCalEmbed />
          </div>
        </div>
      </Section>
    </>
  );
}
