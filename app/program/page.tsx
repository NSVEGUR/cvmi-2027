import { ComingSoon } from "@/components/coming-soon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program | CVMI 2027",
};

export default function ProgramPage() {
  return (
    <ComingSoon
      title="Program schedule"
      description="The detailed session-by-session schedule will be published once the technical program is finalized."
    />
  );
}
