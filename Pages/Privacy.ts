import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Server, Trash2, Mail } from 'lucide-react';

const sections = [
    {
        icon: Eye,
        title: "Information We Collect",
        content: `Beacon Blocker is designed with privacy as a core principle. We collect minimal information necessary to provide our service:

        **Data Stored in Our Database (Encrypted):**
        - Login credentials (email and password)
        - Your AI prompts and prompt names (fully encrypted)
        - Account information necessary for authentication

        **Local Data (Never Leaves Your Device):**
        - Your complete browsing history
        - Content filtering rules you create
        - Extension settings and configurations
        - Pages you visit and their content

        **Anonymous Analytics (Optional):**
        - Aggregated, non-identifiable usage statistics
        - Error reports to improve the extension (no personal data included)
        - Feature usage patterns to guide development

        We do NOT collect:
        - Your browsing history (stored locally only)
        - The content of pages you visit
        - Any data that could be used to track your browsing behavior`
    },
    {
        icon: Server,
        title: "How We Process Data",
        content: `**Local Processing:**
        All content filtering and AI decision-making happens directly in your browser. Your complete browsing history never leaves your device.

        **AI Prompts:**
        When you provide instructions to your AI beacon, these prompts and their names are encrypted and securely stored in our database. This allows you to access your custom prompts across devices while maintaining security through encryption.

        **Database Storage:**
        We store only essential information in our secure database:
        - Login credentials for authentication
        - Encrypted AI prompts and prompt names
        All stored data is encrypted to protect your privacy.

        **Browsing History:**
        Your browsing history is never uploaded to our servers. It remains completely local on your device, ensuring your browsing activity stays private.`
    },
    {
        icon: Lock,
        title: "Data Security",
        content: `We implement industry-standard security measures to protect your data:

        - **Encryption:** All prompts and prompt names stored in our database are fully encrypted. Local data is protected using your browser's secure storage APIs
        - **Secure Authentication:** Login credentials are securely stored using industry-standard hashing and encryption
        - **Database Security:** Our database infrastructure uses enterprise-grade security measures to prevent unauthorized access
        - **Secure Updates:** Extension updates are delivered through the Chrome Web Store's secure infrastructure
        - **Regular Audits:** Our codebase undergoes regular security reviews

        **Third-Party Services:**
        Beacon Blocker does not integrate with any third-party analytics, advertising, or tracking services that could compromise your privacy.`
    },
    {
        icon: Shield,
        title: "Your Rights",
        content: `You have complete control over your data:

**Access:** All your data is stored locally and accessible through the extension settings
**Deletion:** You can delete all your data at any time by clearing the extension's storage or uninstalling it
**Portability:** Export your settings and preferences to transfer to another device
**Opt-Out:** Disable optional anonymous analytics at any time in settings

For users in the European Union, you have additional rights under GDPR including the right to erasure, rectification, and data portability.`
    },
    {
        icon: Trash2,
        title: "Data Retention",
        content: `**Local Data:**
        Your browsing history, preferences, and settings are retained locally on your device until you manually delete them or uninstall the extension.

        **Database Data:**
        - Login credentials are retained as long as your account is active
        - Encrypted AI prompts are retained until you delete them or close your account
        - You can delete your account and all associated data at any time

        **Anonymous Analytics:**
        Aggregated, anonymous usage data is retained for a maximum of 90 days to analyze trends and improve the product.`
    },
    {
        icon: Mail,
        title: "Contact Us",
        content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

**Email:** privacy@beaconblocker.com

**Response Time:** We aim to respond to all privacy-related inquiries within 48 hours.

**Updates to This Policy:**
We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last Updated" date and, for significant changes, by providing a more prominent notice.`
    }
];

export default function Privacy() {
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
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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
                                Beacon Blocker is built on the principle that your browsing activity is your business, 
                                not ours. We've designed our extension to process everything locally on your device, 
                                meaning your data never leaves your browser. This policy explains our approach in detail.
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
                                                if (line.startsWith('**') && line.endsWith('**')) {
                                                    return (
                                                        <h3 key={lIndex} className="font-semibold text-slate-900 mt-4 mb-2">
                                                            {line.replace(/\*\*/g, '')}
                                                        </h3>
                                                    );
                                                } else if (line.startsWith('**')) {
                                                    const parts = line.split('**');
                                                    return (
                                                        <p key={lIndex} className="text-slate-600 leading-relaxed">
                                                            <strong className="text-slate-800">{parts[1]}</strong>
                                                            {parts[2]}
                                                        </p>
                                                    );
                                                } else if (line.startsWith('- ')) {
                                                    return (
                                                        <li key={lIndex} className="text-slate-600 ml-4">
                                                            {line.substring(2)}
                                                        </li>
                                                    );
                                                } else if (line.trim()) {
                                                    return (
                                                        <p key={lIndex} className="text-slate-600 leading-relaxed">
                                                            {line}
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