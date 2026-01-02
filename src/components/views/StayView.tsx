"use client";
import React from 'react';
import Image from 'next/image';
import { Brand } from '@/lib/data';
import TextTheme from '../widget/TextTheme';
import ButtonApp from '../widget/ButtonApp';
import CardApp from '../widget/CardApp';

interface StayViewProps {
    brand: Brand;
}

const StayView: React.FC<StayViewProps> = ({ brand }) => {
    // Separate services into Rooms and Packages
    // Assuming Category 1 is Rooms, 2 is Packages based on JSON structure
    const rooms = brand.services?.filter(s => s.category_id === 1) || [];
    const packages = brand.services?.filter(s => s.category_id === 2) || [];

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Video/Image */}
            <div className="relative h-[70vh]">
                <Image src={brand.banner[0]} alt="Stay View" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <TextTheme.Label className="text-emerald-300 mb-2">The Ultimate Getaway</TextTheme.Label>
                    <TextTheme.Display className="text-white mb-6 animate-fadeInUp">{brand.title}</TextTheme.Display>
                    <ButtonApp
                        onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
                        size="lg"
                        className="bg-white text-emerald-900 border-none hover:bg-emerald-50 animate-fadeInUp delay-100"
                    >
                        Book Your Stay
                    </ButtonApp>
                </div>
            </div>

            <div id="rooms" className="max-w-6xl mx-auto px-4 py-20 space-y-20">

                {/* Rooms Section */}
                <div className="space-y-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <TextTheme.Title className="mb-4">Our Rooms</TextTheme.Title>
                        <TextTheme.Body>Istirahat yang nyaman dengan pemandangan Danau Maninjau yang menakjubkan.</TextTheme.Body>
                    </div>

                    <div className="grid gap-8">
                        {rooms.map(room => (
                            <CardApp key={room.id} padding="none" className="flex flex-col md:flex-row overflow-hidden group">
                                <div className="md:w-1/3 relative min-h-[250px] bg-gray-200">
                                    <Image
                                        src={brand.banner[1]} // Using varied banner for placeholder
                                        alt={room.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex-1 p-8 flex flex-col justify-center">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-emerald-950">{room.name}</h3>
                                        <span className="font-mono text-xl text-emerald-700 font-bold">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: room.currency, maximumFractionDigits: 0 }).format(room.price)}
                                            <span className="text-sm font-normal text-gray-500">/night</span>
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-6">{room.description}</p>

                                    <div className="flex flex-wrap gap-4 mt-auto items-center justify-between">
                                        <div className="flex gap-2 text-sm text-gray-500">
                                            {/* Amenities icons placeholder */}
                                            {brand.features.slice(0, 3).map((feat, i) => (
                                                <span key={i} className="bg-gray-100 px-2 py-1 rounded">{feat}</span>
                                            ))}
                                        </div>
                                        <a
                                            href={`https://wa.me/${brand.contact.whatsapp.replace('+', '')}?text=Halo, saya mau pesan ${room.name}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <ButtonApp>Check Availability</ButtonApp>
                                        </a>
                                    </div>
                                </div>
                            </CardApp>
                        ))}
                    </div>
                </div>

                {/* Packages Section */}
                {packages.length > 0 && (
                    <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="relative z-10">
                            <TextTheme.Title className="text-emerald-900 mb-8 text-center">Special Packages</TextTheme.Title>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {packages.map(pkg => (
                                    <div key={pkg.id} className="bg-white p-6 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                                        <h4 className="font-bold text-lg text-emerald-900 mb-2">{pkg.name}</h4>
                                        <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{pkg.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-lg text-emerald-700">
                                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: pkg.currency, maximumFractionDigits: 0 }).format(pkg.price)}
                                            </span>
                                            <a
                                                href={`https://wa.me/${brand.contact.whatsapp.replace('+', '')}?text=Info paket ${pkg.name}`}
                                            >
                                                <ButtonApp variant="outline" size="sm">Details</ButtonApp>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default StayView;
