import { ComingSoon } from "@/components/coming-soon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors | CVMI 2027",
};

export default function SponsorsPage() {
  return (
    <ComingSoon
      title="Sponsors"
      description="Organizations supporting CVMI 2027 will be announced here as sponsorships are confirmed."
    />
  );
}
