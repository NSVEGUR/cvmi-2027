import { ComingSoon } from "@/components/coming-soon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors | CVMI 2027",
};

export default function SponsorsPage() {
  return (
    <ComingSoon
      title="Sponsors"
      description="CVMI 2027 sponsorship tiers and confirmed partners will be listed here. Interested organizations can reach the sponsorship chairs via the contact page."
    />
  );
}
