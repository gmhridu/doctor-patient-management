import { Button } from "../ui/button";
import { Section } from "./section";

export function Contact() {
  return (
    <Section background="gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-display font-bold text-white mb-4 transition-all duration-500">
          Ready to Transform Your Practice?
        </h2>

        <p className="text-lg text-white/90 mb-8 transition-all duration-500">
          Join thousands of healthcare providers who have already made the
          switch. Start your free trial today—no credit card required.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-500">
          <Button>Start 14-Day Free Trial</Button>
          <Button variant="outline" className="text-gray-900">Schedule a Demo</Button>
        </div>

        <p className="text-muted text-sm mt-6">
          Free 14-day trial · No credit card required · Cancel anytime
        </p>
      </div>
    </Section>
  );
}
