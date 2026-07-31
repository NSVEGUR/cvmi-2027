import Image from "next/image";

import { cn, getInitials } from "@/lib/utils";
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
            className="object-cover object-top transition-transform duration-300 group-hover/member:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-primary/10 font-heading text-2xl text-primary">
            {getInitials(member.name)}
          </div>
        )}
      </div>
      <div className="mt-3 flex-1 text-center">
        <p
          className={cn(
            "line-clamp-2 min-h-[2.5rem] text-sm font-bold no-underline",
            member.href && "group-hover/member:text-brand-accent-ink",
          )}
        >
          {member.name}
        </p>
        <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-gradient-to-r from-brand-accent-ink to-brand-accent" />
        {member.affiliation ? (
          <p className="mt-2 line-clamp-2 min-h-[2rem] text-xs text-muted-foreground no-underline">
            {member.affiliation}
          </p>
        ) : null}
      </div>
    </>
  );

  const className = cn(
    "group/member relative flex h-full flex-col rounded-xl border border-border bg-card p-3 no-underline transition-all",
    member.href &&
      "hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-md hover:shadow-brand-accent/15",
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
              <h2 className="flex items-center justify-center gap-3 font-heading text-xl font-bold text-brand-accent-ink sm:text-2xl">
                {group.title}
              </h2>
              <div className="mx-auto mt-2 h-0.5 w-10 bg-gradient-to-r from-brand-accent-ink to-brand-accent" />
            </Reveal>
            <RevealGroup
              className="mt-4 flex flex-wrap justify-center gap-3"
              stagger={0.05}
            >
              {members.map((member, index) => (
                <RevealItem
                  key={`${member.name}-${index}`}
                  className="w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.5rem)] lg:w-[calc(25%-0.5625rem)]"
                >
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
