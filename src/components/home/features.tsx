"use client";

import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "./section";
import {
  CalendarIcon,
  ChartLineUpIcon,
  ChatTextIcon,
  CurrencyDollarIcon,
  FileTextIcon,
  LockIcon,
  type Icon,
} from "@phosphor-icons/react";
import { MediCareCard } from "./medi-care-card";

export const Features = () => {
  const features = [
    {
      title: "Appointment Scheduling",
      description:
        "Smart scheduling with automated reminders, online booking, and real-time availability sync across all providers.",
      icon: CalendarIcon,
    },
    {
      title: "Digital Medical Records",
      description:
        "Secure, HIPAA-compliant patient records with easy search, custom templates, and instant access from any device.",
      icon: FileTextIcon,
    },
    {
      title: "Automated Billing",
      description:
        "Streamline insurance claims, generate invoices, and accept payments online. Reduce no-shows with deposits.",
      icon: CurrencyDollarIcon,
    },
    {
      title: "Patient Communication",
      description:
        "Secure messaging, automated appointment reminders via SMS/email, and telehealth integration built-in.",
      icon: ChatTextIcon,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time insights on practice performance, patient trends, revenue tracking, and customizable reports.",
      icon: ChartLineUpIcon,
    },
    {
      title: "HIPAA Compliant",
      description:
        "Enterprise-grade security with end-to-end encryption, audit logs, and full HIPAA compliance built-in.",
      icon: LockIcon,
    },
  ];

  return (
    <Section id="features">
      <div className={cn("transition-all duration-600")}>
        <SectionHeader
          badge="Core Features"
          title="Everything You Need to Run Your Practice"
          description="From appointment scheduling to billing, DocPulse handles it all so you can focus on what matters most—your patients."
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </Section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: Icon;
  index: number;
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div
      className={cn("transition-all duration-500")}
      style={{ transitionDelay: `${props.index * 100}ms` }}
    >
      <MediCareCard
        title={props.title}
        description={props.description}
        icon={props.icon}
      />
    </div>
  );
};
