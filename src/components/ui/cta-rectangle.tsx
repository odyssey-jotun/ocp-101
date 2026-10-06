// CTA with Rectangle (21st.dev, Launch UI), adapted: no badge, no load-time
// entrance (it sits at the bottom of the page, so the animation would be over
// before anyone saw it), and a link button styled with the shared Button.
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTAProps {
  title: string
  description?: string
  action: { text: string; href: string }
  className?: string
}

export function CTASection({ title, description, action, className }: CTAProps) {
  return (
    <section className={cn("overflow-hidden", className)}>
      <div className="relative mx-auto flex max-w-container flex-col items-center px-8 py-16 text-center md:py-24">
        <h2 className="h-section max-w-3xl">{title}</h2>
        {description && (
          <p className="mt-1 max-w-xl text-muted-foreground">{description}</p>
        )}
        <Button size="lg" className="mt-8 rounded-full px-8" asChild>
          <a href={action.href} target="_blank" rel="noreferrer">{action.text}</a>
        </Button>
        <div className="fade-top-lg pointer-events-none absolute inset-0 rounded-[28px] shadow-glow" />
      </div>
    </section>
  )
}
