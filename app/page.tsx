import Link from "next/link";
import { ArrowUpRight, BookMarked, GraduationCap, MapPin, Users } from "lucide-react";

import { Hero } from "@/components/hero";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { DatesTable } from "@/components/dates-table";
import { Countdown } from "@/components/countdown";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { conferenceDates, dateTableRows, reviewProcessNote } from "@/lib/data/dates";
import { topicGroups } from "@/lib/data/topics";

const sponsorTiers = [
  { tier: "Platinum", note: "Sponsorship tiers and confirmed partners will be announced here." },
  { tier: "Gold", note: "Interested organizations can reach the sponsorship chairs via the contact page." },
  { tier: "Silver", note: "Details of benefits per tier will be published alongside the call for sponsors." },
];

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
        <RevealGroup className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 my-12 mx-6 lg:mx-auto">
          {facts.map((fact) => (
            <RevealItem
              key={fact.title}
              className="group relative bg-card px-6 py-7 transition-colors hover:bg-accent/40"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-accent-ink to-brand-accent transition-transform duration-300 group-hover:scale-x-100" />
              <div className="inline-flex rounded-lg bg-primary/10 p-2.5 transition-transform duration-300 group-hover:scale-110">
                <fact.icon className="size-5 text-brand-accent-ink" strokeWidth={1.75} />
              </div>
              <p className="mt-4 font-heading text-base font-medium">{fact.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{fact.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div className="grid gap-10 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/60 via-accent/15 to-transparent p-8 shadow-sm sm:grid-cols-2 sm:p-12">
            <div className="flex flex-col items-center text-center sm:border-r sm:border-border/70 sm:pr-10">
              <h2 className="font-heading text-xl font-medium tracking-tight sm:text-2xl">
                About CVMI 2027
              </h2>
              <div className="mt-3 h-0.5 w-14 bg-gradient-to-r from-brand-accent-ink to-brand-accent" />
              <p className="mt-4 text-sm text-muted-foreground">
                In today&apos;s fast-moving world, AI and ML models are
                everywhere. CVMI brings researchers, academicians, and
                industry experts together each year to discuss advances in
                computer vision, image processing, and machine intelligence.
                The 6th edition is organized by the Department of Computer
                Science and Engineering at IIITDM Kancheepuram &mdash; the
                conference&apos;s first edition in South India, featuring
                regular paper and poster presentations, a PhD Symposium, and
                keynote talks.
              </p>
            </div>
            <div className="flex flex-col items-center text-center sm:pl-10">
              <h2 className="font-heading text-xl font-medium tracking-tight sm:text-2xl">
                Venue
              </h2>
              <div className="mt-3 h-0.5 w-8 bg-gradient-to-r from-brand-accent-ink to-brand-accent" />
              <p className="mt-4 text-sm font-medium text-foreground">
                IIITDM Kancheepuram, <span className="text-brand-accent-ink">Chennai</span>
              </p>
              <p className="text-xs text-muted-foreground">600127, India</p>
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

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <SectionEyebrow>Scope</SectionEyebrow>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight sm:text-3xl">
            Conference tracks
          </h2>
        </Reveal>
        <RevealGroup className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {topicGroups.map((group) => (
            <RevealItem key={group.title}>
              <Card
                size="sm"
                className="border-border transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-md hover:shadow-brand-accent/10"
              >
                <CardContent>
                  <p className="font-heading text-sm font-medium">{group.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {group.topics.length} topics
                  </p>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.1}>
          <Button render={<Link href="/call-for-papers" />} nativeButton={false} variant="outline" className="mt-6">
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
              <p className="mt-2 text-sm text-muted-foreground">
                Tentative &mdash; subject to confirmation as the program is finalized.
              </p>
            </div>
            <Button render={<Link href="/important-dates" />} nativeButton={false} variant="outline">
              Full schedule
              <ArrowUpRight />
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <DatesTable rows={dateTableRows} />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {reviewProcessNote}
            </p>
          </Reveal>
        </div>
      </section>

      <section id="sponsors" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
        <Reveal>
          <SectionEyebrow>Sponsors</SectionEyebrow>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight sm:text-3xl">
            Partnering with CVMI 2027
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Sponsorship packages are being finalized. Organizations interested in
            supporting the conference can reach out via the contact page.
          </p>
        </Reveal>
        <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-3" stagger={0.08}>
          {sponsorTiers.map((sponsor) => (
            <RevealItem key={sponsor.tier}>
              <Card className="border-dashed border-border/80 transition-all hover:-translate-y-0.5 hover:border-brand-accent/30">
                <CardContent>
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-heading text-sm font-medium">{sponsor.tier}</p>
                    <Badge variant="outline" className="shrink-0 font-mono text-[10px]">
                      TBA
                    </Badge>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{sponsor.note}</p>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
        <Button render={<Link href="/contact" />} nativeButton={false} variant="outline" className="mt-6">
          Contact the sponsorship chairs
          <ArrowUpRight />
        </Button>
      </section>
    </>
  );
}
