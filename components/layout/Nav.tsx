"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/solutions", label: "Solutions" },
  { href: "/assessment", label: "Assessment" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ borderBottom: "1px solid var(--color-border)" }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/RealDealCrew%20Logo%20White.png"
            alt="RealDealCrew"
            width={160}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors"
              style={{
                color:
                  pathname === link.href
                    ? "var(--color-text-primary)"
                    : "var(--color-text-secondary)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/book" className="btn-primary text-sm">
            Book a Fit Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              background: "var(--color-text-primary)",
              transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5"
            style={{
              background: "var(--color-text-primary)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all"
            style={{
              background: "var(--color-text-primary)",
              transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-5"
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm pt-4"
              style={{
                color:
                  pathname === link.href
                    ? "var(--color-text-primary)"
                    : "var(--color-text-secondary)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm text-center mt-2"
          >
            Book a Fit Call
          </Link>
        </div>
      )}
    </header>
  );
}
