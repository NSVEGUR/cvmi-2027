import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { CommitteeSection } from "@/components/committee-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { areaChairsGroup } from "@/lib/data/committees";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Area Chairs | CVMI 2027",
};

export default function AreaChairsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Organization"
        title="Area chairs"
        description="Technical area chairs overseeing the review process for CVMI 2027."
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <CommitteeSection groups={[areaChairsGroup]} />
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex items-center justify-between gap-4 rounded-xl border border-dashed border-border px-5 py-4">
          <p className="text-sm text-muted-foreground">
            Looking for patrons, chairs, and the organizing team?
          </p>
          <Button render={<Link href="/committees" />} nativeButton={false} variant="outline">
            Organizing Committee
            <ArrowUpRight />
          </Button>
        </Reveal>
      </section>
    </>
  );
}
