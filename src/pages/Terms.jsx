import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, ShieldCheck, AlertTriangle, CreditCard, UserX, RefreshCw } from 'lucide-react';

const sections = [
    {
        icon: FileText,
        title: "Service Description",
        content: `Beacon Blocker is an AI-powered Chrome browser extension that helps users manage their browsing experience by filtering web content based on user-defined rules.

**How It Works:** You define blocking rules in natural language (e.g., "block social media during work hours"). When you visit a webpage, our AI analyzes the page content against your rules and decides whether to allow or block it.

**What We Provide:** A Chrome browser extension, a web-based dashboard for managing settings, AI-powered content analysis, and related features including presets, scheduling, accountability tools, and usage analytics.

**What We Don't Guarantee:** Beacon Blocker uses AI to make blocking decisions, which means results are not perfect. Some pages may be incorrectly blocked or allowed. The service is provided as a productivity and focus tool, not as a parental control or security solution.`
    },
    {
        icon: Scale,
        title: "Acceptable Use",
        content: `By using Beacon Blocker, you agree to:

**Permitted Use:** Use the service for personal productivity, focus management, and browsing control in accordance with these terms.

**Prohibited Use:** You may not:
- Reverse-engineer, decompile, or attempt to extract the source code of the extension or backend services
- Use the service to circumvent legal restrictions or access illegal content
- Attempt to overload, disrupt, or interfere with our servers or infrastructure
- Share your account credentials with others or allow unauthorized access to your account
- Use automated tools to interact with the service beyond normal browser extension operation
- Resell, redistribute, or sublicense access to the service

**Account Responsibility:** You are responsible for all activity that occurs under your account. Keep your login credentials secure and notify us immediately if you suspect unauthorized access.`
    },
    {
        icon: CreditCard,
        title: "Subscriptions & Billing",
        content: `**Free Trial:** New users receive a 7-day free trial before a subscription is required.

**Subscription Plans:** Paid plans are available on a monthly or yearly basis. Pricing details are displayed in the dashboard before purchase.

**Payment Processing:** All payments are processed securely by Stripe. We do not store your credit card or banking details. By subscribing, you also agree to Stripe's terms of service.

**Cancellation:** You may cancel your subscription at any time from the dashboard. Upon cancellation, you will retain access to paid features until the end of your current billing period.

**Refunds:** Refunds are handled on a case-by-case basis. Contact us at support@beaconblocker.com within 7 days of a charge if you believe it was made in error.

**Price Changes:** We may adjust subscription pricing with at least 30 days' notice. Existing subscribers will be notified before any price change takes effect.`
    },
    {
        icon: AlertTriangle,
        title: "Disclaimers & Limitations",
        content: `**"As Is" Service:** Beacon Blocker is provided "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.

**AI Limitations:** Our AI-powered content analysis is not infallible. We do not guarantee that all content matching your rules will be blocked, or that all allowed content is appropriate. The service should not be relied upon as the sole means of content filtering for vulnerable users.

**Not a Security Tool:** Beacon Blocker is a productivity and focus tool. It is not designed to serve as a parental control system, a content moderation solution, or a cybersecurity tool. Users with those needs should use purpose-built solutions.

**Service Availability:** We strive for high availability but do not guarantee uninterrupted service. The extension requires an internet connection for AI-powered decisions. Cached decisions will continue to work offline.

**Limitation of Liability:** To the maximum extent permitted by law, Beacon Blocker and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill arising from your use of the service.`
    },
    {
        icon: UserX,
        title: "Account Termination",
        content: `**By You:** You may delete your account at any time from the Settings page in the dashboard. This permanently removes all server-side data associated with your account as described in our Privacy Policy.

**By Us:** We reserve the right to suspend or terminate accounts that violate these terms, including but not limited to: abuse of the service, attempts to circumvent security measures, or conduct that negatively impacts other users or our infrastructure.

**Effect of Termination:** Upon account deletion or termination, your server-side data will be permanently removed. Locally stored data (block history, cached decisions) will remain on your device until you uninstall the extension or clear it manually.`
    },
    {
        icon: ShieldCheck,
        title: "Intellectual Property",
        content: `**Our Property:** Beacon Blocker, including its extension code, dashboard, website, AI models and prompts, branding, and documentation, is the intellectual property of Beacon Blocker and its creators. All rights reserved.

**Your Content:** You retain ownership of the rules, prompts, and preferences you create. By using the service, you grant us a limited license to process this content solely for the purpose of providing the service.

**Feedback:** If you provide feedback, suggestions, or ideas about the service, we may use them without obligation to compensate you.`
    },
    {
        icon: RefreshCw,
        title: "Changes & Contact",
        content: `**Changes to These Terms:** We may update these Terms of Service from time to time. We will notify users of material changes by updating the "Last Updated" date below and, where appropriate, through email or dashboard notifications. Continued use of the service after changes constitutes acceptance of the updated terms.

**Governing Law:** These terms are governed by the laws of Canada and the Province of British Columbia. Any disputes shall be resolved in accordance with applicable Canadian law.

**Severability:** If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.

**Contact Us:**
**Email:** support@beaconblocker.com
**Response Time:** We aim to respond to all inquiries within 48 hours.`
    }
];

