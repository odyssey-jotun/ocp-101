import { SqueezeCarousel, type SqueezeSlide } from "@/components/ui/carousel-squeeze";

type Outcome = { title: string; image: string; alt: string; points: string[] };

export default function Outcomes({ outcomes, base }: { outcomes: Outcome[]; base: string }) {
  const slides: SqueezeSlide[] = outcomes.map((o, i) => ({
    id: i,
    title: o.title,
    description: o.points[0],
    image: `${base}img/${o.image}-1600.webp`,
    imageAlt: o.alt,
    overlay: (
      <span className="font-serif text-4xl leading-none text-white sm:text-5xl">0{i + 1}</span>
    ),
  }));
  return (
    <SqueezeCarousel
      slides={slides}
      label="Learning outcomes"
      height="clamp(220px, 34cqi, 380px)"
      radius={18}
      gap={12}
      slatWidth={10}
      style={{ fontFamily: "inherit" }}
    />
  );
}
