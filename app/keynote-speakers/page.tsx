import { ComingSoon } from "@/components/coming-soon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keynote Speakers | CVMI 2027",
};

export default function KeynoteSpeakersPage() {
  return (
    <ComingSoon
      title="Keynote speakers"
      description="Invited talks from distinguished academicians and industry experts will be announced as they are confirmed."
    />
  );
}
