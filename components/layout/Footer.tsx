import Link from "next/link";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/solutions", label: "Solutions" },
  { href: "/assessment", label: "Assessment" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
];

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--color-border)" }}
      className="mt-0"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-semibold text-sm tracking-tight text-text-primary"
              style={{ letterSpacing: "-0.01em" }}
            >
              RealDealCrew
            </Link>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Fractional deal operations for real estate investors.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-text-primary"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div>
            <Link href="/book" className="btn-primary text-sm whitespace-nowrap">
              Book a Fit Call
            </Link>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            &copy; {new Date().getFullYear()} RealDealCrew. All rights reserved.
          </p>
          <Link
            href="/assessment"
            className="text-xs transition-colors"
            style={{ color: "var(--color-text-muted)" }}
          >
            Take the Deal Intake Assessment &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
