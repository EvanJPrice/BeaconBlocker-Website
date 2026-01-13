import React, { useEffect } from 'react';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FAQSection from '@/components/landing/FAQSection';
import CTASection from '@/components/landing/CTASection';

export default function Home() {
    useEffect(() => {
        // Set canonical URL for homepage
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://beaconblocker.com');
    }, []);

    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
