import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { CommitteeSection } from "@/components/committee-section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { internationalAdvisoryGroup } from "@/lib/data/committees";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Advisory Committee | CVMI 2027",
};

export default function InternationalAdvisoryCommitteePage() {
  return (
    <>
      <PageHeader
        eyebrow="Organization"
        title="International Advisory Committee"
        description="Distinguished international advisors guiding CVMI 2027."
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <CommitteeSection groups={[internationalAdvisoryGroup]} />

        <Reveal className="mt-8 flex items-center justify-between gap-4 rounded-xl border border-dashed border-border px-5 py-4">
          <p className="text-base text-muted-foreground">
            Looking for the national advisory committee?
          </p>
          <Button
            render={<Link href="/committees/advisory-committee/national" />}
            nativeButton={false}
            variant="outline"
          >
            National Advisory Committee
            <ArrowUpRight />
          </Button>
        </Reveal>
      </section>
    </>
  );
}
