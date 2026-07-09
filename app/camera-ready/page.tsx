import { ComingSoon } from "@/components/coming-soon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camera-Ready Instructions | CVMI 2027",
};

export default function CameraReadyPage() {
  return (
    <ComingSoon
      title="Camera-ready instructions"
      description="Final manuscript formatting, IEEE copyright, and submission instructions will be posted after the acceptance notifications go out."
    />
  );
}
