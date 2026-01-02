"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Brand } from '@/lib/data';
import TextTheme from '../widget/TextTheme';
import CardApp from '../widget/CardApp';

interface CafeViewProps {
    brand: Brand;
}

const CafeView: React.FC<CafeViewProps> = ({ brand }) => {
    const [activeTab, setActiveTab] = useState(brand.categories?.[0].id || 1);

    const activeProducts = brand.products?.filter(p => p.category_id === activeTab) || [];

    return (
        <div className="min-h-screen pb-20 bg-[#FDFBF7]"> {/* Warm paper-like bg for cafe */}

            {/* Hero Carousel (Simplified as static for now, can be slider) */}
            <div className="relative h-[50vh] w-full overflow-hidden">
                <Image
                    src={brand.banner[0]}
                    alt="Cafe Ambience"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <TextTheme.Display className="text-white font-serif italic">{brand.title}</TextTheme.Display>
                        <p className="mt-4 text-xl font-light">{brand.tagline}</p>
                    </div>
                </div>
            </div>

            {/* Info Bar */}
            <div className="bg-emerald-900 text-emerald-50 py-4">
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium uppercase tracking-wider">
                    <span>{brand.opening_hours}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{brand.features.join(' • ')}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Menu Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {brand.categories?.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === cat.id
                                ? 'bg-brown-600 text-white bg-[#5D4037] shadow-lg scale-105'
                                : 'bg-white text-gray-500 hover:bg-gray-100'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {activeProducts.map(product => (
                        <CardApp key={product.id} className="group hover:-translate-y-1 transition-transform duration-300" padding="none">
                            <div className="aspect-square relative bg-gray-100 overflow-hidden">
                                {/* Placeholder for product img, using logo or banner fallback */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-100">
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                {/* Would be product image here */}
                                <div className="absolute top-2 right-2">
                                    <span className="bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold text-gray-900 shadow-sm">
                                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: product.currency, maximumFractionDigits: 0 }).format(product.price)}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-gray-900 mb-1 leading-snug">{product.name}</h3>
                                <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
                            </div>
                        </CardApp>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CafeView;
