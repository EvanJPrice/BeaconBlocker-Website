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
        question: "How does it work?",
        answer: "When you visit a page, the extension encrypts the page's URL, title, and description before sending it to our server. The AI evaluates this against your instructions and returns a block or allow decision in real-time. Decisions are cached locally on your device so repeat visits are instant."
    },
    {
        question: "Is my browsing data collected or stored?",
        answer: "Page data is encrypted before it leaves your browser using AES-256 encryption, then decrypted on our server only for AI analysis. This data is processed in real-time and immediately discarded — it is never stored. Your activity log and cache stay on your device, and your settings are encrypted in our database. We never sell your data."
    },
    {
        question: "Which websites does Beacon Blocker work on?",
        answer: "Beacon Blocker works on virtually any website you visit. It evaluates pages at the URL level — so it can distinguish between different parts of a site (e.g. educational vs entertainment YouTube). You can also use quick-block categories and allow/block lists for simpler rules."
    },
    {
        question: "Can I create multiple profiles?",
        answer: "Yes! We call them presets. You can save multiple presets for different browsing contexts — like 'Work Mode' that blocks social media, or 'Study Mode' that only allows .edu sites. Switch between them with one click."
    },
    {
        question: "Is Beacon Blocker free to use?",
        answer: "Beacon Blocker is free through February — no credit card required. After February, new users get a 7-day free trial. A subscription is required after the trial to continue using the service. You can subscribe directly from your dashboard. We also have a referral program: share your code with friends and you'll both earn bonus days when they subscribe."
    },
    {
        question: "Does it slow down my browsing?",
        answer: "Beacon Blocker is optimized for performance with minimal impact on page load times. Known sites are categorized instantly, and AI decisions are cached so repeat visits skip the AI entirely. Most pages load without any noticeable delay."
    },
    {
        question: "Can I temporarily disable blocking?",
        answer: "Yes. You can pause blocking from the extension popup, clear your instructions in the dashboard, or sign out from the extension. Your presets are always saved so you can restore your settings when you're ready to resume."
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
