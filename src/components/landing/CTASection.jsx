import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight, Gift } from 'lucide-react';

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

                    <p className="text-xl text-slate-300 mb-4 leading-relaxed">
                        Experience smarter browsing with AI-powered content blocking.
                    </p>

                    {/* Promo callout */}
                    <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/30 rounded-full px-5 py-2.5 mb-10">
                        <Gift className="w-4 h-4 text-amber-300" />
                        <span className="text-sm font-semibold text-amber-200">
                            Free to start — plus earn bonus days by referring friends
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://chromewebstore.google.com/detail/beacon-blocker/pcdcefcldhcnbmiejmihlcphbglflakm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className="bg-[#c92a2a] hover:bg-[#a92525] text-white px-8 py-6 text-lg rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 w-full"
                            >
                                <Chrome className="w-5 h-5 mr-2" />
                                Get Started for Free
                            </Button>
                        </a>
                        <a
                            href="https://dashboard.beaconblocker.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size="lg"
                                className="bg-white hover:bg-slate-100 text-[#1e3a5a] px-8 py-6 text-lg rounded-xl transition-all w-full"
                            >
                                <ArrowRight className="w-5 h-5 mr-2" />
                                Go to Dashboard
                            </Button>
                        </a>
                    </div>

                    <p className="mt-8 text-slate-400 text-sm">
                        Available exclusively for Google Chrome. Already a user? Manage your subscription from the dashboard.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
