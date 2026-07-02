import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  caption: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  theme?: "dark" | "light";
}

export function SectionHeader({
  caption,
  title,
  description,
  align = "left",
  className,
  theme = "dark",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 flex flex-col",
        align === "center" ? "items-center text-center animate-fade-in" : "items-start text-left",
        className
      )}
    >
      <span className={cn(
        "text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] mb-3 font-sans",
        theme === "light" ? "text-studio-accent/90" : "text-studio-accent"
      )}>
        {caption}
      </span>
      <h2 className={cn(
        "text-3xl md:text-5xl font-sans font-extrabold leading-tight tracking-tight uppercase max-w-4xl",
        theme === "light" ? "text-studio-bg" : "text-studio-heading"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-sm md:text-base max-w-2xl leading-relaxed font-sans font-light",
          theme === "light" ? "text-stone-600" : "text-studio-body/80"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
