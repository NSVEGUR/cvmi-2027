import Image from "next/image";
import { ArrowUpRight, UserRound } from "lucide-react";

import { cn, getInitials } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
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
          <div
            className={cn(
              "flex h-full w-full items-center justify-center",
              member.tba
                ? "text-muted-foreground/40"
                : "bg-primary/10 font-heading text-2xl text-primary"
            )}
          >
            {member.tba ? <UserRound className="size-10" /> : getInitials(member.name)}
          </div>
        )}
      </div>
      <div className="mt-3 flex-1">
        <div className="flex items-start gap-2">
          <p
            className={cn(
              "line-clamp-2 min-h-[2.5rem] text-sm font-medium no-underline",
              member.tba && "italic text-muted-foreground",
              member.href && "group-hover/member:text-brand-accent-ink"
            )}
          >
            {member.name}
          </p>
          {member.tba ? (
            <Badge variant="outline" className="mt-0.5 shrink-0 font-mono text-[10px]">
              TBA
            </Badge>
          ) : null}
        </div>
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
    "group/member relative flex h-full flex-col rounded-xl border p-3 no-underline transition-all",
    member.tba
      ? "border-dashed border-border/80 bg-transparent"
      : "border-border bg-card",
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
    <Accordion defaultValue={[groups[0]?.title]} multiple className="flex flex-col gap-3">
      {groups.map((group) => (
        <AccordionItem
          key={group.title}
          value={group.title}
          className="rounded-xl border border-border px-4 sm:px-5"
        >
          <AccordionTrigger className="py-4 text-base font-heading font-medium no-underline hover:no-underline">
            <span className="flex items-center gap-3">
              {group.title}
              <span className="font-mono text-xs font-normal text-muted-foreground">
                {group.members.length.toString().padStart(2, "0")}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {group.members.map((member, index) => (
                <li key={`${member.name}-${index}`}>
                  <MemberCard member={member} />
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
