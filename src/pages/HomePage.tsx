import AdvisorsSection from "../sections/AdvisorsSection";
import AuthenticationSection from "../sections/AuthenticationSection";
import CTASection from "../sections/CTASection";
import HeroSection from "../sections/HeroSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import WhySection from "../sections/WhySection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <AdvisorsSection />
      <AuthenticationSection />
      <WhySection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}

