import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { FocusFrame } from "@/components/focus-frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { topicGroups } from "@/lib/data/topics";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Call for Papers | CVMI 2027",
};

const guidelines = [
  {
    title: "Format",
    body: "Manuscripts must follow the IEEE double-column conference format and not exceed 6 pages (including text, figures, tables, and references), with up to 2 extra pages permitted for an additional charge.",
  },
  {
    title: "Review process",
    body: "CVMI 2027 follows a double-blind review policy. Remove all author names, affiliations, acknowledgements, and other identifying information from the submitted manuscript.",
  },
  {
    title: "Two submission rounds",
    body: "Papers may be submitted in either of two rounds; see the Important Dates page for exact deadlines for each round.",
  },
  {
    title: "Publication",
    body: "Accepted and presented papers will be submitted for inclusion in IEEE Xplore, subject to IEEE's standard quality-review process.",
  },
];

export default function CallForPapersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Submissions"
        title="Call for Papers"
        description="CVMI 2027 invites original, unpublished research contributions across computer vision, image processing, and machine intelligence."
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
      </section>

      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Reveal>
            <SectionEyebrow>Guidelines</SectionEyebrow>
            <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
              Submission guidelines
            </h2>
          </Reveal>
          <RevealGroup
            className="mt-8 grid gap-6 sm:grid-cols-2"
            stagger={0.06}
          >
            {guidelines.map((item) => (
              <RevealItem key={item.title}>
                <h3 className="font-heading text-sm font-medium">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-base text-muted-foreground">
                  {item.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15}>
            <FocusFrame inset="-8px" tone="muted" className="mt-12 px-6 py-5">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Submission portal
              </p>
              <p className="mt-1.5 text-sm">
                The paper submission system link will be published here once the
                portal opens on the Call for Papers date.
              </p>
            </FocusFrame>
          </Reveal>
        </div>
      </section>
    </>
  );
}
