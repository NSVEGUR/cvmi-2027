import { ComingSoon } from "@/components/coming-soon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Advisory Committee | CVMI 2027",
};

export default function InternationalAdvisoryCommitteePage() {
  return (
    <ComingSoon
      title="International Advisory Committee"
      description="The list of international advisory committee members will be announced soon."
    />
  );
}
