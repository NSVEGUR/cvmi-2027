import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import { navItems } from "@/lib/data/nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function NavChildLink({
  href,
  external,
  className,
  children,
}: {
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return <div className={className}>{children}</div>;
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-sm relative">
      <div className="rule-gradient absolute inset-x-0 bottom-0" aria-hidden />
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 font-heading text-lg font-semibold tracking-tight">
          <Image src="/images/iiitdm-logo.webp" alt="IIITDM Kancheepuram" width={36} height={36} className="shrink-0" />
          <span>
            CVMI<span className="text-brand-accent-ink">&apos;27</span>
          </span>
        </Link>

        <nav className="ml-10 hidden lg:block">
          <ul className="flex items-center gap-0.5 font-sans text-sm">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="group/link relative flex items-center rounded-md px-3 py-2 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                    <span className="pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-accent-ink to-brand-accent transition-transform duration-200 group-hover/link:scale-x-100" />
                  </Link>
                ) : (
                  <span className="relative flex cursor-default items-center rounded-md px-3 py-2 text-foreground/80 transition-colors group-hover:bg-muted group-hover:text-foreground">
                    {item.label}
                    <span className="pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-accent-ink to-brand-accent transition-transform duration-200 group-hover:scale-x-100" />
                  </span>
                )}
                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-lg border border-border bg-popover p-1.5 shadow-lg ring-1 ring-foreground/5">
                      {item.children.map((child) => (
                        <NavChildLink
                          key={child.href ?? child.label}
                          href={child.href}
                          external={child.external}
                          className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                        >
                          <span className="block font-medium text-foreground">{child.label}</span>
                          {child.description ? (
                            <span className="block text-xs text-muted-foreground">{child.description}</span>
                          ) : null}
                        </NavChildLink>
                      ))}
                    </div>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="lg:hidden" />
              }
            >
              <Menu />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader className="border-b border-border">
                <SheetTitle>CVMI 2027</SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-y-auto px-2 pb-4">
                <Accordion className="flex flex-col gap-0.5">
                  {navItems.map((item) =>
                    item.children ? (
                      <AccordionItem key={item.label} value={item.label} className="border-none">
                        <AccordionTrigger className="rounded-md px-3 py-2.5 no-underline hover:bg-muted hover:no-underline">
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="pb-1 pl-3">
                          <div className="flex flex-col gap-0.5">
                            {item.href ? (
                              <Link
                                href={item.href}
                                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
                              >
                                Overview
                              </Link>
                            ) : null}
                            {item.children.map((child) => (
                              <NavChildLink
                                key={child.href ?? child.label}
                                href={child.href}
                                external={child.external}
                                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
                              >
                                {child.label}
                              </NavChildLink>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
