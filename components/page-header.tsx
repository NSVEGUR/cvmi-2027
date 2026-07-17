import Image from "next/image";

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
    <header className={cn("relative overflow-hidden border-b border-border", className)}>
      <Image
        src="/images/campus-header.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <SectionEyebrow className="text-white/70">{eyebrow}</SectionEyebrow>
        <h1 className="mt-3 max-w-3xl font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-balance text-white/80 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
