import { UserRound } from "lucide-react";

import { cn, getInitials } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { CommitteeGroup } from "@/lib/data/committees";

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
            <ul className="grid gap-3 sm:grid-cols-2">
              {group.members.map((member, index) => (
                <li
                  key={`${member.name}-${index}`}
                  className={cn(
                    "flex items-start gap-3 rounded-lg border px-3.5 py-3",
                    member.tba
                      ? "border-dashed border-border/80 bg-transparent"
                      : "border-border bg-card"
                  )}
                >
                  <Avatar size="lg" className="mt-0.5 shrink-0">
                    <AvatarFallback
                      className={cn(
                        member.tba
                          ? "bg-transparent text-muted-foreground/60"
                          : "bg-primary/10 font-heading text-primary"
                      )}
                    >
                      {member.tba ? <UserRound className="size-4" /> : getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p
                        className={cn(
                          "text-sm font-medium",
                          member.tba && "italic text-muted-foreground"
                        )}
                      >
                        {member.name}
                      </p>
                      {member.tba ? (
                        <Badge variant="outline" className="shrink-0 font-mono text-[10px]">
                          TBA
                        </Badge>
                      ) : null}
                    </div>
                    {member.affiliation ? (
                      <p className="mt-0.5 text-xs text-muted-foreground">{member.affiliation}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
