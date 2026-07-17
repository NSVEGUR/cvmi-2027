import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | CVMI 2027",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About CVMI 2027"
        description="The 6th International Conference on Computer Vision & Machine Intelligence."
      />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="prose-neutral space-y-5 text-base leading-relaxed text-foreground/90">
          <p>
            In today&apos;s fast-moving world, Artificial Intelligence (AI) and
            Machine Learning (ML) models and systems are everywhere. Computer
            vision, image processing, and machine intelligence are witnessing
            rapid advancements that have helped industry and society. The 6th
            International Conference on Computer Vision &amp; Machine
            Intelligence (CVMI 2027) will be organized by the Department of
            Computer Science and Engineering at IIITDM Kancheepuram from
            June&nbsp;17&ndash;19, 2027.
          </p>
          <p>
            The conference program will feature regular paper and poster
            presentations, a PhD Symposium, and keynote talks delivered by
            distinguished academicians and industry experts in the fields of
            computer vision, machine intelligence, and related areas.
          </p>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-secondary/30 p-6">
          <h2 className="font-heading text-lg font-medium">IIITDM Kancheepuram</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The Indian Institute of Information Technology, Design and
            Manufacturing (IIITDM) Kancheepuram is an Institute of National
            Importance established by the Government of India, located at
            Melakottaiyur, off Vandalur&ndash;Kelambakkam Road, Chennai. The
            Department of Computer Science and Engineering hosts CVMI 2027 as
            the conference&apos;s first edition in South India.
          </p>
          <Button render={<Link href="/venue" />} nativeButton={false} variant="outline" className="mt-4">
            Venue &amp; travel details
            <ArrowUpRight />
          </Button>
        </div>

        <div className="mt-6 rounded-xl border border-border p-6">
          <h2 className="font-heading text-lg font-medium">PhD Symposium</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            CVMI 2027 includes a dedicated PhD Symposium for doctoral
            researchers to present ongoing work and receive feedback from
            senior faculty. Call details will be published alongside the main
            call for papers.
          </p>
          <Button render={<Link href="/phd-symposium" />} nativeButton={false} variant="outline" className="mt-4">
            PhD Symposium page
            <ArrowUpRight />
          </Button>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <SectionEyebrow>Since 2022</SectionEyebrow>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
            A rotating host, a shared community
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            The 1st CVMI (2022) and 3rd CVMI (2024) were organized by IIIT
            Allahabad, while the 2nd CVMI (2023) was hosted by ABV-IIITM
            Gwalior. The 4th CVMI (2025) was held at NIT Rourkela, and CVMI
            2026 was hosted by COEP Technological University, Pune. See the
            History menu above for the full list of past editions.
          </p>
        </div>
      </section>
    </>
  );
}
