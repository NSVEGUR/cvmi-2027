import { ExternalLink, MapPin } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fullAddress, mapEmbedSrc, mapOpenUrl } from "@/lib/data/venue";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | CVMI 2027",
};

const contacts = [
  {
    title: "General inquiries",
    note: "Contact details will be published once the call for papers opens.",
  },
  {
    title: "Paper submissions",
    note: "Submission portal contact will be announced alongside the call for papers.",
  },
  {
    title: "Registration",
    note: "Registration contact will be announced with the registration portal.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Official contact details for CVMI 2027 are being finalized and will be published here."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <SectionEyebrow>Organizing team</SectionEyebrow>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {contacts.map((contact) => (
            <Card key={contact.title} className="border-dashed border-border/80">
              <CardContent>
                <div className="flex items-start justify-between gap-2">
                  <p className="font-heading text-sm font-medium">{contact.title}</p>
                  <Badge variant="outline" className="shrink-0 font-mono text-[10px]">
                    TBA
                  </Badge>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{contact.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-secondary p-2 text-brand-accent-ink">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h2 className="font-heading text-sm font-medium">Address</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{fullAddress}</p>
                </div>
              </div>
              <a
                href={mapOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand-accent-ink hover:underline"
              >
                Open in Maps
                <ExternalLink className="size-3.5" />
              </a>
            </div>
            <div className="aspect-square w-full overflow-hidden rounded-lg border border-border sm:aspect-video">
              <iframe
                title="IIITDM Kancheepuram location map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapEmbedSrc}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
