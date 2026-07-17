"use client";

import { motion } from "framer-motion";

import { FocusFrame } from "@/components/focus-frame";
import { SectionEyebrow } from "@/components/section-eyebrow";

export function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-mesh-glow relative overflow-hidden">
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -right-24 top-0 size-80 rounded-full bg-brand-accent/15 blur-3xl"
      />
      <motion.div
        className="relative mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center sm:py-36"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <FocusFrame inset="-10px" className="mb-8 px-8 py-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Status
          </span>
          <p className="mt-1 font-heading text-lg font-medium">Details coming soon</p>
        </FocusFrame>
        <SectionEyebrow>{title}</SectionEyebrow>
        <h1 className="mt-3 font-heading text-3xl font-medium tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-balance text-muted-foreground">{description}</p>
      </motion.div>
    </div>
  );
}
