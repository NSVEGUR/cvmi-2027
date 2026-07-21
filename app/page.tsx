import Link from "next/link";
import {
  ArrowUpRight,
  BookMarked,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";

import { Hero } from "@/components/hero";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { DatesTable } from "@/components/dates-table";
import { Countdown } from "@/components/countdown";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  conferenceDates,
  dateTableRows,
  reviewProcessNote,
} from "@/lib/data/dates";
import { topicGroups } from "@/lib/data/topics";
import { cn } from "@/lib/utils";

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

      <section className="mx-auto max-w-5xl px-6  py-10">
        <Reveal>
          <div className="grid gap-10 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/60 via-accent/15 to-transparent p-8 shadow-sm sm:grid-cols-2 sm:p-12">
            <div className="flex flex-col items-center text-center sm:border-r sm:border-border/70 sm:pr-10">
              <h2 className="font-heading text-xl font-medium tracking-tight sm:text-2xl">
                About CVMI 2027
              </h2>
              <div className="mt-3 h-0.5 w-14 bg-gradient-to-r from-brand-accent-ink to-brand-accent" />
              <p className="mt-4 text-base text-muted-foreground">
                In today’s fast-moving world, Artificial Intelligence (AI) and
                Machine Learning (ML) models and systems are everywhere.
                Computer Vision, Image Processing, and Machine Intelligence are
                witnessing rapid advancements that have helped industry and
                society. The 6th International Conference on Computer Vision &
                Machine Intelligence (CVMI-2027) will be organized by the
                Department of Computer Science and Engineering at IIITDM
                Kancheepuram from June 17-19, 2027.
              </p>
            </div>
            <div className="flex flex-col items-center text-center sm:pl-10">
              <h2 className="font-heading text-xl font-medium tracking-tight sm:text-2xl">
                Venue
              </h2>
              <div className="mt-3 h-0.5 w-8 bg-gradient-to-r from-brand-accent-ink to-brand-accent" />
              <p className="mt-4 text-base font-medium text-foreground">
                IIITDM Kancheepuram,{" "}
                <span className="text-brand-accent-ink">Chennai</span>
              </p>
              <p className="text-sm text-muted-foreground">600127, India</p>
              <p className="mt-2 font-mono text-sm font-semibold text-brand-accent-ink">
                {conferenceDates}
              </p>
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Counting down to Day 1
                </p>
                <Countdown className="mt-2" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-b border-border bg-secondary/20  py-20">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-brand-accent-ink sm:text-3xl">
              CVMI 2027 Attractions
            </h2>
          </Reveal>
          <RevealGroup
            className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.06}
          >
            {facts.map((fact) => (
              <RevealItem
                key={fact.title}
                className="flex flex-col items-center gap-3 bg-card px-6 py-8 text-center transition-colors hover:bg-brand-accent/5"
              >
                <div className="flex size-14 items-center justify-center rounded-xl border-2 border-brand-accent-ink/60 text-brand-accent-ink">
                  <fact.icon className="size-6" strokeWidth={1.75} />
                </div>
                <p className="font-heading text-sm font-bold text-brand-accent-ink">
                  {fact.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {fact.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <Reveal>
          <SectionEyebrow>Scope</SectionEyebrow>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight sm:text-3xl">
            Conference tracks
          </h2>
        </Reveal>
        <RevealGroup
          className="mt-6 grid items-stretch gap-4 sm:grid-cols-2"
          stagger={0.06}
        >
          {topicGroups.map((group, index) => (
            <RevealItem key={group.title} className="h-full">
              <Card
                size="sm"
                className={cn(
                  "h-full border-border bg-gradient-to-br transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-md hover:shadow-brand-accent/10",
                  index % 2 === 0
                    ? "from-accent/60 via-accent/10 to-transparent"
                    : "from-brand-warm/15 via-brand-warm/5 to-transparent",
                )}
              >
                <CardContent className="flex h-full flex-col">
                  <p className="font-heading text-sm font-bold text-brand-accent-ink">
                    {group.title}
                  </p>
                  <ul className="mt-3 flex flex-1 flex-col gap-1.5 text-sm text-muted-foreground">
                    {group.topics.map((topic) => (
                      <li key={topic} className="flex gap-2">
                        <span aria-hidden className="text-brand-accent-ink">
                          &middot;
                        </span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.1}>
          <Button
            render={<Link href="/call-for-papers" />}
            nativeButton={false}
            variant="outline"
            className="mt-6"
          >
            View all topics &amp; submission guidelines
            <ArrowUpRight />
          </Button>
        </Reveal>
      </section>

      <section className="relative border-y border-border bg-secondary/30">
        <div className="rule-gradient absolute inset-x-0 top-0" aria-hidden />
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Timeline</SectionEyebrow>
              <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight sm:text-3xl">
                Important dates
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Tentative and subject to confirmation as the program is
                finalized.
              </p>
            </div>
            <Button
              render={<Link href="/important-dates" />}
              nativeButton={false}
              variant="outline"
            >
              Full schedule
              <ArrowUpRight />
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-10 max-w-2xl">
            <DatesTable rows={dateTableRows} />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {reviewProcessNote}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
