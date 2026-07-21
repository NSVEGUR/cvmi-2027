import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { FeeTable } from "@/components/fee-table";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { indianFees, foreignFees, registrationGuidelines } from "@/lib/data/fees";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration | CVMI 2027",
};

export default function RegistrationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Registration"
        title="Registration fees"
        description="All fees include 18% GST. Rates are tentative and will be confirmed with the registration portal launch."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <SectionEyebrow>Indian delegates</SectionEyebrow>
          <div className="mt-4">
            <FeeTable title="Fees in INR" rows={indianFees} />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <SectionEyebrow>Foreign delegates</SectionEyebrow>
          <div className="mt-4">
            <FeeTable title="Fees in USD" rows={foreignFees} />
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Reveal>
            <SectionEyebrow>Guidelines</SectionEyebrow>
            <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
              Registration policies
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.06}>
            {registrationGuidelines.map((item, index) => (
              <RevealItem key={item.title}>
                <Card
                  className={cn(
                    "h-full border-border transition-all hover:-translate-y-0.5 hover:border-brand-accent/30 hover:shadow-md hover:shadow-brand-accent/10",
                    index % 2 === 0 ? "bg-accent/40" : "bg-card"
                  )}
                >
                  <CardContent>
                    <h3 className="font-heading text-sm font-medium">{item.title}</h3>
                    <p className="mt-1.5 text-base text-muted-foreground">{item.body}</p>
                  </CardContent>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
