import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-md bg-paper px-4 py-2 text-sm ring-1 ring-ink/15 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand transition-shadow disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:ring-error",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
