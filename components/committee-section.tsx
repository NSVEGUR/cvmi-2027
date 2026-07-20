import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { cn, getCountryFlag, getInitials } from "@/lib/utils";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import type { CommitteeGroup, CommitteeMember } from "@/lib/data/committees";

function MemberCard({ member }: { member: CommitteeMember }) {
  const content = (
    <>
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-secondary">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover/member:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-primary/10 font-heading text-2xl text-primary">
            {getInitials(member.name)}
          </div>
        )}
        <span
          aria-hidden
          className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-background/90 text-sm shadow-xs ring-1 ring-border"
        >
          {getCountryFlag(member.affiliation)}
        </span>
      </div>
      <div className="mt-3 flex-1">
        <p
          className={cn(
            "line-clamp-2 min-h-[2.5rem] text-sm font-medium no-underline",
            member.href && "group-hover/member:text-brand-accent-ink"
          )}
        >
          {member.name}
        </p>
        {member.affiliation ? (
          <p className="mt-0.5 line-clamp-2 min-h-[2rem] text-xs text-muted-foreground no-underline">
            {member.affiliation}
          </p>
        ) : null}
      </div>
      {member.href ? (
        <span className="absolute bottom-2.5 right-2.5 flex size-6 items-center justify-center rounded-full bg-background text-muted-foreground/60 shadow-xs ring-1 ring-border transition-colors group-hover/member:text-brand-accent-ink group-hover/member:ring-brand-accent/40">
          <ArrowUpRight className="size-3.5" />
        </span>
      ) : null}
    </>
  );

  const className = cn(
    "group/member relative flex h-full flex-col rounded-xl border border-border bg-card p-3 no-underline transition-all",
    member.href && "hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-md hover:shadow-brand-accent/15"
  );

  if (member.href) {
    return (
      <a
        href={member.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={{ textDecorationLine: "none" }}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export function CommitteeSection({ groups }: { groups: CommitteeGroup[] }) {
  return (
    <div className="flex flex-col gap-10">
      {groups.map((group) => {
        const members = group.members.filter((member) => !member.tba);
        if (members.length === 0) return null;
        return (
          <section key={group.title}>
            <Reveal>
              <h2 className="flex items-center gap-3 font-heading text-base font-medium">
                {group.title}
                <span className="font-mono text-xs font-normal text-muted-foreground">
                  {members.length.toString().padStart(2, "0")}
                </span>
              </h2>
            </Reveal>
            <RevealGroup className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" stagger={0.05}>
              {members.map((member, index) => (
                <RevealItem key={`${member.name}-${index}`}>
                  <MemberCard member={member} />
                </RevealItem>
              ))}
            </RevealGroup>
          </section>
        );
      })}
    </div>
  );
}
