// Interactive Hover Button (21st.dev), rendered as a link instead of a button.
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
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <span className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="size-4" />
      </span>
      <span className="absolute left-[14%] top-[42%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary" />
    </a>
  );
}
