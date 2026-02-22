import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Badge } from "../ui/badge";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "slate" | "teal" | "gradient";
}

const backgroundStyles = {
  white: "bg-white",
  slate: "bg-linear-to-b from-slate-50 to-white",
  teal: "bg-linear-to-b from-[#f0fdfa]/50 to-white",
  gradient: "bg-linear-to-br from-[#0f766e] via-[#115e59] to-[#1e3a5f]",
};

export const Section = ({
  children,
  className,
  id,
  background = "white",
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-20 @4xl:py-28",
        backgroundStyles[background],
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 @xl:px-6 @4xl:px-8">
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({
  badge,
  title,
  description,
  centered = true,
}: {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) => {
  return (
    <div
      className={cn(
        "mb-16",
        centered && "text-center",
        !centered && "text-left",
      )}
    >
      {badge && (
        <Badge
          variant="secondary"
          className="p-3.5 text-sm font-medium gap-2 border border-primary/20 bg-primary/5 mb-4"
        >
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-primary" />
          </span>
          {badge}
        </Badge>
      )}
      <h2 className="heading-display heading-lg text-slate-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="body-lg text-slate-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
