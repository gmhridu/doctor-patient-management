"use client";

import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "./section";
import { Button } from "../ui/button";

const steps = [
  {
    number: 1,
    title: "Create Your Account",
    description:
      "Sign up in under 2 minutes. No credit card required. Set up your practice profile and customize your settings.",
  },
  {
    number: 2,
    title: "Import Your Data",
    description:
      "Our migration wizard helps you import patient records, schedules, and billing data from any existing system.",
  },
  {
    number: 3,
    title: "Start Managing",
    description:
      "Begin scheduling appointments, managing patients, and processing billing. Our team is here to support you 24/7.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" background="slate">
      <div className={cn("transition-all duration-600")}>
        <SectionHeader
          badge="Getting Started"
          title="Three Simple Steps to Modernization"
          description="Get your practice up and running in minutes, not months. Our streamlined onboarding makes the transition seamless."
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {steps.map((step, index) => (
          <StepCard
            key={step.number}
            step={step}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>

      <div className="mt-16 text-center transition-all duration-600">
        <Button size="lg" className="px-6 py-4">
          Get Started
        </Button>
      </div>
    </Section>
  );
}

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[number];
  index: number;
  isLast: boolean;
}) {
  return (
    <div
      className="relative transition-all duration-500"
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl relative mb-6">
          {step.number}
          <span className="absolute -inset-1  rounded-full border-2 border-border opacity-30" />
        </div>

        <h3 className="font-semibold text-lg text-slate-900 mb-3">
          {step.title}
        </h3>
        <p className="text-slate-600 leading-relaxed">{step.description}</p>
      </div>

      {/* Connector Line - Desktop only */}
      {!isLast && (
        <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-5px)] h-0.5 bg-linear-to-r from-[#ccfbf1] to-primary/80" />
      )}
    </div>
  );
}
