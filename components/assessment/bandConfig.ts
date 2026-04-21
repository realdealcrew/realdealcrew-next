export type BandKey =
  | "founder-dependent-chaos"
  | "functional-but-fragile"
  | "operationally-sound"
  | "rare-ops-maturity";

export interface Band {
  key: BandKey;
  name: string;
  scoreRange: [number, number];
  tagName: string; // HighLevel tag
  headline: string;
  summary: string;
  patterns: string[];
  revenueFraming: string;
  ctaText: string;
  ctaHref: string;
  ctaVariant: "primary" | "secondary";
  emailSubject: string;
  emailIntro: string;
}

export const bands: Band[] = [
  {
    key: "founder-dependent-chaos",
    scoreRange: [0, 9],
    name: "Founder-Dependent Chaos",
    tagName: "Band – Founder-Dependent Chaos",
    headline: "Your operation runs on memory — and it's costing you deals.",
    summary:
      "Right now, your deal flow depends on you showing up and manually managing every step. There is no system holding things together — there is only your attention. When that attention slips, deals slip with it.",
    patterns: [
      "Leads tracked in your head or on a whiteboard",
      "Follow-up happens when you remember to do it",
      "No clear view of which conversations are active",
      "Response time measured in hours, not minutes",
      "Deals lost to silence, not competition",
    ],
    revenueFraming:
      "At this stage, every missed follow-up is a missed deal. Speed-to-lead alone can be the difference between closing and losing an opportunity you already paid to generate.",
    ctaText: "Book a Fit Call",
    ctaHref: "/book",
    ctaVariant: "primary",
    emailSubject: "Your Deal Intake Assessment Results — Founder-Dependent Chaos",
    emailIntro:
      "Your results show an operation that runs on your personal attention rather than a system. That works until it doesn't — and the cost is usually invisible until a deal falls through.",
  },
  {
    key: "functional-but-fragile",
    scoreRange: [10, 18],
    name: "Functional but Fragile",
    tagName: "Band – Functional but Fragile",
    headline: "Your system works — until pressure hits.",
    summary:
      "You have some structure in place. Leads get captured, follow-up happens most of the time, and you have a rough sense of your pipeline. But it is fragile. A busy week, a new deal source, or a team change and the wheels start to come off.",
    patterns: [
      "CRM is set up but not consistently used",
      "Follow-up sequences exist but have gaps or fall off",
      "Response time varies depending on how busy you are",
      "Visibility into pipeline requires manual digging",
      "Bottlenecks move around — hard to pin down the real problem",
    ],
    revenueFraming:
      "Fragile systems look fine until volume increases. The deals you lose here are the ones that required a second or third touch — the follow-up that almost happened but did not.",
    ctaText: "Book a Fit Call",
    ctaHref: "/book",
    ctaVariant: "primary",
    emailSubject: "Your Deal Intake Assessment Results — Functional but Fragile",
    emailIntro:
      "Your results show a system that works under normal conditions but has not been stress-tested. The cracks show up when volume increases or your attention shifts.",
  },
  {
    key: "operationally-sound",
    scoreRange: [19, 27],
    name: "Operationally Sound, Not Optimized",
    tagName: "Band – Operationally Sound, Not Optimized",
    headline: "Your foundation is solid. The ceiling is higher than you think.",
    summary:
      "Your operation runs. Leads are captured, follow-up is mostly automated, and you have real visibility into your pipeline. You are not losing deals to chaos. But you are leaving performance on the table by not having someone actively optimizing what you have built.",
    patterns: [
      "Core intake and follow-up is automated and reliable",
      "Pipeline visibility is solid but reporting could be sharper",
      "Speed-to-lead is good but not consistently measured",
      "Lead source attribution is partial or inconsistent",
      "The system runs — but no one is actively improving it",
    ],
    revenueFraming:
      "At this stage, the gains come from optimization, not repair. Tighter response time tracking, sharper follow-up sequences, and cleaner reporting can meaningfully move conversion rates without adding new tools.",
    ctaText: "Book a Fit Call",
    ctaHref: "/book",
    ctaVariant: "primary",
    emailSubject:
      "Your Deal Intake Assessment Results — Operationally Sound, Not Optimized",
    emailIntro:
      "Your results show a mature operation that has the right pieces in place. The opportunity now is optimization — extracting more performance from the infrastructure you have already built.",
  },
  {
    key: "rare-ops-maturity",
    scoreRange: [28, 36],
    name: "Rare Ops Maturity",
    tagName: "Band – Rare Ops Maturity",
    headline: "You are running one of the tightest operations in the space.",
    summary:
      "Your deal intake is structured, automated, and measured. You know where leads come from, how fast they are contacted, and where deals stall. This level of operational clarity is rare. Most investors at your closing volume are still running on chaos.",
    patterns: [
      "Lead intake is fully automated and consistently monitored",
      "Follow-up sequences run without manual intervention",
      "Speed-to-lead is tracked and within target range",
      "Pipeline visibility is real-time and accurate",
      "Reporting drives decisions, not just documentation",
    ],
    revenueFraming:
      "At this level, the question is not whether your system works — it is whether someone is actively maintaining and improving it as your volume scales. Operational drift is the risk, not operational failure.",
    ctaText: "See If There Is a Fit",
    ctaHref: "/book",
    ctaVariant: "secondary",
    emailSubject: "Your Deal Intake Assessment Results — Rare Ops Maturity",
    emailIntro:
      "Your results show an operation in the top tier of what we see across the investors we work with. That is not common. The value of a conversation is not fixing problems — it is making sure what you have built keeps performing as you scale.",
  },
];

export function getBandByScore(score: number): Band {
  return (
    bands.find((b) => score >= b.scoreRange[0] && score <= b.scoreRange[1]) ??
    bands[0]
  );
}
