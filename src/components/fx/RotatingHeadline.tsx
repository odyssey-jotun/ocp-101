// Animated Hero (21st.dev): the last words of the line spring in and out.
// Here they run through the three ways of building connection once and stop on the last,
// so nothing keeps moving. Screen readers hear the whole line as plain text.
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function RotatingHeadline({ lead, words }: { lead: string; words: string[] }) {
  const [n, setN] = useState(0);
  const still = useReducedMotion();
  useEffect(() => {
    if (still || n === words.length - 1) return;
    const t = setTimeout(() => setN((n + 1) % words.length), 2400);
    return () => clearTimeout(t);
  }, [n, words.length, still]);
  // Reduced motion: show the last word straight away.
  const shown = still ? words.length - 1 : n;
  const bare = words.map((w) => w.replace(/\.$/, ""));
  return (
    <p className="font-serif text-3xl leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
      <span className="sr-only">{`${lead} ${bare.slice(0, -1).join(", ")}, and ${bare[bare.length - 1]}.`}</span>
      <span aria-hidden="true">{lead}</span>
      <span aria-hidden="true" className="relative block h-[1.2em] overflow-hidden text-primary">
        {words.map((w, i) => (
          <motion.span
            key={w}
            className="absolute left-0 top-0 whitespace-nowrap italic"
            initial={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            animate={shown === i ? { y: 0, opacity: 1 } : { y: shown > i ? "-120%" : "120%", opacity: 0 }}
          >
            {w}
          </motion.span>
        ))}
      </span>
    </p>
  );
}
