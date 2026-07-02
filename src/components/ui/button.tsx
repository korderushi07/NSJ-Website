import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 tracking-wider uppercase",
  {
    variants: {
      variant: {
        primary:
          "bg-studio-accent text-studio-bg hover:bg-studio-accent/90 shadow-[0_4px_20px_rgba(160,125,84,0.15)] active:scale-[0.98]",
        secondary:
          "border border-studio-border text-studio-heading hover:border-studio-accent hover:bg-studio-accent hover:text-studio-bg active:scale-[0.98]",
        ghost:
          "text-studio-body hover:text-studio-heading hover:bg-studio-card/50",
        link:
          "text-studio-accent underline-offset-4 hover:underline lowercase tracking-normal font-serif text-lg normal-case",
      },
      size: {
        default: "h-11 px-8 py-3 text-xs",
        sm: "h-9 px-6 py-2 text-[10px]",
        lg: "h-14 px-10 py-4 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
