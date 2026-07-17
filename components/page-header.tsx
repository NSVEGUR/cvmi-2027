"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <Image
          src="/images/campus-header.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <SectionEyebrow className="text-white/70">{eyebrow}</SectionEyebrow>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-balance text-white/80 sm:text-lg">
              {description}
            </p>
          ) : null}
        </motion.div>
      </div>
    </header>
  );
}
