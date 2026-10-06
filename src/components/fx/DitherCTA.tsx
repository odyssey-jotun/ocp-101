// Dithering CTA (21st.dev): a rounded card over a drifting dithered-pixel
// shader that speeds up on hover. Adapted: cobalt pattern, no pill badge,
// a real link, shorter on phones, and the pattern stops for reduced motion.
import { ArrowRight } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { useReducedMotion } from "motion/react";

const Dithering = lazy(() => import("@paper-design/shaders-react").then((m) => ({ default: m.Dithering })));

export default function DitherCTA({ title, description, href, action }: { title: string; description: string; href: string; action: string }) {
  const [hover, setHover] = useState(false);
  const still = useReducedMotion();
  return (
    <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="relative flex min-h-[380px] flex-col items-center justify-center overflow-hidden rounded-[28px] border bg-card sm:min-h-[460px]">
        <Suspense fallback={<div className="absolute inset-0 bg-muted/30" />}>
          <div className="pointer-events-none absolute inset-0 z-0 opacity-35 mix-blend-multiply">
            <Dithering colorBack="#00000000" colorFront="#2b45b8" shape="warp" type="4x4" speed={still ? 0 : hover ? 0.6 : 0.2} className="size-full" minPixelRatio={1} />
          </div>
        </Suspense>
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-14 text-center">
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl">{title}</h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          <a href={href} target="_blank" rel="noreferrer" className="group mt-8 inline-flex h-13 items-center gap-3 rounded-full bg-primary px-9 py-3.5 text-base font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-primary/20 active:scale-95">
            {action}
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
