"use client";

import { useState } from "react";
import type { Band } from "./bandConfig";
import Button from "@/components/ui/Button";

interface Props {
  score: number;
  band: Band;
}

type EmailStatus = "idle" | "loading" | "sent" | "error";

export default function ResultsBand({ score, band }: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailStatus, setEmailStatus] = useState<EmailStatus>("idle");

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setEmailStatus("loading");

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          score,
          bandKey: band.key,
          bandName: band.name,
          bandTag: band.tagName,
        }),
      });

      if (res.ok) {
        setEmailStatus("sent");
      } else {
        setEmailStatus("error");
      }
    } catch {
      setEmailStatus("error");
    }
  }

  const maxScore = 36;
  const pct = Math.round((score / maxScore) * 100);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Score header */}
      <div
        className="rounded-sm p-8 mb-8"
        style={{
          border: "1px solid var(--color-border)",
          background: "var(--color-surface)",
        }}
      >
        <div className="flex items-start justify-between gap-6 mb-6">
          <div>
            <span
              className="label-pill mb-3 inline-flex"
              style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
            >
              Your Result
            </span>
            <h2
              className="heading-md mt-2"
              style={{ color: "var(--color-text-primary)" }}
            >
              {band.name}
            </h2>
          </div>
          <div className="text-right shrink-0">
            <span
              className="text-4xl font-semibold"
              style={{ color: "var(--color-accent)", letterSpacing: "-0.03em" }}
            >
              {score}
            </span>
            <span
              className="text-sm ml-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              / {maxScore}
            </span>
          </div>
        </div>

        {/* Score bar */}
        <div
          className="h-1 w-full rounded-full overflow-hidden mb-6"
          style={{ background: "var(--color-border)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${pct}%`,
              background: "var(--color-accent)",
            }}
          />
        </div>

        <p
          className="text-lg font-medium leading-snug mb-3"
          style={{ color: "var(--color-text-primary)", letterSpacing: "-0.02em" }}
        >
          {band.headline}
        </p>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {band.summary}
        </p>
      </div>

      {/* Patterns */}
      <div className="mb-8">
        <h3
          className="text-xs font-mono uppercase tracking-widest mb-4"
          style={{ color: "var(--color-text-muted)" }}
        >
          What This Usually Looks Like
        </h3>
        <ul className="flex flex-col gap-3">
          {band.patterns.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span
                className="mt-1 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs"
                style={{
                  background: "rgba(200, 241, 53, 0.12)",
                  color: "var(--color-accent)",
                }}
              >
                ✓
              </span>
              <span style={{ color: "var(--color-text-secondary)" }}>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Revenue framing */}
      <div
        className="rounded-sm p-6 mb-8"
        style={{
          border: "1px solid var(--color-border)",
          background: "var(--color-surface)",
        }}
      >
        <p
          className="text-xs font-mono uppercase tracking-widest mb-3"
          style={{ color: "var(--color-text-muted)" }}
        >
          Revenue Context
        </p>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {band.revenueFraming}
        </p>
      </div>

      {/* CTA */}
      <div
        className="rounded-sm p-8 mb-8"
        style={{
          border: "1px solid var(--color-border)",
          background: "var(--color-surface)",
        }}
      >
        <h3
          className="heading-md mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          Ready to talk about what this means for your operation?
        </h3>
        <p
          className="text-sm mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          A Fit Call is a 30-minute operational conversation. Not a pitch, not a
          demo. We look at your intake system together and decide if there is a fit.
        </p>
        <Button href={band.ctaHref} variant={band.ctaVariant} size="lg">
          {band.ctaText}
        </Button>
      </div>

      {/* Optional email capture */}
      <div
        className="rounded-sm p-8"
        style={{ border: "1px solid var(--color-border)" }}
      >
        <h3
          className="text-sm font-medium mb-1"
          style={{ color: "var(--color-text-primary)" }}
        >
          Get these results in your inbox
        </h3>
        <p
          className="text-sm mb-5"
          style={{ color: "var(--color-text-muted)" }}
        >
          Optional. We will send your score, band, and a short breakdown. No
          drip campaigns.
        </p>

        {emailStatus === "sent" ? (
          <p
            className="text-sm"
            style={{ color: "var(--color-accent)" }}
          >
            Sent. Check your inbox.
          </p>
        ) : (
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 text-sm rounded-sm w-full"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-primary)",
                outline: "none",
              }}
            />
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-3 text-sm rounded-sm flex-1"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-primary)",
                  outline: "none",
                }}
              />
              <Button
                type="submit"
                variant="secondary"
                size="md"
                disabled={emailStatus === "loading"}
              >
                {emailStatus === "loading" ? "Sending..." : "Send Results"}
              </Button>
            </div>
            {emailStatus === "error" && (
              <p className="text-xs" style={{ color: "#f87171" }}>
                Something went wrong. Try again or skip this step.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
