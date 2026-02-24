import React from 'react';
import { Button } from "@/components/ui/button";
import { Chrome, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            {/* Animated background waves */}
            <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
                <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <motion.path
                        initial={{ d: "M0,160 C320,240 420,80 720,160 C1020,240 1120,80 1440,160 L1440,320 L0,320 Z" }}
                        animate={{
                            d: [
                                "M0,160 C320,240 420,80 720,160 C1020,240 1120,80 1440,160 L1440,320 L0,320 Z",
                                "M0,160 C320,80 420,240 720,160 C1020,80 1120,240 1440,160 L1440,320 L0,320 Z",
                                "M0,160 C320,240 420,80 720,160 C1020,240 1120,80 1440,160 L1440,320 L0,320 Z"
                            ]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        fill="#4db8c7"
                        opacity="0.3"
                    />
                </svg>
                <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <motion.path
                        initial={{ d: "M0,192 C280,256 480,128 720,192 C960,256 1160,128 1440,192 L1440,320 L0,320 Z" }}
                        animate={{
                            d: [
                                "M0,192 C280,256 480,128 720,192 C960,256 1160,128 1440,192 L1440,320 L0,320 Z",
                                "M0,192 C280,128 480,256 720,192 C960,128 1160,256 1440,192 L1440,320 L0,320 Z",
                                "M0,192 C280,256 480,128 720,192 C960,256 1160,128 1440,192 L1440,320 L0,320 Z"
                            ]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        fill="#1e3a5a"
                        opacity="0.15"
                    />
                </svg>
                <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <motion.path
                        initial={{ d: "M0,224 C300,288 500,160 720,224 C940,288 1140,160 1440,224 L1440,320 L0,320 Z" }}
                        animate={{
                            d: [
                                "M0,224 C300,288 500,160 720,224 C940,288 1140,160 1440,224 L1440,320 L0,320 Z",
                                "M0,224 C300,160 500,288 720,224 C940,160 1140,288 1440,224 L1440,320 L0,320 Z",
                                "M0,224 C300,288 500,160 720,224 C940,288 1140,160 1440,224 L1440,320 L0,320 Z"
                            ]
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        fill="#4db8c7"
                        opacity="0.2"
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Navigate the Web
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a5a] to-[#4db8c7]">
                                On Your Terms
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Beacon Blocker is your AI-powered browsing companion.
                            Block distracting sites, set timers and schedules, and stay focused with intelligent page-level filtering.
                        </p>

                        {/* Referral banner */}
                        <div className="mb-8 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2.5 cursor-default" title="Share your referral code with friends. When they subscribe, you both earn bonus days added to your subscription.">
                            <Gift className="w-4 h-4 text-amber-500" />
                            <span className="text-sm font-semibold text-amber-800">
                                Earn bonus days by referring friends
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="https://chromewebstore.google.com/detail/beacon-blocker/pcdcefcldhcnbmiejmihlcphbglflakm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    className="bg-[#c92a2a] hover:bg-[#a92525] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-red-200 transition-all hover:shadow-xl hover:-translate-y-0.5 w-full"
                                >
                                    <Chrome className="w-5 h-5 mr-2" />
                                    Get Started for Free
                                </Button>
                            </a>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-slate-200 hover:border-slate-300 px-8 py-6 text-lg rounded-xl"
                                onClick={() => {
                                    const element = document.getElementById('how-it-works');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                See How It Works
                            </Button>
                        </div>

                        <p className="mt-6 text-sm text-slate-500">
                            Available exclusively for Google Chrome. Refer friends to earn bonus days.
                        </p>
                    </motion.div>

                    {/* Right - Logo showcase */}
                    <motion.div
                        className="flex-1 flex justify-center items-end pb-16"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-cyan-400/30 rounded-full blur-3xl scale-110" />

                            {/* Logo - bobbing in the waves */}
                            <motion.img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693b3b5559a4e0ab84c19ebd/8648fa26f_BBLogo_CompleteBordered.png"
                                alt="Beacon Blocker Logo"
                                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: [0.45, 0.05, 0.55, 0.95]
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
