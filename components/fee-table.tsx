import { cn } from "@/lib/utils";
import type { FeeRow } from "@/lib/data/fees";

export function FeeTable({ title, rows }: { title: string; rows: FeeRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/50">
      <div className="border-b border-border bg-secondary/40 px-4 py-3 sm:px-5">
        <h3 className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          {title}
        </h3>
      </div>

      {/* sm+ : classic table row */}
      <div className="hidden sm:block">
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-2.5 text-sm font-medium text-foreground/90">
          <span>Category</span>
          <span className="flex shrink-0 gap-10">
            <span className="w-24 text-right">Early</span>
            <span className="w-24 text-right">Late</span>
          </span>
        </div>
        <div className="divide-y divide-black/50">
          {rows.map((row, index) => (
            <div
              key={row.category}
              className={cn(
                "flex items-center justify-between gap-4 px-5 py-3",
                index % 2 === 1 && "bg-accent/40",
              )}
            >
              <span className="text-sm font-medium">{row.category}</span>
              <span className="flex shrink-0 gap-10">
                <span className="w-24 text-right font-mono text-sm font-semibold text-brand-accent-ink">
                  {row.early}
                </span>
                <span className="w-24 text-right font-mono text-sm font-semibold text-brand-accent-ink">
                  {row.late}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* mobile: stacked card per row, no horizontal scroll */}
      <div className="divide-y divide-black/50 sm:hidden">
        {rows.map((row, index) => (
          <div
            key={row.category}
            className={cn("px-4 py-3", index % 2 === 1 && "bg-accent/40")}
          >
            <p className="text-sm font-medium leading-snug">{row.category}</p>
            <div className="mt-2 flex gap-3">
              <div className="flex-1 rounded-lg bg-card/60 px-3 py-1.5 ring-1 ring-black/[0.04]">
                <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                  Early
                </p>
                <p className="font-mono text-sm font-semibold text-brand-accent-ink">
                  {row.early}
                </p>
              </div>
              <div className="flex-1 rounded-lg bg-card/60 px-3 py-1.5 ring-1 ring-black/[0.04]">
                <p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                  Late
                </p>
                <p className="font-mono text-sm font-semibold text-brand-accent-ink">
                  {row.late}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
