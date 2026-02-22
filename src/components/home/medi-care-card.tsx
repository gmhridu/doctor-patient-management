import type { Icon } from "@phosphor-icons/react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MediCareCardProps {
  title: string;
  description: string;
  icon?: Icon;
  featured?: boolean;
  className?: string;
}

export const MediCareCard = ({
  title,
  description,
  icon: Icon,
  featured = false,
  className,
}: MediCareCardProps) => {
  return (
    <Card
      className={cn(
        "p-6 lg:p-8 border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 rounded-2xl cursor-pointer group h-full",
        featured && "border-2 border-primary/30",
        className,
      )}
    >
      {Icon && (
        <div className="size-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground duration-300 flex items-center justify-center mb-5 transition-colors">
          <Icon className="size-6" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};
