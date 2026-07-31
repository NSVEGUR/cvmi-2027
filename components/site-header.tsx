"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu } from "lucide-react";

import { navItems, type NavItem, type NavLink as NavLinkData } from "@/lib/data/nav";
import { cn } from "@/lib/utils";
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
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
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

function linkActive(link: NavLinkData, pathname: string): boolean {
  if (!link.external && !!link.href && pathname === link.href) return true;
  return link.children?.some((child) => linkActive(child, pathname)) ?? false;
}

function DesktopSubmenuChild({
  child,
  pathname,
}: {
  child: NavLinkData;
  pathname: string;
}) {
  const childActive = linkActive(child, pathname);

  if (child.children) {
    return (
      <div className="group/sub relative">
        <div
          className={cn(
            "flex cursor-default items-center justify-between gap-2 rounded-md px-3 py-2 text-sm transition-colors group-hover/sub:bg-brand-accent/20",
            childActive
              ? "bg-brand-accent/10 text-brand-accent-ink"
              : "text-foreground",
          )}
        >
          <span>
            <span className="block font-medium">{child.label}</span>
            {child.description ? (
              <span className="block text-xs text-muted-foreground">
                {child.description}
              </span>
            ) : null}
          </span>
          <ChevronRight className="size-3.5 shrink-0 text-muted-foreground" />
        </div>
        <div className="invisible absolute left-full top-0 z-50 w-64 -translate-y-1 pl-2 opacity-0 transition-all duration-150 group-focus-within/sub:visible group-focus-within/sub:translate-y-0 group-focus-within/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-y-0 group-hover/sub:opacity-100">
          <div className="rounded-lg border border-border bg-popover p-1.5 shadow-lg ring-1 ring-foreground/5">
            {child.children.map((grandchild) => {
              const grandchildActive = linkActive(grandchild, pathname);
              return (
                <NavChildLink
                  key={grandchild.href ?? grandchild.label}
                  href={grandchild.href}
                  external={grandchild.external}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-brand-accent/20",
                    grandchildActive && "bg-brand-accent/10",
                  )}
                >
                  <span
                    className={cn(
                      "block font-medium",
                      grandchildActive
                        ? "text-brand-accent-ink"
                        : "text-foreground",
                    )}
                  >
                    {grandchild.label}
                  </span>
                  {grandchild.description ? (
                    <span className="block text-xs text-muted-foreground">
                      {grandchild.description}
                    </span>
                  ) : null}
                </NavChildLink>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <NavChildLink
      href={child.href}
      external={child.external}
      className={cn(
        "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-brand-accent/20",
        childActive && "bg-brand-accent/10",
      )}
    >
      <span
        className={cn(
          "block font-medium",
          childActive ? "text-brand-accent-ink" : "text-foreground",
        )}
      >
        {child.label}
      </span>
      {child.description ? (
        <span className="block text-xs text-muted-foreground">
          {child.description}
        </span>
      ) : null}
    </NavChildLink>
  );
}

function MobileSubmenuChild({
  child,
  pathname,
}: {
  child: NavLinkData;
  pathname: string;
}) {
  const childActive = linkActive(child, pathname);

  if (child.children) {
    return (
      <Accordion className="flex flex-col gap-0.5">
        <AccordionItem value={child.label} className="border-none">
          <AccordionTrigger
            className={cn(
              "rounded-md px-3 py-2 text-sm no-underline hover:bg-brand-accent/20 hover:text-brand-accent-ink hover:no-underline",
              childActive && "font-medium text-brand-accent-ink",
            )}
          >
            {child.label}
          </AccordionTrigger>
          <AccordionContent className="pb-1 pl-3">
            <div className="flex flex-col gap-0.5">
              {child.children.map((grandchild) => (
                <MobileSubmenuChild
                  key={grandchild.href ?? grandchild.label}
                  child={grandchild}
                  pathname={pathname}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <NavChildLink
      href={child.href}
      external={child.external}
      className={cn(
        "rounded-md px-3 py-2 text-sm hover:bg-brand-accent/20 hover:text-brand-accent-ink",
        childActive ? "font-medium text-brand-accent-ink" : "text-muted-foreground",
      )}
    >
      {child.label}
    </NavChildLink>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  const isItemActive = (item: NavItem) => linkActive(item, pathname);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-sm relative">
      <div className="rule-gradient absolute inset-x-0 bottom-0" aria-hidden />
      <div className="mx-auto grid h-24 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/iiitdm-logo.webp"
            alt="IIITDM Kancheepuram"
            width={56}
            height={56}
            className="shrink-0"
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-2xl font-bold tracking-tight text-brand-accent-ink sm:text-3xl">
              CVMI
            </span>
            <span className="-mt-1 font-heading text-base font-semibold tracking-tight text-foreground">
              2027
            </span>
          </span>
        </Link>

        <nav className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-0.5 font-sans text-sm">
            {navItems.map((item) => {
              const active = isItemActive(item);
              return (
                <li key={item.label} className="group relative">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={cn(
                        "group/link relative flex items-center rounded-md px-3 py-2 transition-colors hover:bg-brand-accent/20 hover:text-brand-accent-ink",
                        active
                          ? "bg-brand-accent/10 font-medium text-brand-accent-ink"
                          : "text-foreground/80",
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left bg-gradient-to-r from-brand-accent-ink to-brand-accent transition-transform duration-200 group-hover/link:scale-x-100",
                          active ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </Link>
                  ) : (
                    <span
                      className={cn(
                        "relative flex cursor-default items-center rounded-md px-3 py-2 transition-colors group-hover:bg-brand-accent/20 group-hover:text-brand-accent-ink",
                        active
                          ? "bg-brand-accent/10 font-medium text-brand-accent-ink"
                          : "text-foreground/80",
                      )}
                    >
                      {item.label}
                      <span
                        className={cn(
                          "pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left bg-gradient-to-r from-brand-accent-ink to-brand-accent transition-transform duration-200 group-hover:scale-x-100",
                          active ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </span>
                  )}
                  {item.children ? (
                    <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="rounded-lg border border-border bg-popover p-1.5 shadow-lg ring-1 ring-foreground/5">
                        {item.children.map((child) => (
                          <DesktopSubmenuChild
                            key={child.href ?? child.label}
                            child={child}
                            pathname={pathname}
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-2">
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
                  {navItems.map((item) => {
                    const active = isItemActive(item);
                    return item.children ? (
                      <AccordionItem
                        key={item.label}
                        value={item.label}
                        className="border-none"
                      >
                        <AccordionTrigger
                          className={cn(
                            "rounded-md px-3 py-2.5 no-underline hover:bg-brand-accent/20 hover:text-brand-accent-ink hover:no-underline",
                            active &&
                              "bg-brand-accent/10 font-medium text-brand-accent-ink",
                          )}
                        >
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="pb-1 pl-3">
                          <div className="flex flex-col gap-0.5">
                            {item.href ? (
                              <Link
                                href={item.href}
                                className={cn(
                                  "rounded-md px-3 py-2 text-sm hover:bg-brand-accent/20 hover:text-brand-accent-ink",
                                  pathname === item.href
                                    ? "font-medium text-brand-accent-ink"
                                    : "text-muted-foreground",
                                )}
                              >
                                Overview
                              </Link>
                            ) : null}
                            {item.children.map((child) => (
                              <MobileSubmenuChild
                                key={child.href ?? child.label}
                                child={child}
                                pathname={pathname}
                              />
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "rounded-md px-3 py-2.5 text-sm font-medium hover:bg-brand-accent/20 hover:text-brand-accent-ink",
                          active && "bg-brand-accent/10 text-brand-accent-ink",
                        )}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
