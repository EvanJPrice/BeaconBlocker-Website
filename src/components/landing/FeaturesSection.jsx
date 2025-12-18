import React from 'react';
import { motion } from 'framer-motion';
import {
    Brain,
    Shield,
    Sliders,
    Eye,
    Zap,
    MessageSquare
} from 'lucide-react';

const features = [
    {
        icon: Brain,
        title: "AI-Powered Filtering",
        description: "Natural language instructions let you describe exactly what content you want to see or avoid.",
        color: "from-amber-500 to-orange-500"
    },
    {
        icon: Shield,
        title: "Distraction Blocker",
        description: "Stay focused by blocking time-wasting content, clickbait, and endless scroll patterns.",
        color: "from-cyan-500 to-blue-500"
    },
    {
        icon: Sliders,
        title: "Custom Rules",
        description: "Create personalized browsing rules that work across all your favorite websites.",
        color: "from-rose-500 to-pink-500"
    },
    {
        icon: MessageSquare,
        title: "Conversational Control",
        description: "Simply tell your beacon what you need - no complicated settings or configurations required.",
        color: "from-blue-500 to-indigo-500"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function FeaturesSection() {
    return (
        <section className="py-24 bg-white" id="features">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#c92a2a] font-semibold text-sm tracking-wider uppercase">
                        Features
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
                        Your Personal Browsing Guardian
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Beacon Blocker combines cutting-edge AI with intuitive controls
                        to give you the browsing experience you deserve.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
