// Gallery stand-in for the missing "hero-07-utils/cta", "hero-10-utils/cta" and "hero-04-utils/cta": a link styled with the shared button.
import { Button } from "@/components/ui/button";

export type CtaProps = {
  ctaEnabled?: boolean;
  text: string;
  link: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

export function Cta({ cta }: { cta: CtaProps }) {
  return (
    <Button asChild variant={cta.variant ?? "default"} size={cta.size ?? "default"}>
      <a href={cta.link || "#"}>{cta.text}</a>
    </Button>
  );
}
