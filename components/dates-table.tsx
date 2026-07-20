import { cn } from "@/lib/utils";
import type { DateTableRow } from "@/lib/data/dates";

export function DatesTable({ rows }: { rows: DateTableRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="divide-y divide-border">
        {rows.map((row, index) => {
          const stripe = index % 2 === 1;
          if (row.type === "single") {
            return (
              <div
                key={row.label}
                className={cn(
                  "flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-4",
                  stripe && "bg-accent/40",
                  row.emphasis && "bg-brand-accent/10"
                )}
              >
                <span
                  className={cn(
                    "font-medium",
                    row.emphasis && "font-heading text-base"
                  )}
                >
                  {row.label}
                </span>
                <span
                  className={cn(
                    "font-mono text-sm font-semibold text-brand-accent-ink",
                    row.emphasis && "text-base"
                  )}
                >
                  {row.date}
                </span>
              </div>
            );
          }

          return (
            <div
              key={row.round}
              className={cn("flex flex-col sm:flex-row", stripe && "bg-accent/40")}
            >
              <div className="shrink-0 px-5 py-4 font-heading text-sm font-medium text-brand-accent-ink sm:w-40 sm:border-r sm:border-border">
                {row.round}
              </div>
              <div className="flex-1 divide-y divide-border/70 border-t border-border/70 sm:border-t-0">
                {row.rows.map((sub) => (
                  <div
                    key={sub.label}
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-3"
                  >
                    <span className="text-sm text-foreground/90">{sub.label}</span>
                    <span className="font-mono text-sm font-medium text-brand-accent-ink">
                      {sub.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
