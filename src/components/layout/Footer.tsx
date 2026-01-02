import React from 'react';
import Link from 'next/link';
import TextTheme from '../widget/TextTheme';

interface FooterProps {
    contact?: {
        whatsapp: string;
        email: string;
    }
}

const Footer: React.FC<FooterProps> = ({ contact }) => {
    return (
        <footer id="contact-footer" className="bg-emerald-950 text-emerald-50 py-12 border-t border-emerald-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white tracking-tight">ALFA Saiyo Sakato</h2>
                        <p className="text-emerald-200/80 text-sm leading-relaxed max-w-xs">
                            Ekosistem pariwisata dan layanan terpadu di Kabupaten Agam. Memberikan pengalaman One Stop Service terbaik untuk Anda.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <TextTheme.Subtitle className="text-white!">Unit Usaha</TextTheme.Subtitle>
                        <ul className="space-y-2 text-sm text-emerald-200/80">
                            <li><Link href="/unit/alfa-wash" className="hover:text-white transition-colors">Alfa Wash (Cuci Kendaraan)</Link></li>
                            <li><Link href="/unit/alfa-brew" className="hover:text-white transition-colors">Alfa Brew (Cafe & Resto)</Link></li>
                            <li><Link href="/unit/alfa-khas" className="hover:text-white transition-colors">Alfa Khas (Oleh-oleh)</Link></li>
                            <li><Link href="/unit/alfa-stay" className="hover:text-white transition-colors">Alfa Stay (Penginapan)</Link></li>
                            <li><Link href="/unit/alfa-go" className="hover:text-white transition-colors">Alfa Go (Travel & Tour)</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <TextTheme.Subtitle className="text-white!">Hubungi Kami</TextTheme.Subtitle>
                        <div className="space-y-3 text-sm text-emerald-200/80">
                            {contact && (
                                <>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">{contact.email}</a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        <a href={`https://wa.me/${contact.whatsapp.replace('+', '')}`} className="hover:text-white transition-colors">{contact.whatsapp}</a>
                                    </div>
                                </>
                            )}
                            {!contact && <p>Loading contact info...</p>}
                            <p className="pt-4 text-xs text-emerald-600">
                                &copy; 2026 ALFA Saiyo Sakato. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
