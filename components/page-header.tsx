import { cn } from "@/lib/utils";
import { SectionEyebrow } from "@/components/section-eyebrow";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "bg-blueprint-grid border-b border-border bg-secondary/40 px-6 py-16 sm:py-20",
        className
      )}
    >
      <div className="mx-auto max-w-5xl">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="mt-3 max-w-3xl font-heading text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-balance text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
