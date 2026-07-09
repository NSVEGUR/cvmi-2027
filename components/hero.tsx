import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FocusFrame } from "@/components/focus-frame";
import { conferenceDates, conferenceVenue } from "@/lib/data/dates";

export function Hero() {
  return (
    <section className="bg-blueprint-grid relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-start px-6 py-20 sm:py-28 lg:py-32">
        <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-brand-accent-ink">
          6th Edition &middot; IEEE
        </span>

        <h1 className="mt-5 font-heading text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Computer Vision
          <br />
          &amp; Machine Intelligence
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
          CVMI 2027 brings together researchers, academicians, and industry
          practitioners advancing the state of the art in vision and
          intelligent systems &mdash; three days of papers, posters, a PhD
          symposium, and keynote talks.
        </p>

        <FocusFrame inset="-10px" tone="accent" className="mt-10 px-6 py-4">
          <div className="flex flex-col gap-1 font-mono text-sm sm:flex-row sm:items-center sm:gap-4">
            <span className="font-medium">{conferenceDates}</span>
            <span className="hidden text-border sm:inline">/</span>
            <span className="text-muted-foreground">{conferenceVenue}</span>
          </div>
        </FocusFrame>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button render={<Link href="/call-for-papers" />} nativeButton={false} size="lg" className="px-6">
            Submit a paper
          </Button>
          <Button
            render={<Link href="/registration" />} nativeButton={false}
            variant="outline"
            size="lg"
            className="px-6"
          >
            Register
          </Button>
        </div>
      </div>
    </section>
  );
}
