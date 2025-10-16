import * as React from "react";

export const Separator = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`my-4 h-px w-full bg-neutral-200 ${className}`} {...props} />
);
