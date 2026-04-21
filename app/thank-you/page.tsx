import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're Booked",
  description: "Your Fit Call is confirmed. Here's what to expect.",
};

const prep = [
  "How many inbound leads you're getting per month (roughly)",
  "Which channels those leads come from",
  "Where the biggest breakdown happens — intake, follow-up, or visibility",
  "What you're currently using to manage deal flow",
];

export default function ThankYouPage() {
  return (
    <>
      <Section style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
        <div className="max-w-xl mx-auto">
          {/* Confirmation header */}
          <div className="mb-12">
            <span
              className="text-xs font-mono uppercase tracking-widest mb-4 block"
              style={{ color: "var(--color-accent)" }}
            >
              Confirmed
            </span>
            <h1 className="heading-xl mb-4">
              You're on the calendar.
            </h1>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Check your email for the calendar invite and confirmation details.
              The call is 30 minutes and you'll receive a reminder before it
              starts.
            </p>
          </div>

          {/* What this call is */}
          <div
            className="p-8 rounded-sm mb-8"
            style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)" }}
          >
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              What This Call Is
            </p>
            <div className="flex flex-col gap-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
              <p>A 30-minute operational conversation, not a pitch.</p>
              <p>
                We'll look at your current intake setup, identify where things
                are breaking down, and determine whether Fractional Deal
                Operations is the right fit for your business.
              </p>
              <p>
                If there's no fit, we'll say so. That's the point of the call.
              </p>
            </div>
          </div>

          {/* Prep */}
          <div className="mb-10">
            <p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Come Prepared With
            </p>
            <ul className="flex flex-col gap-3">
              {prep.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm"
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

          {/* Optional: take the assessment first */}
          <div
            className="p-6 rounded-sm"
            style={{ border: "1px solid var(--color-border)" }}
          >
            <p
              className="text-sm font-medium mb-1"
              style={{ color: "var(--color-text-primary)" }}
            >
              Haven't taken the assessment yet?
            </p>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              The Deal Intake Assessment gives us both a shared operational
              baseline before the call. Takes 3 minutes.
            </p>
            <Link
              href="/assessment"
              className="text-sm underline transition-colors hover:opacity-80"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Take the Assessment &rarr;
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
