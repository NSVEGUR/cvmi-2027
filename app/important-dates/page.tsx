import { PageHeader } from "@/components/page-header";
import { DatesTimeline } from "@/components/dates-timeline";
import { importantDates } from "@/lib/data/dates";
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
        <DatesTimeline dates={importantDates} />
      </section>
    </>
  );
}
