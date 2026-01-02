"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Brand } from '@/lib/data';
import TextTheme from '../widget/TextTheme';
import ButtonApp from '../widget/ButtonApp';
import CardApp from '../widget/CardApp';

interface StoreViewProps {
    brand: Brand;
}

const StoreView: React.FC<StoreViewProps> = ({ brand }) => {
    const [selectedCategory, setSelectedCategory] = useState<number | 'all'>('all');

    const filteredProducts = selectedCategory === 'all'
        ? brand.products
        : brand.products?.filter(p => p.category_id === selectedCategory);

    const getWhatsAppLink = (productName: string) => {
        const phone = brand.contact.whatsapp.replace('+', '');
        const message = `Halo, saya mau pesan ${productName}`;
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    return (
        <div className="min-h-screen pb-20 bg-gray-50">
            {/* Hero */}
            <div className="bg-emerald-900 text-white py-16 px-4 relative overflow-hidden">
                <Image src={brand.banner[0]} alt="Banner" fill className="object-cover opacity-20" />
                <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
                    <TextTheme.Title className="text-white text-4xl">{brand.title}</TextTheme.Title>
                    <p className="text-emerald-100 text-lg">{brand.tagline}</p>
                </div>
            </div>

            {/* Features Banner */}
            <div className="bg-white border-b border-gray-100 mb-8 sticky top-16 z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-nowrap overflow-x-auto gap-8 md:justify-center scrollbar-hide">
                    {brand.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-emerald-800">
                            <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            {feature}
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">

                {/* Sidebar Filter */}
                <aside className="lg:w-64 shrink-0 space-y-6">
                    <CardApp className="sticky top-32" padding="md">
                        <TextTheme.Subtitle className="mb-4 text-emerald-900">Kategori</TextTheme.Subtitle>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === 'all' ? 'bg-emerald-100 text-emerald-800 font-medium' : 'hover:bg-gray-50 text-gray-600'}`}
                            >
                                Semua Produk
                            </button>
                            {brand.categories?.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === cat.id ? 'bg-emerald-100 text-emerald-800 font-medium' : 'hover:bg-gray-50 text-gray-600'}`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </CardApp>
                </aside>

                {/* Product Showcase */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts?.map(product => (
                            <CardApp key={product.id} className="flex flex-col h-full group" padding="none">
                                <div className="aspect-4/3 bg-gray-100 relative overflow-hidden">
                                    {/* Placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                    </div>
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                                    <p className="text-sm text-gray-500 mb-4 flex-1">{product.description}</p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                        <span className="font-mono font-bold text-emerald-700">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: product.currency, maximumFractionDigits: 0 }).format(product.price)}
                                        </span>
                                    </div>
                                    <a
                                        href={getWhatsAppLink(product.name)}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-4 block"
                                    >
                                        <ButtonApp variant="secondary" size="sm" fullWidth className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
                                            Order via WA
                                        </ButtonApp>
                                    </a>
                                </div>
                            </CardApp>
                        ))}
                    </div>

                    {filteredProducts && filteredProducts.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            Tidak ada produk di kategori ini.
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default StoreView;
