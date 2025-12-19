import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-24 bg-[#1e3a5a] relative overflow-hidden">
            {/* Decorative glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />

            {/* Wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20">
                    <path
                        d="M0,64 C320,120 420,20 720,64 C1020,108 1120,20 1440,64 L1440,120 L0,120 Z"
                        fill="#4db8c7"
                        opacity="0.2"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693b3b5559a4e0ab84c19ebd/8648fa26f_BBLogo_CompleteBordered.png"
                        alt="Beacon Blocker"
                        className="w-32 h-32 mx-auto mb-8"
                    />

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Take Control of Your Browsing?
                    </h2>

                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Experience smarter browsing with Beacon Blocker's intelligent AI assistant.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-[#c92a2a] hover:bg-[#a92525] text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <Chrome className="w-5 h-5 mr-2" />
                            Start Free Trial
                        </Button>
                        <Button
                            size="lg"
                            className="bg-white hover:bg-slate-100 text-[#1e3a5a] px-8 py-6 text-lg rounded-xl transition-all"
                            onClick={() => {
                                const element = document.getElementById('faq');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Learn More
                        </Button>
                    </div>

                    <p className="mt-8 text-slate-400 text-sm">
                        Available exclusively for Google Chrome
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
