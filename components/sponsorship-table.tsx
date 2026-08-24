import { cn } from "@/lib/utils";
import type { SponsorshipTier } from "@/lib/data/sponsorship";

const featureColumns: {
  key: keyof Pick<
    SponsorshipTier,
    "websiteBranding" | "brochureBranding" | "industrySession" | "breakBranding"
  >;
  label: string;
}[] = [
  { key: "websiteBranding", label: "Website branding" },
  { key: "brochureBranding", label: "Brochure branding" },
  { key: "industrySession", label: "Industry session" },
  { key: "breakBranding", label: "Branding during breaks" },
];

function FeatureMark({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        "font-mono text-xs font-semibold uppercase tracking-wide",
        active ? "text-brand-accent-ink" : "text-muted-foreground/50",
      )}
    >
      {active ? "Yes" : "No"}
    </span>
  );
}

export function SponsorshipTable({ rows }: { rows: SponsorshipTier[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {/* sm+ : scrollable table */}
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/40 text-left">
              <th className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Tier
              </th>
              <th className="px-4 py-3 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Fund
              </th>
              <th className="px-4 py-3 text-center font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Passes
              </th>
              <th className="px-4 py-3 text-center font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Table/Stall
              </th>
              {featureColumns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-center font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, index) => (
              <tr key={row.tier} className={cn(index % 2 === 1 && "bg-accent/40")}>
                <td className="px-5 py-3 font-medium text-foreground">
                  {row.tier}
                </td>
                <td className="px-4 py-3 font-mono text-sm font-semibold text-brand-accent-ink">
                  {row.fund}
                </td>
                <td className="px-4 py-3 text-center">{row.passes}</td>
                <td className="px-4 py-3 text-center text-muted-foreground">
                  {row.stall}
                </td>
                {featureColumns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-center">
                    <FeatureMark active={row[col.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* mobile: stacked cards, no horizontal scroll */}
      <div className="divide-y divide-border sm:hidden">
        {rows.map((row, index) => (
          <div
            key={row.tier}
            className={cn("px-4 py-4", index % 2 === 1 && "bg-accent/40")}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-heading text-sm font-medium">{row.tier}</p>
              <p className="font-mono text-sm font-semibold text-brand-accent-ink">
                {row.fund}
              </p>
            </div>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="rounded-full bg-card/60 px-2.5 py-1 ring-1 ring-black/[0.04]">
                {row.passes} pass{row.passes === "1" ? "" : "es"}
              </span>
              <span className="rounded-full bg-card/60 px-2.5 py-1 ring-1 ring-black/[0.04]">
                {row.stall}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {featureColumns.map((col) => (
                <li
                  key={col.key}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <FeatureMark active={row[col.key]} />
                  {col.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
