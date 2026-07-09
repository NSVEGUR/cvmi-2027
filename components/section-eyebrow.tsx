import { cn } from "@/lib/utils";

export function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-accent-ink",
        className
      )}
    >
      <span aria-hidden>[</span>
      <span>{children}</span>
      <span aria-hidden>]</span>
    </div>
  );
}
