import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { Doctors } from "@/components/home/doctors";
import { Pricing } from "@/components/home/pricing";
import { Testimonials } from "@/components/home/testimonials";
import { Contact } from "@/components/home/contact";

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Doctors />
      <Pricing />
      <Testimonials />
      <Contact />
    </main>
  );
}
