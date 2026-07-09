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
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
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
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-heading text-lg font-semibold tracking-tight">
          <Image src="/images/iiitdm-logo.webp" alt="IIITDM Kancheepuram" width={36} height={36} className="shrink-0" />
          <span>
            CVMI<span className="text-brand-accent-ink">&apos;27</span>
          </span>
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-0.5 font-sans text-sm">
            {navItems.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center rounded-md px-3 py-2 text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-lg border border-border bg-popover p-1.5 shadow-lg ring-1 ring-foreground/5">
                      {item.children.map((child) => (
                        <NavChildLink
                          key={child.href}
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

        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/registration" />} nativeButton={false}
            className="hidden bg-brand-accent text-white hover:bg-brand-accent hover:brightness-110 sm:inline-flex"
          >
            Register
          </Button>

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
                      <AccordionItem key={item.href} value={item.href} className="border-none">
                        <AccordionTrigger className="rounded-md px-3 py-2.5 no-underline hover:bg-muted hover:no-underline">
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="pb-1 pl-3">
                          <div className="flex flex-col gap-0.5">
                            <Link
                              href={item.href}
                              className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
                            >
                              Overview
                            </Link>
                            {item.children.map((child) => (
                              <NavChildLink
                                key={child.href}
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
                <Button
                  render={<Link href="/registration" />} nativeButton={false}
                  className="mt-4 w-full bg-brand-accent text-white hover:bg-brand-accent hover:brightness-110"
                >
                  Register
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
