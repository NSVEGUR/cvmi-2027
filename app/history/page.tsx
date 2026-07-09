import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { cvmiHistory } from "@/lib/data/topics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CVMI History | CVMI 2027",
};

export default function HistoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Series"
        title="CVMI history"
        description="CVMI rotates host institutions each year. Here's the series since it began in 2022."
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <ol className="flex flex-col gap-3">
          {cvmiHistory.map((edition) => (
            <li key={edition.year} id={edition.year} className="scroll-mt-24">
              <Card className={edition.current ? "border-brand-accent" : "border-border"}>
                <CardContent className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm text-muted-foreground">
                      {edition.year}
                    </span>
                    <div>
                      <p className="font-heading font-medium">{edition.edition}</p>
                      <p className="text-sm text-muted-foreground">{edition.host}</p>
                    </div>
                  </div>
                  {edition.current ? (
                    <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-brand-accent-ink">
                      This edition
                    </span>
                  ) : null}
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
