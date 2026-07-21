export type NavLink = {
  label: string;
  href?: string;
  description?: string;
  external?: boolean;
};

export type NavItem = Omit<NavLink, "href"> & {
  href: string;
  children?: NavLink[];
};

export const navItems: NavItem[] = [
  {
    label: "Committees",
    href: "/committees",
    children: [
      {
        label: "Organizing Committee",
        href: "/committees",
        description: "Patrons, chairs & organizing team",
      },
      {
        label: "Area Chairs",
        href: "/committees/area-chairs",
        description: "Technical area chairs",
      },
    ],
  },
  {
    label: "Call for Papers",
    href: "/call-for-papers",
    children: [
      {
        label: "Topics & Guidelines",
        href: "/call-for-papers",
        description: "Scope, tracks, submission format",
      },
      {
        label: "Camera-Ready Instructions",
        href: "/camera-ready",
        description: "Final manuscript preparation",
      },
    ],
  },
  { label: "Important Dates", href: "/important-dates" },
  { label: "Registration", href: "/registration" },
  {
    label: "Program",
    href: "/program",
    children: [
      {
        label: "Schedule",
        href: "/program",
        description: "Sessions & timings",
      },
      {
        label: "Keynote Speakers",
        href: "/keynote-speakers",
        description: "Invited talks",
      },
      {
        label: "PhD Symposium",
        href: "/phd-symposium",
        description: "Doctoral consortium",
      },
    ],
  },
  { label: "Venue & Travel", href: "/venue" },
  {
    label: "History",
    href: "",
    children: [
      {
        label: "CVMI 2026",
        href: "https://cvmi2026.coeptech.ac.in/",
        description: "COEP Technological University, Pune",
        external: true,
      },
      { label: "CVMI 2025", description: "NIT Rourkela" },
      { label: "CVMI 2024", description: "IIIT Allahabad" },
      { label: "CVMI 2023", description: "ABV-IIITM Gwalior" },
      { label: "CVMI 2022", description: "IIIT Allahabad" },
    ],
  },
];

export const flatNavItems: NavLink[] = navItems.flatMap((item) =>
  item.children ? item.children : [item],
);
