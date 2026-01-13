import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Server, Trash2, Mail } from 'lucide-react';

const sections = [
    {
        icon: Eye,
        title: "Information We Collect",
        content: `Beacon Blocker collects minimal information necessary to provide our service:

**Data Stored in Our Database:** Login credentials (email, securely hashed password), your AI prompts and preset names (encrypted at rest), blocking preferences (categories, allow/block lists), and bug reports you submit (optional).

**Data Sent to Our Servers for AI Analysis:** URLs you visit (to determine if they should be blocked), page titles and metadata, and brief page content snippets (first 500 characters). This data is processed in real-time and NOT stored on our servers.

**Stored Locally Only (Never Sent to Servers):** Your block history, extension settings and theme preferences, and authentication tokens.

**We do NOT collect:** Your complete browsing history, form data or passwords you enter on websites, or any data for advertising or tracking purposes.`
    },
    {
        icon: Server,
        title: "How We Process Data",
        content: `**AI Analysis:** When you visit a webpage, we send the URL, page title, and a brief content snippet to our secure server where an AI model determines if the page matches your blocking criteria. This decision is returned immediately and the page data is NOT stored.

**Your Prompts & Settings:** Your custom AI prompts and blocking preferences are encrypted and stored in our database, allowing you to sync settings across devices.

**Block History:** Your history of blocked pages is stored locally on your device only. This data never leaves your browser and you can clear it at any time.

**Caching:** AI decisions are cached locally until you change your rules or settings, reducing server requests significantly.`
    },
    {
        icon: Lock,
        title: "Data Security",
        content: `We implement industry-standard security measures:

**Encryption in Transit:** All data sent to our servers uses HTTPS encryption.

**Encryption at Rest:** Your prompts and settings are encrypted in our database.

**Secure Authentication:** We use Supabase for authentication with industry-standard practices.

**Minimal Data Retention:** Page data sent for AI analysis is processed immediately and not stored.

**Secure Infrastructure:** Our backend runs on secure cloud infrastructure (Render, Supabase).

**Third-Party Services:** Google Gemini AI (for content analysis - no user data stored by Google), Supabase (database and authentication). No advertising or tracking services.`
    },
    {
        icon: Shield,
        title: "Your Rights",
        content: `You have complete control over your data:

**Access:** View your stored prompts and settings in the dashboard
**Deletion:** Delete your account and all associated data at any time from Settings
**Local Data:** Clear your local block history anytime from the extension
**Export:** Your settings can be copied as presets

**Note:** This service is not currently GDPR compliant.`
    },
    {
        icon: Trash2,
        title: "Data Retention",
        content: `**Server Data:** Account data retained while your account is active. Prompts and settings retained until you delete them or your account. Page data for AI analysis is NOT retained (processed in real-time only).

**Local Data:** Block history retained until you clear it or uninstall the extension. Cached decisions persist until you change your rules.

**Account Deletion:** When you delete your account, all server-side data is permanently removed.`
    },
    {
        icon: Mail,
        title: "Contact Us",
        content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

**Email:** beaconblocker.dev@gmail.com

**Response Time:** We aim to respond to all privacy-related inquiries within 48 hours.

**Updates to This Policy:**
We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last Updated" date.`
    }
];

export default function Privacy() {
    useEffect(() => {
        // Set canonical URL for privacy page
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://beaconblocker.com/privacy');
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
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-slate-300">
                            Your privacy is our priority. Learn how Beacon Blocker protects your data.
                        </p>
                        <p className="text-slate-400 mt-6">
                            Last Updated: December 19, 2024
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
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
                            <h2 className="text-lg font-semibold text-amber-900 mb-2">
                                Our Commitment to Privacy
                            </h2>
                            <p className="text-amber-800 leading-relaxed">
                                Beacon Blocker is designed with privacy in mind. While we send page URLs and
                                brief content to our AI for blocking decisions, we never store this data.
                                Your block history stays on your device, and your settings are encrypted in our database.
                                This policy explains our approach in detail.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Policy Sections */}
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

            {/* Chrome Web Store Compliance Notice */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-3xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            Chrome Web Store Compliance
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            This extension complies with the Chrome Web Store Developer Program Policies,
                            including the User Data Privacy policy. We certify that user data is handled
                            in accordance with Google's guidelines and is not sold to third parties,
                            used for purposes unrelated to the extension's core functionality, or
                            transferred for creditworthiness or lending purposes.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
