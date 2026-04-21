import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "RealDealCrew — Fractional Deal Operations for Real Estate Investors",
    template: "%s | RealDealCrew",
  },
  description:
    "RealDealCrew builds, runs, and optimizes the front-end deal intake system so investors can focus on closing and dispositions. Not software. Not acquisitions. Fractional Deal Operations.",
  keywords: [
    "fractional deal operations",
    "real estate investor operations",
    "deal intake system",
    "lead follow-up automation",
    "real estate CRM operations",
  ],
  openGraph: {
    title: "RealDealCrew — Fractional Deal Operations",
    description:
      "We run the system. You close the deals. Fractional Deal Operations for real estate investors.",
    url: "https://realdealcrew.com",
    siteName: "RealDealCrew",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RealDealCrew — Fractional Deal Operations",
    description: "We run the system. You close the deals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
