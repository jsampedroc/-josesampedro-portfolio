import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export const Badge = ({ className = "", variant = "default", ...props }: BadgeProps) => {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
  const styles = {
    default: "bg-black text-white",
    secondary: "bg-neutral-200 text-neutral-900",
    outline: "border border-neutral-300 text-neutral-900",
  } as const;
  return <span className={`${base} ${styles[variant]} ${className}`} {...props} />;
};
