import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { ImportantDate } from "@/lib/data/dates";

export function DatesTimeline({ dates }: { dates: ImportantDate[] }) {
  return (
    <ol className="relative border-l-2 border-border pl-6 sm:pl-8">
      {dates.map((item, index) => (
        <li
          key={`${item.label}-${item.date}-${index}`}
          className={cn("relative pb-9 last:pb-0", item.isConferenceDate && "pt-1")}
        >
          <span
            aria-hidden
            className={cn(
              "absolute top-1 h-3 w-3 rounded-full border-2 bg-background",
              "-left-[31px] sm:-left-[39px]",
              item.isConferenceDate ? "border-brand-accent bg-brand-accent" : "border-brand-accent"
            )}
          />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
            <span className="font-mono text-sm font-medium text-brand-accent-ink">
              {item.date}
            </span>
            {item.round ? (
              <Badge variant="outline" className="font-mono text-[10px] tracking-wide">
                {item.round}
              </Badge>
            ) : null}
          </div>
          <p
            className={cn(
              "mt-1.5",
              item.isConferenceDate
                ? "font-heading text-xl font-medium tracking-tight"
                : "font-medium text-foreground"
            )}
          >
            {item.label}
          </p>
        </li>
      ))}
    </ol>
  );
}
