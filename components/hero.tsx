import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FocusFrame } from "@/components/focus-frame";
import { Countdown } from "@/components/countdown";
import { DetectionOverlay } from "@/components/detection-overlay";
import { HeroStagger, HeroItem, HeroImageFrame } from "@/components/hero-motion";
import { conferenceDates, conferenceVenue } from "@/lib/data/dates";

export function Hero() {
  return (
    <section className="bg-blueprint-grid bg-mesh-glow relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -right-32 -top-32 size-[26rem] rounded-full bg-brand-accent/20 blur-3xl sm:size-[34rem]"
      />
      <div
        aria-hidden
        className="animate-float-slower pointer-events-none absolute -left-40 bottom-0 size-72 rounded-full bg-fuchsia-400/15 blur-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

      <FocusFrame inset="14px" tone="muted" className="relative">
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
          <HeroStagger className="flex flex-col items-start">
            <HeroItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-accent/60 px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-accent-ink">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-accent-ink/60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand-accent-ink" />
                </span>
                6th Edition &middot; IEEE
              </span>
            </HeroItem>

            <HeroItem className="mt-5">
              <h1 className="font-heading text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
                Computer Vision
                <br />
                <span className="text-gradient-brand">&amp; Machine Intelligence</span>
              </h1>
            </HeroItem>

            <HeroItem className="mt-6 max-w-xl">
              <p className="text-balance text-lg text-muted-foreground">
                CVMI 2027 brings together researchers, academicians, and industry
                practitioners advancing the state of the art in vision and
                intelligent systems &mdash; three days of papers, posters, a PhD
                symposium, and keynote talks.
              </p>
            </HeroItem>

            <HeroItem className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
              <FocusFrame inset="-10px" tone="accent" className="px-6 py-4">
                <div className="flex flex-col gap-1 font-mono text-sm sm:flex-row sm:items-center sm:gap-4">
                  <span className="font-medium">{conferenceDates}</span>
                  <span className="hidden text-border sm:inline">/</span>
                  <span className="text-muted-foreground">{conferenceVenue}</span>
                </div>
              </FocusFrame>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Counting down to Day 1
                </p>
                <Countdown className="mt-2" />
              </div>
            </HeroItem>

            <HeroItem className="mt-10 flex flex-wrap gap-3">
              <Button render={<Link href="/call-for-papers" />} nativeButton={false} size="lg" className="px-6 shadow-md shadow-brand-accent/20 transition-shadow hover:shadow-lg hover:shadow-brand-accent/30">
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
            </HeroItem>
          </HeroStagger>

          <HeroImageFrame>
            <FocusFrame inset="-10px" tone="accent">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border shadow-xl shadow-brand-accent/10">
                <Image
                  src="/images/campus.webp"
                  alt="IIITDM Kancheepuram campus"
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
                <DetectionOverlay />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-white/25 bg-black/45 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-white backdrop-blur-sm">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Host campus
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <span className="font-mono text-xs text-white">IIITDM Kancheepuram</span>
                  <span className="font-mono text-[10px] text-white/70">Chennai, IN</span>
                </div>
              </div>
            </FocusFrame>
          </HeroImageFrame>
        </div>
      </FocusFrame>
    </section>
  );
}
