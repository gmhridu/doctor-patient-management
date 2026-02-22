"use client";

import { StarIcon } from "@phosphor-icons/react";
import { Section, SectionHeader } from "./section";

const testimonials = [
  {
    name: "Dr. Rebecca Chen",
    title: "Family Medicine, Austin TX",
    initials: "DR",
    bgColor: "bg-[#0f766e]",
    quote:
      "DocPulse transformed our practice. We've reduced no-shows by 40% and our staff spends 50% less time on administrative tasks. It's been a game-changer.",
  },
  {
    name: "Michael Johnson",
    title: "Practice Manager, Denver CO",
    initials: "MJ",
    bgColor: "bg-[#1e3a5f]",
    quote:
      "The migration from our old system was seamless. The support team was incredibly helpful, and our patients love the online booking feature.",
  },
  {
    name: "Dr. Sarah Patel",
    title: "Dermatologist, Seattle WA",
    initials: "SP",
    bgColor: "bg-[#f43f5e]",
    quote:
      "Finally, a healthcare platform that's actually intuitive. The analytics dashboard gives me insights I never had before. Highly recommend.",
  },
];

export function Testimonials() {
  return (
    <Section id="contact" background="cyan">
      <div className="transition-all duration-500">
        <SectionHeader
          badge="Testimonials"
          title="Trusted by Healthcare Professionals"
          description="See what doctors and practice managers are saying about DocPulse."
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-lg relative transition-all duration-500"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-4 left-6 font-display font-bold text-4xl text-[#0f766e] opacity-20 leading-none">
        &ldquo;
      </div>

      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            size={18}
            className="text-amber-500 fill-amber-500"
            strokeWidth={1}
          />
        ))}
      </div>

      <p className="text-slate-700 mb-6 leading-relaxed">{testimonial.quote}</p>

      <div className="flex items-center gap-3">
        <div
          className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-semibold`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{testimonial.name}</p>
          <p className="text-sm text-slate-500">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}
