"use client";

import { motion } from "framer-motion";

type Detection = {
  label: string;
  style: React.CSSProperties;
};

const detections: Detection[] = [
  {
    label: "Campus block",
    style: { left: "6%", top: "12%", width: "38%", height: "34%" },
  },
  {
    label: "Green cover",
    style: { left: "52%", top: "10%", width: "42%", height: "26%" },
  },
  {
    label: "Host institute",
    style: { left: "20%", top: "54%", width: "56%", height: "32%" },
  },
];

const boxVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6 + i * 0.35,
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const tagVariants = {
  hidden: { opacity: 0, y: 4 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.95 + i * 0.35,
      duration: 0.35,
      ease: "easeOut" as const,
    },
  }),
};

export function DetectionOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-emerald-300/20 to-transparent"
        initial={{ y: "-100%" }}
        animate={{ y: "300%" }}
        transition={{
          delay: 1.6,
          duration: 3.2,
          repeat: Infinity,
          repeatDelay: 0,
          ease: "linear",
        }}
      />
      {/* 
      {detections.map((detection, i) => (
        <motion.div
          key={detection.label}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={boxVariants}
          className="absolute rounded-[3px] border border-emerald-300/70"
          style={detection.style}
        >
          <span className="absolute -left-px -top-px size-2 border-l-2 border-t-2 border-emerald-300" />
          <span className="absolute -right-px -top-px size-2 border-r-2 border-t-2 border-emerald-300" />
          <span className="absolute -left-px -bottom-px size-2 border-b-2 border-l-2 border-emerald-300" />
          <span className="absolute -right-px -bottom-px size-2 border-b-2 border-r-2 border-emerald-300" />
          <motion.span
            custom={i}
            variants={tagVariants}
            initial="hidden"
            animate="visible"
            className="absolute left-0 top-0 -translate-y-full whitespace-nowrap rounded-[3px] bg-emerald-400/90 px-1.5 py-0.5 font-mono text-[9px] font-medium leading-none text-emerald-950"
          >
            {detection.label}
          </motion.span>
        </motion.div>
      ))} */}
    </div>
  );
}
