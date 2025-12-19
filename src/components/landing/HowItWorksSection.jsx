import React from 'react';
import { motion } from 'framer-motion';
import { Download, Settings, Compass } from 'lucide-react';

const steps = [
    {
        icon: Download,
        step: "01",
        title: "Install the Extension",
        description: "Add Beacon Blocker to Chrome with one click. Create a free account to sync your settings.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
    },
    {
        icon: Settings,
        step: "02",
        title: "Set Your Preferences",
        description: "Tell your AI beacon what you want to avoid or focus on using simple, natural language.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
        icon: Compass,
        step: "03",
        title: "Browse with Guidance",
        description: "Your beacon works silently in the background, filtering content and keeping you on track.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop"
    }
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#d4a84b] font-semibold text-sm tracking-wider uppercase">
                        Getting Started
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
                        Up and Running in Minutes
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Three simple steps to transform your browsing experience for the better.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                        >
                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-[#1e3a5a] flex items-center justify-center">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-6xl font-bold text-slate-400">
                                        {step.step}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Image placeholder */}
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-64 md:h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
