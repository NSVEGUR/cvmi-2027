import { Handshake, Megaphone, Users } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { SponsorshipTable } from "@/components/sponsorship-table";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { sponsorshipTiers } from "@/lib/data/sponsorship";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Sponsor | CVMI 2027",
};

const reasons = [
  {
    title: "Grow your audience",
    body: "Grow your targeted leads and cultivate new business with your presence at a prestigious event, expanding your reach.",
    icon: Users,
  },
  {
    title: "Networking",
    body: "Meet new people and build on existing relationships with people who will help you and your business grow.",
    icon: Handshake,
  },
  {
    title: "Increase brand awareness",
    body: "Position your company as a leader in the expanding and encompassing fields of computer vision and machine intelligence.",
    icon: Megaphone,
  },
];

const sponsorshipContact = {
  name: "Dr. Jagadeesh Kakarla",
  role: "Conference Chair",
  emails: ["jagadeeshk@iiitdm.ac.in", "cvmi2027@iiitdm.ac.in"],
};

export default function CallForSponsorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sponsorship"
        title="Become a sponsor"
        description="Exhibit and sponsor CVMI 2027 - put your organization in front of the international computer vision and machine intelligence community."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <p className="text-balance text-base text-muted-foreground">
            Whether you are showcasing new products and services or recruiting
            new talent, CVMI 2027 is where the international computer vision and
            machine intelligence community convenes - providing an opportunity
            to highlight what your organization has to offer and reach
            decision-makers with real buying power.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <SectionEyebrow>Why sponsor</SectionEyebrow>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
            Reasons to take part in CVMI 2027
          </h2>
        </Reveal>
        <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-3" stagger={0.08}>
          {reasons.map((reason) => (
            <RevealItem key={reason.title}>
              <Card className="h-full border-border bg-accent/40 transition-all hover:-translate-y-0.5 hover:border-brand-accent/30 hover:shadow-md hover:shadow-brand-accent/10">
                <CardContent className="flex flex-col items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent-ink ring-1 ring-brand-accent/20">
                    <reason.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-heading text-sm font-medium">
                    {reason.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {reason.body}
                  </p>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Reveal>
            <SectionEyebrow>Packages</SectionEyebrow>
            <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
              Sponsorship tiers
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              Platinum, Diamond, Gold, Silver, and Bronze level packages are
              available now, alongside dedicated award and session sponsorships.
              Figures below are tentative and open to discussion.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <SponsorshipTable rows={sponsorshipTiers} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
            Secure your sponsorship
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            CVMI 2027 attracts decision-makers looking for the next generation
            of products, solutions, networking, and advanced-industry
            perspectives. Reach out to the conference chair to discuss
            packages and opportunities.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex justify-center">
          <Card className="w-full max-w-md border-border text-center">
            <CardContent className="items-center">
              <p className="font-heading text-lg font-semibold text-brand-accent-ink">
                Contact
              </p>
              <p className="mt-3 text-base text-foreground">
                {sponsorshipContact.name}, {sponsorshipContact.role}
              </p>
              <p className="mt-2 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-sm text-muted-foreground">
                {sponsorshipContact.emails.map((email, index) => (
                  <span key={email} className="flex items-center gap-1.5">
                    {index > 0 ? (
                      <span className="text-muted-foreground">or</span>
                    ) : null}
                    <a
                      href={`mailto:${email}`}
                      className="font-medium text-brand-accent-ink hover:underline"
                    >
                      {email}
                    </a>
                  </span>
                ))}
              </p>
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </>
  );
}
