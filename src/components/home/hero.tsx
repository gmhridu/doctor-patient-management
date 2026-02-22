"use client";

import {
  ArrowRightIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  PlayIcon,
  ShieldIcon,
  StarIcon,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const trustBadges = [
  {
    icon: ShieldIcon,
    text: "HIPAA Compliant",
  },
  {
    icon: CheckCircleIcon,
    text: "SOC 2 Certified",
  },
  {
    icon: StarIcon,
    text: "4.9/5 Rating",
  },
];

const stats = [
  { value: "10K+", label: "Active Patients" },
  { value: "500+", label: "Verified Doctors" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Support Available" },
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-accent/30 via-background to-background">
      {/* background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size:[32px_32px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-150 bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="@container container mx-auto px-4 @xl:px-6 @4xl:px-8 py-16 @xl:py-20 @4xl:py-28">
        <div className="grid @4xl:grid-cols-2 gap-12 @4xl:gap-16 items-center">
          {/* left content */}
          <div className="flex flex-col gap-6 @4xl:gap-8 text-center @4xl:text-left">
            <div className="flex justify-center @4xl:justify-start">
              <Badge
                variant="secondary"
                className="px-3 py-1.5 text-sm font-medium gap-2 border border-primary/20 bg-primary/5"
              >
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full size-2 bg-primary" />
                </span>
                Trusted by 1500+ Healthcare Providers
              </Badge>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-4xl @xl:text-5xl @6xl:text-6xl font-bold leading-tight tracking-tight text-foreground">
                Modern Healthcare
                <span className="block text-primary mt-2">
                  Management Platform
                </span>
              </h1>

              <p className="text-lg @xl:text-xl text-muted-foreground max-w-xl mx-auto @4xl:mx-0 leading-relaxed">
                Streamline patient care with our all-in-one solution. Schedule
                appointments, manage records, and communicate securely — all in
                one powerful platform.
              </p>
            </div>

            {/* CTA Buttons */}

            <div className="flex flex-col @xl:flex-row gap-3 @xl:gap-4 justify-center @4xl:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 gap-2 h-12 px-6 text-base cursor-pointer"
              >
                Get Started Free
                <ArrowRightIcon className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 h-12 px-6 text-base border-border hover:bg-accent cursor-pointer"
              >
                <PlayIcon className="size-4" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center @4xl:justify-start gap-4 @xl:gap-6 pt-2">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <badge.icon className="size-4 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right content */}
          <div className="relative @4xl:pl-8">
            <div className="relative">
              <div className="relative bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                <div className="bg-linear-to-r from-primary/10 to-primary/5 px-4 @xl:px-6 py-4 border-b border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <CalendarIcon className="size-5 text-primary" />
                      </div>

                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          Today&apos;s Appointments
                        </p>
                        <p className="text-xs text-muted-foreground">
                          December 15, 2024
                        </p>
                      </div>
                    </div>

                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0"
                    >
                      8 Scheduled
                    </Badge>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 @xl:p-6 space-y-4">
                  {/* Appointment Items */}
                  {[
                    {
                      time: "09:00 AM",
                      patient: "Sarah Johnson",
                      type: "Checkup",
                      status: "Confirmed",
                    },
                    {
                      time: "10:30 AM",
                      patient: "Michael Chen",
                      type: "Follow-up",
                      status: "In Progress",
                    },
                    {
                      time: "02:00 PM",
                      patient: "Emily Davis",
                      type: "Consultation",
                      status: "Pending",
                    },
                  ].map((apt, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-xs font-medium text-muted-foreground w-16">
                          {apt.time}
                        </div>
                        <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                          {apt.patient
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {apt.patient}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {apt.type}
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          apt.status === "Confirmed"
                            ? "border-green-500/50 text-green-600 bg-green-50 dark:bg-green-950"
                            : apt.status === "In Progress"
                              ? "border-primary/50 text-primary bg-primary/5"
                              : "border-yellow-500/50 text-yellow-600 bg-yellow-50 dark:bg-yellow-950"
                        }`}
                      >
                        {apt.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* floating cards */}
              <div className="absolute -bottom-4 -left-4 @xl:-left-8 bg-card rounded-xl shadow-lg border border-border/50 p-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <CheckCircleIcon className="size-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Appointments Today
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      98% On Time
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 @xl:-right-8 bg-card rounded-xl shadow-lg border border-border/50 p-4 animate-in fade-in slide-in-from-top-4 duration-700 delay-500">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ClockIcon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Avg. Wait Time
                    </p>
                    <p className="text-lg font-bold text-foreground">8 mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 @xl:mt-20 @4xl:mt-24 grid grid-cols-2 @4xl:grid-cols-4 gap-6 @4xl:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 @xl:p-6 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-2xl @xl:text-3xl @4xl:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
