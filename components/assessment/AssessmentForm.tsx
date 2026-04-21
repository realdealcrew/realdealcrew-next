"use client";

import { useState } from "react";
import { questions } from "./questions";
import { getBandByScore } from "./bandConfig";
import ResultsBand from "./ResultsBand";
import Button from "@/components/ui/Button";

export default function AssessmentForm() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[current];
  const total = questions.length;
  const progress = ((current) / total) * 100;

  function handleSelect(value: number) {
    setSelected(value);
  }

  function handleNext() {
    if (selected === null) return;
    const updated = { ...answers, [question.id]: selected };
    setAnswers(updated);

    if (current + 1 < total) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      const total_score = Object.values(updated).reduce((a, b) => a + b, 0);
      setScore(total_score);
      setCompleted(true);
    }
  }

  function handleBack() {
    if (current === 0) return;
    setCurrent(current - 1);
    setSelected(answers[questions[current - 1].id] ?? null);
  }

  if (completed) {
    return <ResultsBand score={score} band={getBandByScore(score)} />;
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-mono"
            style={{ color: "var(--color-text-muted)" }}
          >
            Question {current + 1} of {total}
          </span>
          <span
            className="text-xs font-mono"
            style={{ color: "var(--color-text-muted)" }}
          >
            {Math.round(progress)}% complete
          </span>
        </div>
        <div
          className="h-0.5 w-full rounded-full overflow-hidden"
          style={{ background: "var(--color-border)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: "var(--color-accent)",
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <p
          className="text-xl font-medium leading-snug"
          style={{
            color: "var(--color-text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          {question.text}
        </p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3 mb-10">
        {question.options.map((opt) => {
          const isSelected = selected === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className="text-left px-5 py-4 rounded-sm text-sm transition-all"
              style={{
                border: isSelected
                  ? "1px solid var(--color-accent)"
                  : "1px solid var(--color-border)",
                background: isSelected
                  ? "rgba(200, 241, 53, 0.06)"
                  : "var(--color-surface)",
                color: isSelected
                  ? "var(--color-text-primary)"
                  : "var(--color-text-secondary)",
              }}
            >
              <span
                className="inline-block w-5 h-5 rounded-full border mr-3 align-middle transition-all"
                style={{
                  border: isSelected
                    ? "5px solid var(--color-accent)"
                    : "1px solid var(--color-border)",
                  flexShrink: 0,
                }}
              />
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={current === 0}
          className="text-sm transition-colors disabled:opacity-30"
          style={{ color: "var(--color-text-muted)" }}
        >
          &larr; Back
        </button>

        <Button
          onClick={handleNext}
          disabled={selected === null}
          variant="primary"
          size="md"
        >
          {current + 1 === total ? "See My Results" : "Next"}
        </Button>
      </div>
    </div>
  );
}
