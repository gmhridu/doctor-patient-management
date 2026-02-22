"use client";

import { Section, SectionHeader } from "./section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  ChatTextIcon,
  ClockIcon,
  MapPinIcon,
  StarIcon,
  UsersIcon,
  VideoIcon,
} from "@phosphor-icons/react";

interface Doctor {
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  location: string;
  availability: string;
  initials: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 328,
    location: "New York, NY",
    availability: "Available Today",
    initials: "SM",
  },
  {
    name: "Dr. James Anderson",
    specialty: "Family Medicine",
    rating: 4.8,
    reviews: 412,
    location: "Los Angeles, CA",
    availability: "Next Available: Tomorrow",
    initials: "JA",
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Dermatologist",
    rating: 4.9,
    reviews: 256,
    location: "Chicago, IL",
    availability: "Available Today",
    initials: "EC",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Robert Thompson",
    role: "Patient since 2023",
    content:
      "The platform transformed how I manage my healthcare. Booking visits and messaging doctors is effortless.",
    avatar: "RT",
  },
  {
    name: "Maria Garcia",
    role: "Patient since 2022",
    content:
      "Telemedicine is seamless and prescription tracking keeps everything organized. Highly recommended!",
    avatar: "MG",
  },
];

export function Doctors() {
  return (
    <Section id="doctors" background="slate">
      <SectionHeader
        badge="Our Network"
        title="Trusted Healthcare Professionals"
        description="Connect with board-certified doctors who provide personalized and accessible care."
      />

      {/* Doctors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 mb-16">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} index={index} />
        ))}
      </div>

      {/* Testimonials */}
      <div className="bg-card rounded-2xl border border-border/50 p-6 sm:p-8 lg:p-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <UsersIcon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              What Our Patients Say
            </h3>
            <p className="text-sm text-muted-foreground">
              Real experiences from real patients
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} testimonial={item} />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border/50">
          {[
            { value: "50K+", label: "Happy Patients" },
            { value: "4.9", label: "Average Rating" },
            { value: "500+", label: "Verified Doctors" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function DoctorCard({ doctor, index }: { doctor: Doctor; index: number }) {
  return (
    <Card
      className={cn(
        "group overflow-hidden border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-xl",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <CardContent className="p-0">
        {/* Header */}
        <div className="bg-linear-to-br from-primary/10 via-primary/5 to-transparent p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16 border-2 border-primary/20 ring-2 ring-background shadow-lg">
              <AvatarFallback className="bg-primary/20 text-primary text-lg font-semibold">
                {doctor.initials}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                {doctor.name}
              </h3>
              <p className="text-sm text-primary font-medium">
                {doctor.specialty}
              </p>

              <div className="flex items-center gap-1 mt-1">
                <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-foreground">
                  {doctor.rating}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({doctor.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPinIcon className="h-4 w-4 text-primary" />
            <span>{doctor.location}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <ClockIcon className="h-4 w-4 text-green-500" />
            <span className="text-green-600 font-medium">
              {doctor.availability}
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1">
              <CalendarIcon className="mr-2 h-4 w-4" />
              Book Visit
            </Button>

            <Button size="sm" variant="outline" className="px-3">
              <VideoIcon className="h-4 w-4" />
            </Button>

            <Button size="sm" variant="outline" className="px-3">
              <ChatTextIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-4 sm:p-6 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/20 transition-colors">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12 border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary font-medium">
            {testimonial.avatar}
          </AvatarFallback>
        </Avatar>

        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground mb-3">
            {testimonial.role}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            &quot;{testimonial.content}&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
