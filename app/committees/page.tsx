import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { CommitteeSection } from "@/components/committee-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { committeeGroups } from "@/lib/data/committees";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Committees | CVMI 2027",
};

export default function CommitteesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Organization"
        title="Organizing committee"
        description="Patrons, chairs, and organizing team for CVMI 2027."
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <CommitteeSection groups={committeeGroups} />

        <Reveal className="mt-8 flex items-center justify-between gap-4 rounded-xl border border-dashed border-border px-5 py-4">
          <p className="text-base text-muted-foreground">
            Looking for the technical area chairs?
          </p>
          <Button
            render={<Link href="/committees/area-chairs" />}
            nativeButton={false}
            variant="outline"
          >
            Area Chairs
            <ArrowUpRight />
          </Button>
        </Reveal>
      </section>
    </>
  );
}
