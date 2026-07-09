import Link from "next/link";
import { ArrowUpRight, BookMarked, GraduationCap, MapPin, Users } from "lucide-react";

import { Hero } from "@/components/hero";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { DatesTimeline } from "@/components/dates-timeline";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { importantDates } from "@/lib/data/dates";
import { topicGroups, cvmiHistory } from "@/lib/data/topics";

const facts = [
  {
    icon: Users,
    title: "In-person, three days",
    description: "Regular papers, posters, and PhD symposium sessions.",
  },
  {
    icon: BookMarked,
    title: "IEEE Xplore",
    description: "Accepted papers submitted for inclusion in IEEE Xplore.",
  },
  {
    icon: GraduationCap,
    title: "PhD Symposium",
    description: "A dedicated track for doctoral research in progress.",
  },
  {
    icon: MapPin,
    title: "Chennai, India",
    description: "Hosted on the IIITDM Kancheepuram campus.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 my-12 mx-6 lg:mx-auto">
          {facts.map((fact) => (
            <div key={fact.title} className="bg-card px-6 py-7">
              <fact.icon className="size-5 text-brand-accent-ink" strokeWidth={1.75} />
              <p className="mt-4 font-heading text-base font-medium">{fact.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{fact.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionEyebrow>About</SectionEyebrow>
            <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight sm:text-3xl">
              A conference that moves with the field
            </h2>
            <p className="mt-4 text-muted-foreground">
              In today&apos;s fast-moving world, AI and ML models are
              everywhere. CVMI brings researchers, academicians, and industry
              experts together each year to discuss advances in computer
              vision, image processing, and machine intelligence. The 6th
              edition is organized by the Department of Computer Science and
              Engineering at IIITDM Kancheepuram.
            </p>
            <Button render={<Link href="/about" />} nativeButton={false} variant="outline" className="mt-6">
              Read the full story
              <ArrowUpRight />
            </Button>
          </div>
          <div>
            <SectionEyebrow>Scope</SectionEyebrow>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {topicGroups.map((group) => (
                <Card key={group.title} size="sm" className="border-border">
                  <CardContent>
                    <p className="font-heading text-sm font-medium">{group.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {group.topics.length} topics
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button render={<Link href="/call-for-papers" />} nativeButton={false} variant="outline" className="mt-3">
              View all topics &amp; submission guidelines
              <ArrowUpRight />
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Timeline</SectionEyebrow>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight sm:text-3xl">
                Important dates
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tentative &mdash; subject to confirmation as the program is finalized.
              </p>
            </div>
            <Button render={<Link href="/important-dates" />} nativeButton={false} variant="outline">
              Full schedule
              <ArrowUpRight />
            </Button>
          </div>
          <div className="mt-10">
            <DatesTimeline dates={importantDates} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionEyebrow>Series</SectionEyebrow>
        <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight sm:text-3xl">
          CVMI, edition by edition
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cvmiHistory.map((edition) => (
            <div
              key={edition.year}
              className={`rounded-lg border px-4 py-3.5 ${
                edition.current
                  ? "border-brand-accent bg-accent/40"
                  : "border-border bg-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">{edition.year}</span>
                {edition.current ? (
                  <span className="font-mono text-[10px] uppercase tracking-wide text-brand-accent-ink">
                    This edition
                  </span>
                ) : null}
              </div>
              <p className="mt-1 font-heading text-sm font-medium">{edition.edition}</p>
              <p className="text-xs text-muted-foreground">{edition.host}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
