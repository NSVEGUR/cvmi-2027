import Image from "next/image";
import Link from "next/link";

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "Call for Papers", href: "/call-for-papers" },
  { label: "Registration", href: "/registration" },
  { label: "IIITDM Kancheepuram Website", href: "https://www.iiitdm.ac.in/", external: true },
];

const importantLinks = [
  { label: "Organizing Committee", href: "/committees" },
  { label: "Conference Venue", href: "/venue" },
  { label: "Accommodation", href: "/venue#accommodation" },
  { label: "Travel Information", href: "/venue#travel" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-center gap-16 px-6 py-14 md:justify-between">
        <div className="text-center md:text-right">
          <div className="flex flex-col items-center gap-2 md:flex-row-reverse md:items-center">
            <Image src="/images/iiitdm-logo.webp" alt="IIITDM Kancheepuram" width={56} height={56} />
            <div>
              <p className="font-heading text-2xl font-bold text-brand-accent-ink">IIITDM</p>
              <p className="text-sm text-muted-foreground">
                Kancheepuram, <span className="font-semibold text-foreground">Chennai</span>
              </p>
            </div>
          </div>
          <div className="mt-3 text-sm text-muted-foreground">
            <p>Off Vandalur-Kelambakkam Road</p>
            <p>Chennai&nbsp;600127</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-16 text-center md:text-left">
          <div>
            <h3 className="mb-3 font-heading text-base font-medium">Useful Links</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-foreground/80 transition-transform hover:scale-105 hover:text-brand-accent-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-heading text-base font-medium">Important Links</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {importantLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/80 transition-transform hover:scale-105 hover:text-brand-accent-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-5">
        <p className="text-center text-xs text-muted-foreground">
          Developed by <span className="font-medium text-brand-accent-ink">Web Team, CVMI 2027</span>
        </p>
      </div>
    </footer>
  );
}
