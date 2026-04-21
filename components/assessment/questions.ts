export interface Question {
  id: number;
  text: string;
  options: { label: string; value: number }[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "When a seller calls your main number, what typically happens?",
    options: [
      { label: "It goes to my personal cell and I answer when I can", value: 0 },
      { label: "It goes to voicemail most of the time", value: 1 },
      { label: "We have a system that answers and qualifies them", value: 2 },
      { label: "An AI or team member answers 24/7 and routes them instantly", value: 3 },
    ],
  },
  {
    id: 2,
    text: "How fast does your first follow-up typically go out after a new lead comes in?",
    options: [
      { label: "When I get to it — could be hours or the next day", value: 0 },
      { label: "Within a few hours if I remember", value: 1 },
      { label: "Within 30 minutes most of the time", value: 2 },
      { label: "Within 5 minutes, automatically", value: 3 },
    ],
  },
  {
    id: 3,
    text: "Where do your leads live after they come in?",
    options: [
      { label: "Mostly in my head or a notepad", value: 0 },
      { label: "Scattered across email, voicemail, and maybe a spreadsheet", value: 1 },
      { label: "In a CRM, but it is not always up to date", value: 2 },
      { label: "In a CRM that is accurate and actively managed", value: 3 },
    ],
  },
  {
    id: 4,
    text: "How does your follow-up work for leads that did not respond the first time?",
    options: [
      { label: "I follow up manually if I remember", value: 0 },
      { label: "I try to follow up but it falls off after one or two attempts", value: 1 },
      { label: "We have a sequence but it is not consistent", value: 2 },
      { label: "Automated sequences run without any manual effort", value: 3 },
    ],
  },
  {
    id: 5,
    text: "How do appointments get booked with motivated sellers?",
    options: [
      { label: "Phone tag and back-and-forth scheduling by hand", value: 0 },
      { label: "I send my availability manually each time", value: 1 },
      { label: "We have a scheduling link but it is not fully integrated", value: 2 },
      { label: "Automated scheduling synced directly to the calendar", value: 3 },
    ],
  },
  {
    id: 6,
    text: "How much visibility do you have into your active pipeline right now?",
    options: [
      { label: "I could not tell you off the top of my head", value: 0 },
      { label: "I have a rough idea but would need to dig through messages", value: 1 },
      { label: "I can check a CRM but it requires manual updating", value: 2 },
      { label: "Real-time view, always current, no manual effort", value: 3 },
    ],
  },
  {
    id: 7,
    text: "Do you know which lead sources are actually producing closed deals?",
    options: [
      { label: "Not really — I just know what I am paying for", value: 0 },
      { label: "I have a rough sense but it is not tracked precisely", value: 1 },
      { label: "We track it but the data has gaps", value: 2 },
      { label: "Yes — source-to-close attribution is clear and current", value: 3 },
    ],
  },
  {
    id: 8,
    text: "What happens to a lead that goes cold after initial contact?",
    options: [
      { label: "It disappears — I usually move on", value: 0 },
      { label: "I try to circle back but there is no system for it", value: 1 },
      { label: "There is a re-engagement sequence but it is not always triggered", value: 2 },
      { label: "Automated long-term nurture runs in the background", value: 3 },
    ],
  },
  {
    id: 9,
    text: "How does your operation hold up when you are traveling, on a deal, or unavailable?",
    options: [
      { label: "Things fall through the cracks — it depends on me", value: 0 },
      { label: "Someone covers but it is inconsistent", value: 1 },
      { label: "Most things run but some gaps appear", value: 2 },
      { label: "The system runs without me — nothing stops", value: 3 },
    ],
  },
  {
    id: 10,
    text: "How do you qualify whether a seller lead is worth your time before you get on the phone?",
    options: [
      { label: "I find out on the call — or after wasting time on a dead lead", value: 0 },
      { label: "I ask a few questions manually before committing", value: 1 },
      { label: "We have intake questions but they are not always used", value: 2 },
      { label: "Automated pre-qualification screens every lead before it reaches me", value: 3 },
    ],
  },
  {
    id: 11,
    text: "How often do you review performance data on your deal intake — response time, conversion rates, pipeline health?",
    options: [
      { label: "Almost never — I do not have that data", value: 0 },
      { label: "Occasionally, when something feels off", value: 1 },
      { label: "Monthly or quarterly, manually compiled", value: 2 },
      { label: "Weekly, from a live dashboard", value: 3 },
    ],
  },
  {
    id: 12,
    text: "How would you describe the overall state of your deal intake right now?",
    options: [
      { label: "Chaotic — it is held together by my personal effort", value: 0 },
      { label: "Functional but fragile — a busy week breaks it", value: 1 },
      { label: "Solid but unoptimized — it runs, it just does not improve", value: 2 },
      { label: "Tight and measured — I know exactly what is happening", value: 3 },
    ],
  },
];
