import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { FocusFrame } from "@/components/focus-frame";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
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
          <RevealGroup className="mt-8 grid gap-6 sm:grid-cols-2" stagger={0.06}>
            {guidelines.map((item) => (
              <RevealItem key={item.title}>
                <h3 className="font-heading text-sm font-medium">{item.title}</h3>
                <p className="mt-1.5 text-base text-muted-foreground">{item.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.15}>
            <FocusFrame inset="-8px" tone="muted" className="mt-12 px-6 py-5">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Submission portal
              </p>
              <p className="mt-1.5 text-sm">
                The paper submission system link will be published here once the
                portal opens on the Call for Papers date.
              </p>
            </FocusFrame>
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
              <p className="mt-1.5 text-base text-muted-foreground">{item.body}</p>
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