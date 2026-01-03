import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Chrome } from 'lucide-react';

// Smooth scroll to element or top
const scrollToSection = (sectionId) => {
    if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

export default function Layout({ children, currentPageName }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', page: 'Home' },
        { name: 'Privacy Policy', page: 'Privacy' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo - scrolls to top on click */}
                        <button
                            onClick={() => scrollToSection('top')}
                            className="flex items-center gap-3 cursor-pointer"
                        >
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693b3b5559a4e0ab84c19ebd/8648fa26f_BBLogo_CompleteBordered.png"
                                alt="Beacon Blocker"
                                className="w-10 h-10"
                            />
                            <span className="font-bold text-xl text-slate-900">
                                Beacon Blocker
                            </span>
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.page}
                                    to={createPageUrl(link.page)}
                                    className={`text-sm font-medium transition-colors ${currentPageName === link.page
                                        ? 'text-[#1e3a5a]'
                                        : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://dashboard.beaconblocker.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                            >
                                Dashboard
                            </a>
                            <Button className="bg-[#c92a2a] hover:bg-[#a92525] text-white rounded-lg">
                                <Chrome className="w-4 h-4 mr-2" />
                                Start Free Trial
                            </Button>
                        </div>

                        {/* Mobile Menu */}
                        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="w-6 h-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full max-w-sm">
                                <div className="flex flex-col gap-6 mt-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.page}
                                            to={createPageUrl(link.page)}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`text-lg font-medium ${currentPageName === link.page
                                                ? 'text-[#1e3a5a]'
                                                : 'text-slate-600'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <a
                                        href="https://dashboard.beaconblocker.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-lg font-medium text-slate-600"
                                    >
                                        Dashboard
                                    </a>
                                    <Button className="bg-[#c92a2a] hover:bg-[#a92525] text-white rounded-lg mt-4">
                                        <Chrome className="w-4 h-4 mr-2" />
                                        Start Free Trial
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
            <main className="pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_693b3b5559a4e0ab84c19ebd/8648fa26f_BBLogo_CompleteBordered.png"
                                    alt="Beacon Blocker"
                                    className="w-10 h-10"
                                />
                                <span className="font-bold text-xl">Beacon Blocker</span>
                            </div>
                            <p className="text-slate-400 max-w-md leading-relaxed">
                                Your AI-powered guide to a cleaner, more focused browsing experience.
                                Take control of what you see online.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-3 text-slate-400">
                                <li>
                                    <button
                                        onClick={() => scrollToSection('top')}
                                        className="hover:text-white transition-colors"
                                    >
                                        Home
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('features')}
                                        className="hover:text-white transition-colors"
                                    >
                                        Features
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('how-it-works')}
                                        className="hover:text-white transition-colors"
                                    >
                                        Getting Started
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => scrollToSection('faq')}
                                        className="hover:text-white transition-colors"
                                    >
                                        FAQ
                                    </button>
                                </li>
                                <li>
                                    <a
                                        href="https://dashboard.beaconblocker.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="font-semibold mb-4">Legal</h4>
                            <ul className="space-y-3 text-slate-400">
                                <li>
                                    <Link to={createPageUrl('Privacy')} className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 mt-12 pt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            © {new Date().getFullYear()} Beacon Blocker. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
