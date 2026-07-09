import { ComingSoon } from "@/components/coming-soon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PhD Symposium | CVMI 2027",
};

export default function PhdSymposiumPage() {
  return (
    <ComingSoon
      title="PhD Symposium"
      description="Call, format, and evaluation details for the CVMI 2027 doctoral consortium will be published alongside the main call for papers."
    />
  );
}
