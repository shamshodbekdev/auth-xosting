import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => (
    <label className={cn("group flex cursor-pointer items-start gap-3 text-sm text-gray-400", className)}>
      <span className="relative mt-0.5 flex h-5 w-5 shrink-0">
        <input ref={ref} type="checkbox" className="peer sr-only" {...props} />
        <span className="absolute inset-0 rounded-md border border-white/20 bg-white/[0.03] transition-all peer-checked:border-transparent peer-checked:bg-gradient-to-br peer-checked:from-primary-600 peer-checked:to-accent-500 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500/50 group-hover:border-white/40" />
        <Check className="relative m-auto h-3.5 w-3.5 scale-0 text-white transition-transform peer-checked:scale-100" strokeWidth={3} />
      </span>
      <span className="select-none">{label}</span>
    </label>
  )
);
Checkbox.displayName = "Checkbox";
