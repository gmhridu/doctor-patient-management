"use client";

import { Section, SectionHeader } from "./section";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  featured?: boolean;
  buttonText: string;
}

export function Pricing() {
  const plans: Plan[] = [
    {
      name: "Basic",
      description: "Perfect for solo practitioners",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        "Up to 500 patients",
        "Appointment scheduling",
        "Digital records",
        "Email support",
      ],
      buttonText: "Start Free Trial",
    },
    {
      name: "Professional",
      description: "Ideal for growing practices",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Up to 2,500 patients",
        "Everything in Basic",
        "Automated billing",
        "Telehealth integration",
        "Priority support",
      ],
      featured: true,
      buttonText: "Start Free Trial",
    },
    {
      name: "Enterprise",
      description: "For large healthcare organizations",
      monthlyPrice: 249,
      annualPrice: 199,
      features: [
        "Unlimited patients",
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
      ],
      buttonText: "Contact Sales",
    },
  ];

  const PricingCards = (isAnnual: boolean) => (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {plans.map((plan, index) => {
        const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

        return (
          <div
            key={plan.name}
            className={cn(
              "relative bg-white rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-xl",
              plan.featured && "ring-2 ring-primary scale-[1.02]",
            )}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {plan.featured && (
              <span className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-slate-600 mb-6">{plan.description}</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">${price}</span>
              <span className="text-slate-500 ml-1">
                /{isAnnual ? "year" : "month"}
              </span>

              {isAnnual && (
                <p className="text-xs text-slate-500 mt-1">Billed annually</p>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.featured ? "default" : "outline"}
              className="w-full"
            >
              {plan.buttonText}
            </Button>
          </div>
        );
      })}
    </div>
  );

  return (
    <Section id="pricing">
      <SectionHeader
        badge="Pricing Plans"
        title="Transparent Pricing for Every Practice"
        description="Choose the plan that fits your practice size. All plans include core features with no hidden fees."
      />

      <div className="flex flex-col items-center mt-12">
        <Tabs defaultValue="monthly" className="w-full max-w-6xl">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-fit grid-cols-2 rounded-full bg-slate-100 p-1">
              <TabsTrigger value="monthly" className="rounded-full px-6">
                Monthly
              </TabsTrigger>

              <TabsTrigger value="annual" className="rounded-full px-6">
                Annual
                <span className="ml-1 text-xs text-primary font-semibold">
                  Save 20%
                </span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly">{PricingCards(false)}</TabsContent>

          <TabsContent value="annual">{PricingCards(true)}</TabsContent>
        </Tabs>
      </div>
    </Section>
  );
}
