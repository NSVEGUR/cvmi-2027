import Link from "next/link";
import { ArrowUpRight, UploadCloud } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { FocusFrame } from "@/components/focus-frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paper Submission | CVMI 2027",
};

const guidelines = [
  {
    title: "Format",
    body: "Manuscripts must follow the IEEE double-column conference format and not exceed 6 pages (including text, figures, tables, and references), with up to 2 extra pages permitted for an additional charge.",
  },
  {
    title: "Review process",
    body: "CVMI 2027 follows a double-blind review policy. Remove all author names, affiliations, acknowledgements, and other identifying information from the submitted manuscript.",
  },
  {
    title: "Two submission rounds",
    body: "Papers may be submitted in either of two rounds; see the Important Dates page for exact deadlines for each round.",
  },
  {
    title: "Publication",
    body: "Accepted and presented papers will be submitted for inclusion in IEEE Xplore, subject to IEEE's standard quality-review process.",
  },
];

const policies = [
  {
    title: "Originality & double submission",
    body: "Submissions must be original, unpublished work. No paper substantially similar in content may be under review at, or submitted to, another journal, conference, or workshop during the CVMI 2027 review period. Papers found in violation will be rejected without review.",
  },
  {
    title: "Plagiarism",
    body: "All submissions are screened for plagiarism and text overlap against the IEEE similarity-check threshold. Papers exceeding the permitted overlap, including self-plagiarism from prior work, will be rejected without review.",
  },
  {
    title: "Use of AI/LLM tools",
    body: "Generative AI/LLM tools may not be listed as an author. Any use of such tools in preparing the manuscript (e.g., for editing or drafting portions of text) must be disclosed in the acknowledgements. Authors remain fully responsible for the accuracy and originality of all submitted content.",
  },
  {
    title: "Double-blind anonymity",
    body: "Remove all author names, affiliations, acknowledgements, and self-identifying references from the manuscript before submission. Reviewer identities are likewise withheld from authors throughout the process.",
  },
];

export default function PaperSubmissionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Submissions"
        title="Paper submission"
        description="Formatting, review, publication, and ethics requirements for submitting to CVMI 2027."
      />

      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Reveal>
            <SectionEyebrow>Guidelines</SectionEyebrow>
            <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
              Submission guidelines
            </h2>
          </Reveal>
          <RevealGroup
            className="mt-8 grid gap-6 sm:grid-cols-2"
            stagger={0.06}
          >
            {guidelines.map((item) => (
              <RevealItem key={item.title}>
                <h3 className="font-heading text-sm font-medium">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-base text-muted-foreground">
                  {item.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15}>
            <div className="relative mt-12 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-accent/70 via-accent/20 to-transparent p-8 text-center shadow-md shadow-brand-accent/5 ring-1 ring-brand-accent/10 sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -right-16 size-64 rounded-full bg-brand-accent/20 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-10 size-56 rounded-full bg-brand-accent/10 blur-3xl"
              />

              <div className="relative">
                <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent-ink ring-1 ring-brand-accent/20">
                  <UploadCloud className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                  Manuscript submission portal
                </h3>
                <div className="mx-auto mt-3 h-0.5 w-14 bg-gradient-to-r from-brand-accent-ink to-brand-accent" />
                <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                  The manuscript has to be uploaded online at the CVMI 2027
                  Microsoft CMT paper submission portal:
                </p>
                <Button
                  render={
                    <Link href="https://cmt3.research.microsoft.com/CVMI2027" target="_blank" rel="noopener noreferrer" />
                  }
                  nativeButton={false}
                  size="lg"
                  className="group/submit mt-7 h-auto w-full max-w-full flex-wrap justify-center gap-1.5 px-6 py-2.5 text-center whitespace-normal shadow-md shadow-brand-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-accent/30 sm:w-auto"
                >
                  Go to Submission Portal (CVMI 2027)
                  <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover/submit:translate-x-0.5 group-hover/submit:-translate-y-0.5" />
                </Button>

                <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-border bg-card/60 px-5 py-4 text-left">
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                    Acknowledgment
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground italic">
                    The Microsoft CMT service was used for managing the
                    peer-reviewing process for this conference. This service was
                    provided for free by Microsoft, who bore all associated
                    expenses, including costs for Azure cloud services as well
                    as for software development and support.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <SectionEyebrow>Ethics</SectionEyebrow>
          <h2 className="mt-3 font-heading text-2xl font-medium tracking-tight">
            Author policies
          </h2>
        </Reveal>
        <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-2" stagger={0.06}>
          {policies.map((item) => (
            <RevealItem key={item.title}>
              <h3 className="font-heading text-sm font-medium">{item.title}</h3>
              <p className="mt-1.5 text-base text-muted-foreground">
                {item.body}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <FocusFrame inset="-8px" tone="muted" className="mt-8 px-6 py-5">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
              IEEE submission policies
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Authors must also comply with the full IEEE author submission
              policies and ethics guidelines.
            </p>
            <Link
              href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/guidelines-and-policies/submission-policies/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent-ink hover:underline"
            >
              IEEE Author Submission Policies
              <ArrowUpRight className="size-3.5" />
            </Link>
          </FocusFrame>
        </Reveal>
      </section>
    </>
  );
}
