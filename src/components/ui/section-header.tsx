import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  caption: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  caption,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-studio-accent mb-3 font-sans">
        {caption}
      </span>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-studio-heading leading-tight max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm md:text-base text-studio-body/80 max-w-2xl leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
