import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "var(--color-background)" }}
    >
      <div className="max-w-sm text-center">
        <span
          className="text-xs font-mono uppercase tracking-widest mb-4 block"
          style={{ color: "var(--color-text-muted)" }}
        >
          404
        </span>
        <h1
          className="text-2xl font-semibold mb-3"
          style={{ color: "var(--color-text-primary)", letterSpacing: "-0.02em" }}
        >
          Page not found.
        </h1>
        <p
          className="text-sm mb-8 leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          This page doesn't exist. Head back to the home page or take the Deal
          Intake Assessment.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 text-sm rounded-sm transition-opacity hover:opacity-80"
            style={{
              background: "var(--color-accent)",
              color: "#000",
              fontWeight: 500,
            }}
          >
            Go Home
          </Link>
          <Link
            href="/assessment"
            className="px-5 py-2.5 text-sm rounded-sm transition-opacity hover:opacity-80"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
            }}
          >
            Take the Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
