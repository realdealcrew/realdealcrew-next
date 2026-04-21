import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Operator-level reads on deal intake, follow-up systems, and real estate operations. Built to help investors understand what's breaking before they try to fix it.",
};

const articles = [
  {
    slug: "#",
    category: "Operations",
    title: "Why Speed-to-Lead Is the Single Most Important Metric in Your Deal Intake",
    excerpt:
      "Most investors track how many leads they get. Very few track how fast they respond to them. That gap is where deals are lost.",
    readTime: "5 min read",
  },
  {
    slug: "#",
    category: "Follow-Up",
    title: "The Follow-Up Falloff Problem — and Why It Kills Deals You Already Paid For",
    excerpt:
      "The average motivated seller contact requires 5–8 touches before a conversation happens. Most investor follow-up stops at 2.",
    readTime: "6 min read",
  },
  {
    slug: "#",
    category: "Systems",
    title: "What a Managed Operating System Actually Looks Like — vs. a CRM You Configured Once",
    excerpt:
      "There is a difference between a tool that exists and a system that runs. Most investors have the former and think they have the latter.",
    readTime: "7 min read",
  },
  {
    slug: "#",
    category: "Operations",
    title: "The 4 Stages of Deal Intake Maturity — and Where Most Operators Actually Land",
    excerpt:
      "From founder-dependent chaos to rare ops maturity. An honest breakdown of the four operational stages we see across investor businesses.",
    readTime: "8 min read",
  },
  {
    slug: "#",
    category: "Scaling",
    title: "When to Stop Doing Your Own Follow-Up — A Framework for Operator Delegation",
    excerpt:
      "The question isn't whether your follow-up is working. It's whether you should still be the one doing it.",
    readTime: "5 min read",
  },
  {
    slug: "#",
    category: "Systems",
    title: "Pipeline Visibility Is Not Reporting — Why Most Investors Are Flying Blind",
    excerpt:
      "Knowing how many deals are in your pipeline is not the same as knowing which ones are moving. Here's the difference that matters.",
    readTime: "6 min read",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <Section style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <span className="label-pill mb-6 inline-flex">Resources</span>
        <h1 className="heading-xl mb-6 max-w-3xl">
          Operator-level reads on deal intake and operations.
        </h1>
        <p
          className="text-lg max-w-xl leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Built to help investors understand what's breaking before they try to
          fix it. No fluff, no hype — just operational clarity.
        </p>
      </Section>

      <hr className="hr-subtle" />

      {/* Assessment CTA */}
      <Section style={{ background: "var(--color-surface)" }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="heading-md mb-2">
              Know where your operation stands before you read further.
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              The Deal Intake Assessment takes 3 minutes and tells you which
              operational band you're in — and what that means for your deal
              flow.
            </p>
          </div>
          <Button href="/assessment" variant="primary" size="md">
            Take the Assessment
          </Button>
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* Articles */}
      <Section>
        <div className="mb-10">
          <span className="label-pill mb-4 inline-flex">Articles</span>
          <h2 className="heading-lg">Latest from the operation.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.title}
              href={article.slug}
              className="group block p-7 rounded-sm transition-colors"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-mono uppercase tracking-widest"
                  style={{ color: "var(--color-accent)" }}
                >
                  {article.category}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {article.readTime}
                </span>
              </div>
              <h3
                className="text-base font-medium mb-3 leading-snug group-hover:text-accent transition-colors"
                style={{ color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}
              >
                {article.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {article.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <hr className="hr-subtle" />

      {/* CTA */}
      <Section>
        <div className="max-w-xl">
          <h2 className="heading-lg mb-4">
            Ready to see where your intake system stands?
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            The assessment is the fastest way to get operational clarity. Results
            are immediate and ungated.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/assessment" variant="primary" size="lg">
              Take the Assessment
            </Button>
            <Button href="/book" variant="secondary" size="lg">
              Book a Fit Call
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
