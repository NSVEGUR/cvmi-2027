export type Sponsor = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

export const sponsors: Sponsor[] = [
  {
    name: "IEEE Signal Processing Society - UP Chapter",
    logo: "/images/sponsors/ieee-sps-up-chapter.jpg",
    width: 220,
    height: 147,
  },
  {
    name: "IEEE Madras Section",
    logo: "/images/sponsors/ieee-mas.webp",
    width: 220,
    height: 147,
  },
];

export type SponsorshipTier = {
  tier: string;
  fund: string;
  passes: string;
  stall: string;
  websiteBranding: boolean;
  brochureBranding: boolean;
  industrySession: boolean;
  breakBranding: boolean;
};

export const sponsorshipTiers: SponsorshipTier[] = [
  {
    tier: "Platinum",
    fund: "₹5,00,000",
    passes: "7",
    stall: "Stall",
    websiteBranding: true,
    brochureBranding: true,
    industrySession: true,
    breakBranding: true,
  },
  {
    tier: "Diamond",
    fund: "₹3,00,000",
    passes: "4",
    stall: "Stall",
    websiteBranding: true,
    brochureBranding: true,
    industrySession: true,
    breakBranding: false,
  },
  {
    tier: "Gold",
    fund: "₹2,00,000",
    passes: "3",
    stall: "Table",
    websiteBranding: true,
    brochureBranding: true,
    industrySession: true,
    breakBranding: false,
  },
  {
    tier: "Silver",
    fund: "₹1,00,000",
    passes: "2",
    stall: "Table",
    websiteBranding: true,
    brochureBranding: false,
    industrySession: false,
    breakBranding: false,
  },
  {
    tier: "Bronze",
    fund: "₹50,000",
    passes: "1",
    stall: "No",
    websiteBranding: true,
    brochureBranding: false,
    industrySession: false,
    breakBranding: false,
  },
  {
    tier: "Awards & Session Sponsorship",
    fund: "On discussion with organizers",
    passes: "1",
    stall: "No",
    websiteBranding: true,
    brochureBranding: false,
    industrySession: false,
    breakBranding: false,
  },
];
