import Image from "next/image";

import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { sponsors } from "@/lib/data/sponsorship";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors | CVMI 2027",
};

export default function SponsorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sponsorship"
        title="Our sponsors"
        description="Organizations and societies supporting CVMI 2027."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal className="text-center">
          <SectionEyebrow className="justify-center">
            Supported by
          </SectionEyebrow>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight sm:text-3xl">
            Technical sponsors
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            More sponsors will be added here as partnerships are confirmed.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex h-28 w-56 items-center justify-center rounded-xl border border-border bg-card px-6 py-4 shadow-sm ring-1 ring-black/[0.02]">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={sponsor.width}
                    height={sponsor.height}
                    className="h-auto max-h-20 w-auto max-w-full object-contain"
                  />
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                  {sponsor.name}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
