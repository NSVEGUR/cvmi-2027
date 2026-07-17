import Link from "next/link";
import { ArrowUpRight, BookMarked, GraduationCap, MapPin, Users } from "lucide-react";

import { Hero } from "@/components/hero";
import { FactTicker } from "@/components/fact-ticker";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { DatesTimeline } from "@/components/dates-timeline";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { importantDates } from "@/lib/data/dates";
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
      <FactTicker />

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
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
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
          </Reveal>
          <Reveal delay={0.1}>
            <SectionEyebrow>Scope</SectionEyebrow>
            <RevealGroup className="mt-3 grid gap-3 sm:grid-cols-2" stagger={0.06}>
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
            <Button render={<Link href="/call-for-papers" />} nativeButton={false} variant="outline" className="mt-3">
              View all topics &amp; submission guidelines
              <ArrowUpRight />
            </Button>
          </Reveal>
        </div>
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
            <DatesTimeline dates={importantDates} />
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
