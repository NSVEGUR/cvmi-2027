import { ComingSoon } from "@/components/coming-soon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Advisory Committee | CVMI 2027",
};

export default function NationalAdvisoryCommitteePage() {
  return (
    <ComingSoon
      title="National Advisory Committee"
      description="The list of national advisory committee members will be announced soon."
    />
  );
}