export default function Terms() {
    useEffect(() => {
        // Set canonical URL for terms page
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://beaconblocker.com/terms');
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <section className="py-20 bg-[#1e3a5a] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <FileText className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-slate-300">
                            Please review the terms governing your use of Beacon Blocker.
                        </p>
                        <p className="text-slate-400 mt-6">
                            Last Updated: February 17, 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
                            <h2 className="text-lg font-semibold text-blue-900 mb-2">
                                Agreement to Terms
                            </h2>
                            <p className="text-blue-800 leading-relaxed">
                                By installing, accessing, or using the Beacon Blocker extension or dashboard,
                                you agree to be bound by these Terms of Service. If you do not agree to these terms,
                                please do not use the service. These terms should be read alongside our{' '}
                                <a href="/privacy" className="underline font-medium hover:text-blue-900">Privacy Policy</a>,
                                which describes how we handle your data.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Terms Sections */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto space-y-12">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#1e3a5a]/10 flex items-center justify-center flex-shrink-0">
                                        <section.icon className="w-6 h-6 text-[#1e3a5a]" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 pt-2">
                                        {section.title}
                                    </h2>
                                </div>
                                <div className="prose prose-slate max-w-none">
                                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                                        <div key={pIndex} className="mb-4">
                                            {paragraph.split('\n').map((line, lIndex) => {
                                                // Helper to parse inline **bold** text
                                                const parseInlineBold = (text) => {
                                                    const parts = text.split(/\*\*([^*]+)\*\*/g);
                                                    return parts.map((part, i) =>
                                                        i % 2 === 1
                                                            ? <strong key={i} className="text-slate-800">{part}</strong>
                                                            : part
                                                    );
                                                };

                                                if (line.startsWith('- ')) {
                                                    return (
                                                        <li key={lIndex} className="text-slate-600 ml-4">
                                                            {parseInlineBold(line.substring(2))}
                                                        </li>
                                                    );
                                                } else if (line.trim()) {
                                                    return (
                                                        <p key={lIndex} className="text-slate-600 leading-relaxed">
                                                            {parseInlineBold(line)}
                                                        </p>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Notice */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            Questions?
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            If you have any questions about these Terms of Service, please contact us
                            at <a href="mailto:support@beaconblocker.com" className="text-[#1e3a5a] underline hover:text-[#2a4f73]">support@beaconblocker.com</a>.
                            You can also review our <a href="/privacy" className="text-[#1e3a5a] underline hover:text-[#2a4f73]">Privacy Policy</a> for
                            details on how your data is handled.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
