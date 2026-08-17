import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { CommitteeSection } from "@/components/committee-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { nationalAdvisoryGroup } from "@/lib/data/committees";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Advisory Committee | CVMI 2027",
};

export default function NationalAdvisoryCommitteePage() {
  return (
    <>
      <PageHeader
        eyebrow="Organization"
        title="National Advisory Committee"
        description="Distinguished national advisors guiding CVMI 2027."
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <CommitteeSection groups={[nationalAdvisoryGroup]} />

        <Reveal className="mt-8 flex items-center justify-between gap-4 rounded-xl border border-dashed border-border px-5 py-4">
          <p className="text-base text-muted-foreground">
            Looking for the international advisory committee?
          </p>
          <Button
            render={<Link href="/committees/advisory-committee/international" />}
            nativeButton={false}
            variant="outline"
          >
            International Advisory Committee
            <ArrowUpRight />
          </Button>
        </Reveal>
      </section>
    </>
  );
}
