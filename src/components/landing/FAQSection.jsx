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
        question: "What is Beacon Blocker?",
        answer: "Beacon Blocker is a Chrome extension that uses AI to block distracting websites based on your personal goals. Instead of manually adding sites to a blocklist, you describe what you want to avoid in plain English, and the AI automatically decides what to block as you browse."
    },
    {
        question: "How does the AI work?",
        answer: "Beacon Blocker uses Google's Gemini Flash model to analyze page content against your instructions. When you visit a page, we send a brief summary to our server, and the AI returns a block or allow decision in real-time."
    },
    {
        question: "Is my browsing data collected or stored?",
        answer: "When you visit a page, we send the URL, title, and a brief content snippet to our secure server for AI analysis. This data is processed in real-time and NOT stored. Your block history stays on your device, and your settings are encrypted in our database. We never sell your data."
    },
    {
        question: "Which websites does Beacon Blocker work on?",
        answer: "Beacon Blocker works on virtually any website you visit. Whether you're browsing social media, news sites, video platforms, or general web pages, your AI beacon is always ready to help filter content based on your preferences."
    },
    {
        question: "Can I create different profiles for different situations?",
        answer: "Yes! We call them presets. You can save multiple rule presets for different browsing contexts. For example, you might have a 'Work Mode' preset that blocks social media, and a 'Relaxation Mode' preset that filters out stressful news."
    },
    {
        question: "Is Beacon Blocker free to use?",
        answer: "Beacon Blocker offers a free trial so you can experience the full power of AI-powered content blocking. After the trial, an affordable subscription is required to continue using the service."
    },
    {
        question: "Does it slow down my browsing?",
        answer: "Beacon Blocker is optimized for performance with minimal impact on page load times. There may be a brief delay when blocking a page as the AI processes the content, but general browsing remains fast and responsive."
    },
    {
        question: "Can I temporarily disable blocking?",
        answer: "Yes. You can either sign out from the extension to stop all blocking, or clear your instructions in the dashboard. Your presets are always saved so you can restore your settings when you're ready to resume."
    },
    {
        question: "Does Beacon Blocker work on mobile?",
        answer: "Currently, Beacon Blocker is only available as a Chrome browser extension for desktop. Mobile support is being explored for future development."
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
