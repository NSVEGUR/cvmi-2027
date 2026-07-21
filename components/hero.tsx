import Link from "next/link";

import { Button } from "@/components/ui/button";
import { FocusFrame } from "@/components/focus-frame";
import { DetectionOverlay } from "@/components/detection-overlay";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { CampusTourDialog } from "@/components/campus-tour-dialog";
import {
  HeroStagger,
  HeroItem,
  HeroImageFrame,
} from "@/components/hero-motion";
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
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
          <HeroStagger className="flex w-full min-w-0 flex-col items-start">
            <HeroItem className="w-full min-w-0">
              <p className="font-mono text-xs uppercase tracking-normal text-brand-warm-ink font-bold sm:tracking-[0.2em] sm:text-sm">
                6<sup className="text-[0.65em]">th</sup> IEEE International
                Conference on
              </p>
            </HeroItem>

            <HeroItem className="mt-3">
              <h1 className="text-gradient-brand font-heading text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
                Computer Vision
                <br />
                &amp; Machine Intelligence
              </h1>
            </HeroItem>

            <HeroItem className="mt-5 flex flex-wrap items-baseline gap-3">
              <span className="font-mono text-lg font-semibold text-brand-accent-ink sm:text-xl">
                {conferenceDates}
              </span>
            </HeroItem>
            <HeroItem className="mt-1">
              <p className="text-base text-black font-bold">
                {conferenceVenue}
              </p>
            </HeroItem>

            <HeroItem className="mt-6 max-w-xl">
              <p className="text-balance text-base text-muted-foreground">
                An international IEEE technically sponsored conference bringing
                together researchers, academicians, industry experts, and
                students to share advancements in computer vision, machine
                intelligence, and artificial intelligence.
              </p>
            </HeroItem>

            <HeroItem className="mt-10 flex flex-col gap-3">
              <CampusTourDialog />
              <div className="flex flex-wrap gap-3">
                <Button
                  render={<Link href="/call-for-papers" />}
                  nativeButton={false}
                  size="lg"
                  className="px-6 shadow-md shadow-brand-accent/20 transition-shadow hover:shadow-lg hover:shadow-brand-accent/30"
                >
                  Submit a paper
                </Button>
                <Button
                  render={<Link href="/registration" />}
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="px-6"
                >
                  Register
                </Button>
              </div>
            </HeroItem>
          </HeroStagger>

          <HeroImageFrame>
            <FocusFrame inset="-10px" tone="accent">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border shadow-xl shadow-brand-accent/10">
                <HeroSlideshow />
                <DetectionOverlay />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md border border-white/25 bg-black/45 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-white backdrop-blur-sm">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  Host campus
                </span>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <span className="font-mono text-xs text-white">
                    IIITDM Kancheepuram
                  </span>
                  <span className="font-mono text-[10px] text-white/70">
                    Chennai, IN
                  </span>
                </div>
              </div>
            </FocusFrame>
          </HeroImageFrame>
        </div>
      </FocusFrame>
    </section>
  );
}
