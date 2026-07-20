"use client";

import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CampusTourDialog() {
  return (
    <Dialog>
      <DialogTrigger
        render={<Button variant="destructive" size="lg" className="px-6" />}
      >
        <MapPin />
        IIITDM Campus Tour
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogTitle>IIITDM Kancheepuram campus tour</DialogTitle>
        <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/ujtUyW30P60"
            title="IIITDM Kancheepuram Campus Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
