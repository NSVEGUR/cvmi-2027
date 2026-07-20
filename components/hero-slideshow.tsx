"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const slides = [
  { src: "/images/campus.webp", alt: "IIITDM Kancheepuram campus" },
  { src: "/images/campus-2.jpg", alt: "IIITDM Kancheepuram campus flag court and lake" },
  { src: "/images/campus-3.jpg", alt: "IIITDM Kancheepuram campus at dusk" },
  { src: "/images/campus-4.jpg", alt: "IIITDM Kancheepuram hostel block at sunset" },
  { src: "/images/campus-5.jpg", alt: "IIITDM Kancheepuram campus skyline at sunset" },
];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      <AnimatePresence initial={false}>
        <motion.div
          key={slides[index].src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute right-3 top-3 z-10 flex gap-1.5">
        {slides.map((slide, i) => (
          <span
            key={slide.src}
            aria-hidden
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-4 bg-white" : "w-1.5 bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
