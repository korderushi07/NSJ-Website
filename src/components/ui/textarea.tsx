import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full border border-studio-border bg-studio-card px-4 py-3 text-sm text-studio-heading ring-offset-studio-bg placeholder:text-studio-body/40 focus-visible:outline-none focus-visible:border-studio-accent transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50 font-sans resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
