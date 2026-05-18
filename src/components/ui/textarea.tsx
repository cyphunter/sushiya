import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[140px] w-full rounded-md bg-paper px-4 py-3 text-sm ring-1 ring-ink/15 placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:ring-error",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";
