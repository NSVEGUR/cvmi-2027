import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { topicGroups } from "@/lib/data/topics";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Conference Tracks | CVMI 2027",
};

export default function CallForPapersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Submissions"
        title="Conference tracks"
        description="Explore the research areas and topics of interest for CVMI 2027 submissions."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <SectionEyebrow>Scope &amp; topics</SectionEyebrow>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
            Topics of interest
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
                  "relative h-full overflow-hidden border-border bg-gradient-to-br shadow-sm ring-1 ring-black/[0.02] transition-all hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-lg hover:shadow-brand-accent/10",
                  index % 2 === 0
                    ? "from-accent/70 via-accent/15 to-transparent"
                    : "from-brand-warm/20 via-brand-warm/5 to-transparent",
                )}
              >
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 top-0 h-1 bg-gradient-to-r",
                    index % 2 === 0
                      ? "from-brand-accent-ink to-brand-accent"
                      : "from-brand-warm-ink to-brand-warm",
                  )}
                />
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
      </section>

    </>
  );
}
