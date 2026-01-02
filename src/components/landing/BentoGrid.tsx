import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Brand } from '@/lib/data';
import TextTheme from '../widget/TextTheme';
import CardApp from '../widget/CardApp';

interface BentoGridProps {
    brands: Brand[];
}

const BentoGrid: React.FC<BentoGridProps> = ({ brands }) => {
    return (
        <section id="explore" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center space-y-4">
                    <TextTheme.Label>Business Units</TextTheme.Label>
                    <TextTheme.Title className="text-4xl text-emerald-950">
                        Our Ecosystem
                    </TextTheme.Title>
                    <TextTheme.Body className="max-w-2xl mx-auto">
                        Discover our integrated services designed to provide you with the best experience in Agam.
                    </TextTheme.Body>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
                    {brands.map((brand, index) => {
                        // Creating a bento-like irregular grid effect if we had more items, 
                        // for now with 5 items, we can make the first one span 2 columns or similar.
                        // Let's make the "Stay" or "Go" span 2 cols if appropriate, but standard grid is safe.

                        // Custom styling for specific index to create bento effect
                        const isLarge = index === 0 || index === 3;
                        const gridClass = isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1";

                        return (
                            <Link href={`/unit/${brand.slug}`} key={brand.id} className={`group ${gridClass}`}>
                                <CardApp variant="interactive" padding="none" className="h-full w-full relative group overflow-hidden">
                                    {/* Background Image */}
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={brand.banner[0]} // Use first banner image
                                            alt={brand.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end h-full">
                                        <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0 text-white">
                                            <TextTheme.Label className="text-emerald-300! mb-2 block">{brand.slug.replace('-', ' ')}</TextTheme.Label>
                                            <h3 className="text-3xl font-bold mb-2">{brand.title}</h3>
                                            <p className="text-emerald-50 text-lg font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {brand.tagline}
                                            </p>
                                            <div className="flex items-center text-sm font-medium text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                                                Launch App <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </CardApp>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
