"use client";

import { useEffect, useState } from "react";

const CONFERENCE_START = new Date("2027-06-17T09:00:00+05:30").getTime();

function getRemaining() {
  const diff = Math.max(0, CONFERENCE_START - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const units: { key: keyof ReturnType<typeof getRemaining>; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hrs" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Sec" },
];

export function Countdown({ className }: { className?: string }) {
  const [remaining, setRemaining] = useState<ReturnType<typeof getRemaining> | null>(null);

  useEffect(() => {
    setRemaining(getRemaining());
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={className}>
      <div className="flex items-center gap-2 sm:gap-3">
        {units.map((unit) => (
          <div
            key={unit.key}
            className="flex w-14 flex-col items-center rounded-lg border border-border bg-card/80 py-2 shadow-xs sm:w-16"
          >
            <span className="font-mono text-xl font-medium tabular-nums text-brand-accent-ink sm:text-2xl">
              {remaining ? remaining[unit.key].toString().padStart(2, "0") : "--"}
            </span>
            <span className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
