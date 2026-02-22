import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { HowItWorks } from "@/components/home/how-it-works";
import { Doctors } from "@/components/home/doctors";
import { Pricing } from "@/components/home/pricing";

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Doctors />
      <Pricing />
    </main>
  );
}
