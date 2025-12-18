import React from 'react';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How does Beacon Blocker's AI work?",
        answer: "Beacon Blocker uses advanced natural language processing to understand your browsing preferences. Simply describe what you want to avoid or focus on in plain English, and our AI interprets your instructions to filter content accordingly. The AI analyzes page content, images, and context to make intelligent decisions about what to show or hide."
    },
    {
        question: "Is my browsing data collected or stored?",
        answer: "No. Beacon Blocker processes everything locally in your browser. Your browsing history, preferences, and filtered content never leave your device. We're committed to privacy-first design - we don't collect, store, or sell any of your personal data."
    },
    {
        question: "Which websites does Beacon Blocker work on?",
        answer: "Beacon Blocker works on virtually any website you visit. Whether you're browsing social media, news sites, video platforms, or general web pages, your AI beacon is always ready to help filter content based on your preferences."
    },
    {
        question: "Can I create different profiles for different situations?",
        answer: "Yes! You can create multiple instruction sets for different browsing contexts. For example, you might have a 'Work Mode' that blocks social media and entertainment, and a 'Relaxation Mode' that filters out stressful news content."
    },
    {
        question: "Is Beacon Blocker free to use?",
        answer: "Beacon Blocker offers a generous free tier that includes core AI filtering features. Premium features like advanced customization, unlimited instruction sets, and priority processing are available through our affordable subscription plans."
    },
    {
        question: "How do I give instructions to my beacon?",
        answer: "Just type naturally! Examples include: 'Hide all political content', 'Block clickbait headlines', 'Only show cooking videos', or 'Blur images of spiders'. The AI understands context and nuance, so you don't need to use any special syntax or commands."
    },
    {
        question: "Does it slow down my browsing?",
        answer: "Not noticeably. Beacon Blocker is optimized for performance with minimal impact on page load times. The AI processing happens efficiently in the background, and most filtering decisions are made in milliseconds."
    },
    {
        question: "Can I temporarily disable the extension?",
        answer: "Absolutely. You can pause Beacon Blocker with one click from the extension icon, or disable it for specific websites. Your preferences are saved so you can resume exactly where you left off."
    }
];

export default function FAQSection() {
    return (
        <section className="py-24 bg-white" id="faq">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#4db8c7] font-semibold text-sm tracking-wider uppercase">
                        FAQ
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Everything you need to know about Beacon Blocker.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-slate-50 rounded-xl px-6 border-none"
                            >
                                <AccordionTrigger className="text-left text-lg font-medium text-slate-900 hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
