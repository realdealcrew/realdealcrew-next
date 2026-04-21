"use client";

import { useEffect } from "react";

// Replace this with your actual TidyCal slug from your account
// e.g. if your booking URL is https://tidycal.com/realdealcrew/fit-call
// then TIDYCAL_SLUG = "realdealcrew/fit-call"
const TIDYCAL_SLUG =
  process.env.NEXT_PUBLIC_TIDYCAL_SLUG ?? "realdealcrew/fit-call";

export default function TidyCalEmbed() {
  useEffect(() => {
    // Load TidyCal embed script
    if (document.querySelector('script[src*="tidycal"]')) return;
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{ border: "1px solid var(--color-border)" }}
    >
      {/* TidyCal inline embed */}
      <div
        className="tidycal-embed"
        data-path={TIDYCAL_SLUG}
        style={{ minHeight: "600px" }}
      />
    </div>
  );
}
