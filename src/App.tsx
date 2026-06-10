import { Navbar } from '@/sections/Navbar';
import { HeroSection } from '@/sections/HeroSection';
import { EcosystemSection } from '@/sections/EcosystemSection';
import { WhyI4vanSection } from '@/sections/WhyI4vanSection';
import { FeaturesSection } from '@/sections/FeaturesSection';
import { HowItWorksSection } from '@/sections/HowItWorksSection';
import { AppDownloadSection } from '@/sections/AppDownloadSection';
import { TrustSection } from '@/sections/TrustSection';
import { CTASection } from '@/sections/CTASection';
import { FooterSection } from '@/sections/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <EcosystemSection />
        <WhyI4vanSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AppDownloadSection />
        <TrustSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
