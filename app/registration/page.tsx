import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { FeeTable } from "@/components/fee-table";
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
        <SectionEyebrow>Indian delegates</SectionEyebrow>
        <div className="mt-4">
          <FeeTable title="Fees in INR" rows={indianFees} />
        </div>

        <div className="mt-12">
          <SectionEyebrow>Foreign delegates</SectionEyebrow>
          <div className="mt-4">
            <FeeTable title="Fees in USD" rows={foreignFees} />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <SectionEyebrow>Guidelines</SectionEyebrow>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
            Registration policies
          </h2>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {registrationGuidelines.map((item) => (
              <div key={item.title}>
                <h3 className="font-heading text-sm font-medium">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
