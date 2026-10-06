// Interactive Hover Button (21st.dev), rendered as a link instead of a button.
// The original floods the button from a small dot; here the colour fades in
// across the whole button instead (Marc did not want the dot).
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HoverLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

export function HoverLink({ text, className, ...props }: HoverLinkProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex min-w-36 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-foreground/15 bg-background px-5 py-2.5 text-center text-sm font-semibold",
        className,
      )}
      {...props}
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <span className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="size-4" />
      </span>
    </a>
  );
}
