import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ButtonApp from '../widget/ButtonApp';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-emerald-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        {/* Logo placeholder - using text if image fails or for SEO */}
                        <div className="relative w-8 h-8">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-lg font-bold text-emerald-950 tracking-tight">ALFA Saiyo Sakato</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                            Home
                        </Link>
                        <Link href="/unit/alfa-wash" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                            Wash
                        </Link>
                        <Link href="/unit/alfa-brew" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                            Brew
                        </Link>
                        <Link href="/unit/alfa-khas" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                            Khas
                        </Link>
                        <Link href="/unit/alfa-stay" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                            Stay
                        </Link>
                        <Link href="/unit/alfa-go" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                            Go
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="#contact-footer">
                            <ButtonApp variant="primary" size="sm">
                                Hubungi Kami
                            </ButtonApp>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
