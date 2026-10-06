// Background Paths (21st.dev), cut down to just the sweeping lines and
// recoloured to the site accent. Durations are fixed per line (the original
// used Math.random, which differs between server and browser), and the lines
// hold still for readers who ask for less motion.
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

function FloatingPaths({ position, still }: { position: number; still: boolean }) {
  const paths = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position} ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.7 + i * 0.045,
  }));
  return (
    <svg className="absolute inset-0 h-full w-full text-primary" viewBox="0 0 696 316" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {paths.map((p) => (
        <motion.path
          key={p.id}
          d={p.d}
          stroke="currentColor"
          strokeWidth={p.width}
          strokeOpacity={0.14 + p.id * 0.022}
          initial={{ pathLength: 0.3, opacity: 0.6 }}
          animate={still ? { pathLength: 1, opacity: 0.5 } : { pathLength: 1, opacity: [0.3, 0.6, 0.3], pathOffset: [0, 1, 0] }}
          transition={still ? { duration: 0 } : { duration: 22 + ((p.id * 7) % 11), repeat: Infinity, ease: "linear" }}
        />
      ))}
    </svg>
  );
}

export default function PathsBackdrop({ className }: { className?: string }) {
  const still = !!useReducedMotion();
  return (
    <div className={cn("pointer-events-none absolute inset-0 -scale-x-100 overflow-hidden", className)}>
      <FloatingPaths position={1} still={still} />
      <FloatingPaths position={-1} still={still} />
    </div>
  );
}
