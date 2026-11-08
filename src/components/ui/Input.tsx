"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, error, type = "text", id, className, ...props }, ref) => {
    const [visible, setVisible] = useState(false);
    const isPassword = type === "password";
    const errorId = `${id}-error`;

    return (
      <div>
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-300">
          {label}
        </label>

        <div className="relative">
          {icon && (
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            id={id}
            type={isPassword && visible ? "text" : type}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={cn(
              "w-full rounded-xl border bg-white/[0.03] py-3 text-base text-white placeholder:text-gray-600 transition-all duration-300 focus:bg-white/[0.06] focus:outline-none focus:ring-2",
              icon ? "pl-12" : "pl-4",
              isPassword ? "pr-12" : "pr-4",
              error
                ? "border-red-500/50 focus:ring-red-500/30"
                : "border-white/10 hover:border-white/20 focus:border-primary-500/60 focus:ring-primary-500/30",
              className
            )}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              onClick={() => setVisible((v) => !v)}
              aria-label={visible ? "Parolni yashirish" : "Parolni ko'rsatish"}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-gray-500 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50"
            >
              {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          )}
        </div>

        {error && (
          <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
