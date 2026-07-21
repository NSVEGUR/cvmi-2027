import { ExternalLink } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { fullAddress, mapEmbedSrc, mapOpenUrl } from "@/lib/data/venue";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venue & Travel | CVMI 2027",
};

export default function VenuePage() {
  return (
    <>
      <PageHeader
        eyebrow="Venue"
        title="Venue & travel"
        description="CVMI 2027 will be held on the IIITDM Kancheepuram campus in Chennai, India."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <SectionEyebrow>About the campus</SectionEyebrow>
            <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
              IIITDM Kancheepuram
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{fullAddress}</p>

            <address className="mt-6 rounded-lg border border-border bg-secondary/30 p-4 text-sm not-italic">
              {fullAddress}
            </address>

            <a
              href={mapOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent-ink hover:underline"
            >
              Open in Maps
              <ExternalLink className="size-3.5" />
            </a>

            <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border border-border">
              <iframe
                title="IIITDM Kancheepuram location map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapEmbedSrc}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionEyebrow>Getting there</SectionEyebrow>
            <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
              Reaching Chennai
            </h2>
            <ul className="mt-4 flex flex-col gap-5 text-sm">
              <li id="travel" className="scroll-mt-24">
                <p className="font-heading font-medium">By air</p>
                <p className="mt-1 text-muted-foreground">
                  Chennai International Airport (MAA) is well connected to
                  major domestic and international cities and is the nearest
                  airport to the campus.
                </p>
              </li>
              <li>
                <p className="font-heading font-medium">By rail</p>
                <p className="mt-1 text-muted-foreground">
                  Chennai&apos;s major railway stations (Chennai Central and
                  Chennai Egmore) connect the city to the wider Indian rail
                  network.
                </p>
              </li>
              <li id="accommodation" className="scroll-mt-24">
                <p className="font-heading font-medium">Accommodation</p>
                <p className="mt-1 text-muted-foreground">
                  Detailed accommodation options and recommended stays near
                  the campus will be published closer to the conference
                  dates.
                </p>
              </li>
              <li>
                <p className="font-heading font-medium">Local transport</p>
                <p className="mt-1 text-muted-foreground">
                  Campus shuttle and cab information for delegates will be
                  shared with registered participants ahead of the event.
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
