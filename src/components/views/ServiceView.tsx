"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Brand, Service, Category } from '@/lib/data';
import TextTheme from '../widget/TextTheme';
import ButtonApp from '../widget/ButtonApp';
import CardApp from '../widget/CardApp';

interface ServiceViewProps {
    brand: Brand;
}

const ServiceView: React.FC<ServiceViewProps> = ({ brand }) => {
    // Group services by category
    const groupedServices = brand.services?.reduce((acc, service) => {
        const catId = service.category_id;
        if (!acc[catId]) acc[catId] = [];
        acc[catId].push(service);
        return acc;
    }, {} as Record<number, Service[]>);

    const getCategoryName = (id: number) => {
        return brand.categories?.find(c => c.id === id)?.name || 'Other Services';
    };

    return (
        <div className="min-h-screen pb-20">
            {/* Header / Hero */}
            <div className="relative h-[60vh] flex items-center justify-center">
                <Image
                    src={brand.banner[0]}
                    alt={brand.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white px-4">
                    <TextTheme.Display className="text-white mb-4">{brand.title}</TextTheme.Display>
                    <TextTheme.Subtitle className="text-emerald-200 text-2xl font-light">{brand.tagline}</TextTheme.Subtitle>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 space-y-16">

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {brand.features.map((feature, idx) => (
                        <CardApp key={idx} variant="elevated" className="bg-white/95 backdrop-blur text-center flex flex-col items-center justify-center p-8">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <TextTheme.Subtitle>{feature}</TextTheme.Subtitle>
                        </CardApp>
                    ))}
                </div>

                {/* Pricing Section */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="text-center mb-12">
                        <TextTheme.Label>Pricing</TextTheme.Label>
                        <TextTheme.Title className="text-3xl mt-2">Daftar Layanan & Harga</TextTheme.Title>
                    </div>

                    <div className="space-y-12">
                        {Object.keys(groupedServices || {}).map((catId) => (
                            <div key={catId} className="space-y-6">
                                <h3 className="text-xl font-bold text-emerald-800 border-b border-emerald-100 pb-2">
                                    {getCategoryName(Number(catId))}
                                </h3>
                                <div className="grid gap-4">
                                    {groupedServices![Number(catId)].map((service) => (
                                        <div key={service.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors border border-dashed border-gray-200">
                                            <div className="space-y-1">
                                                <h4 className="font-semibold text-gray-900">{service.name}</h4>
                                                <p className="text-sm text-gray-500">{service.description}</p>
                                            </div>
                                            <div className="mt-2 md:mt-0 font-bold text-emerald-600 text-lg whitespace-nowrap">
                                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: service.currency }).format(service.price)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Location Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <TextTheme.Title>Lokasi Kami</TextTheme.Title>
                        <TextTheme.Body>Kunjungi cabang terdekat kami untuk mendapatkan pelayanan terbaik.</TextTheme.Body>
                        <div className="space-y-4">
                            {brand.locations.map(loc => (
                                <CardApp key={loc.id} className="flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full shrink-0 flex items-center justify-center text-emerald-600 mt-1">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{loc.name}</h4>
                                        <p className="text-sm text-gray-600 mt-1">{loc.street}</p>
                                        <a href={loc.maps_link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-emerald-600 mt-3 hover:underline">
                                            Get Directions &rarr;
                                        </a>
                                    </div>
                                </CardApp>
                            ))}
                        </div>
                    </div>
                    <div className="h-[400px] bg-gray-200 rounded-3xl overflow-hidden relative">
                        {/* Placeholder for map embed - in real app would interact with Google Maps API */}
                        <div className="absolute inset-0 flex items-center justify-center bg-emerald-50 text-emerald-800">
                            <p className="font-medium">Map Visualization Placeholder</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Sticky CTA */}
            <div className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
                <a href={`https://wa.me/${brand.contact.whatsapp.replace('+', '')}`} target="_blank" rel="noreferrer">
                    <ButtonApp className="rounded-full shadow-2xl pl-4 pr-6 py-4 bg-[#25D366] hover:bg-[#128C7E] flex items-center gap-3">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Book via WhatsApp
                    </ButtonApp>
                </a>
            </div>
        </div>
    );
};

export default ServiceView;
