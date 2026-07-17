import { CalendarDays, FileText, Landmark, MapPin } from "lucide-react";

import { conferenceDates } from "@/lib/data/dates";

const items = [
  { icon: CalendarDays, label: conferenceDates },
  { icon: MapPin, label: "IIITDM Kancheepuram, Chennai" },
  { icon: FileText, label: "Accepted papers submitted to IEEE Xplore" },
  { icon: Landmark, label: "6th edition of CVMI" },
];

function TickerItems() {
  return (
    <>
      {items.map((item, index) => (
        <span key={index} className="flex shrink-0 items-center gap-2 px-6 font-mono text-xs sm:text-sm">
          <item.icon className="size-3.5 shrink-0 text-brand-accent-ink" strokeWidth={2} />
          <span className="whitespace-nowrap text-foreground/80">{item.label}</span>
        </span>
      ))}
    </>
  );
}

export function FactTicker() {
  return (
    <div className="overflow-hidden border-b border-border bg-secondary/50 py-2.5">
      <div className="flex w-max animate-marquee">
        <div className="flex shrink-0">
          <TickerItems />
        </div>
        <div className="flex shrink-0" aria-hidden>
          <TickerItems />
        </div>
      </div>
    </div>
  );
}
