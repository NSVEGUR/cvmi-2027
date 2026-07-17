import Link from "next/link";
import { ArrowUpRight, Handshake, Megaphone, Presentation, Users } from "lucide-react";
import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Call for Sponsors | CVMI 2027",
};

const reasons = [
  {
    icon: Users,
    title: "Reach the right audience",
    description: "Connect with researchers, academicians, and industry practitioners working in computer vision and machine intelligence.",
  },
  {
    icon: Handshake,
    title: "Networking",
    description: "Meet attendees, authors, and organizing committee members across three days of sessions and social events.",
  },
  {
    icon: Megaphone,
    title: "Brand visibility",
    description: "Sponsor branding across the venue, website, and conference materials, with tiered visibility packages.",
  },
  {
    icon: Presentation,
    title: "Showcase your work",
    description: "Opportunities for demos, exhibits, and talks depending on the sponsorship tier.",
  },
];

export default function CallForSponsorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sponsorship"
        title="Call for sponsors"
        description="CVMI 2027 is inviting organizations to partner with the conference. Tier details and benefits are being finalized."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <SectionEyebrow>Why sponsor CVMI 2027</SectionEyebrow>
        </Reveal>
        <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2" stagger={0.08}>
          {reasons.map((reason) => (
            <RevealItem key={reason.title}>
              <Card className="border-border transition-all hover:-translate-y-0.5 hover:border-brand-accent/30 hover:shadow-md hover:shadow-brand-accent/10">
                <CardContent>
                  <div className="inline-flex rounded-lg bg-primary/10 p-2.5">
                    <reason.icon className="size-5 text-brand-accent-ink" strokeWidth={1.75} />
                  </div>
                  <p className="mt-4 font-heading text-sm font-medium">{reason.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-12 flex items-center justify-between gap-4 rounded-xl border border-dashed border-border px-5 py-4">
          <div>
            <p className="text-sm font-medium">Sponsorship tiers &amp; pricing</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Tier structure and benefits will be published once finalized.
            </p>
          </div>
          <Badge variant="outline" className="shrink-0 font-mono text-[10px]">
            TBA
          </Badge>
        </Reveal>

        <Button render={<Link href="/contact" />} nativeButton={false} className="mt-8">
          Contact the sponsorship chairs
          <ArrowUpRight />
        </Button>
      </section>
    </>
  );
}
