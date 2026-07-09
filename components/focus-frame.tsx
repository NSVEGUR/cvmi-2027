import { cn } from "@/lib/utils";

const corners = [
  "left-0 top-0 border-l-2 border-t-2",
  "right-0 top-0 border-r-2 border-t-2",
  "left-0 bottom-0 border-l-2 border-b-2",
  "right-0 bottom-0 border-r-2 border-b-2",
];

export function FocusFrame({
  children,
  className,
  bracketClassName,
  tone = "accent",
  inset = "-8px",
}: {
  children: React.ReactNode;
  className?: string;
  bracketClassName?: string;
  tone?: "accent" | "muted";
  inset?: string;
}) {
  const color = tone === "accent" ? "border-brand-accent" : "border-foreground/25";
  return (
    <div className={cn("relative", className)}>
      {corners.map((position) => (
        <span
          key={position}
          aria-hidden
          className={cn("pointer-events-none absolute h-4 w-4", position, color, bracketClassName)}
          style={{
            [position.includes("left") ? "left" : "right"]: inset,
            [position.includes("top") ? "top" : "bottom"]: inset,
          }}
        />
      ))}
      {children}
    </div>
  );
}
