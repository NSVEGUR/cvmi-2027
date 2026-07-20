import { PageHeader } from "@/components/page-header";
import { DatesTable } from "@/components/dates-table";
import { Reveal } from "@/components/motion/reveal";
import { dateTableRows, reviewProcessNote } from "@/lib/data/dates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Important Dates | CVMI 2027",
};

export default function ImportantDatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Timeline"
        title="Important dates"
        description="All dates are tentative and subject to confirmation as the program committee finalizes the schedule."
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <DatesTable rows={dateTableRows} />
        </Reveal>
        <Reveal delay={0.1} className="mt-6 text-sm leading-relaxed text-muted-foreground">
          <p>{reviewProcessNote}</p>
        </Reveal>
      </section>
    </>
  );
}
