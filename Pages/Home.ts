import React from 'react';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FAQSection from '@/components/landing/FAQSection';
import CTASection from '@/components/landing/CTASection';

export default function Home() {
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