import React from 'react';
import { notFound } from 'next/navigation';
import { getWebContent } from '@/lib/data';
import ServiceView from '@/components/views/ServiceView';
import CafeView from '@/components/views/CafeView';
import StoreView from '@/components/views/StoreView';
import StayView from '@/components/views/StayView';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const data = await getWebContent();
    return data.brands.map((brand) => ({
        slug: brand.slug,
    }));
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const data = await getWebContent();
    const brand = data.brands.find(b => b.slug === slug);

    if (!brand) {
        notFound();
    }

    // Render the appropriate view based on the slug or implied logic (slug keywords)
    if (slug === 'alfa-wash' || slug === 'alfa-go') {
        return <ServiceView brand={brand} />;
    }

    if (slug === 'alfa-brew') {
        return <CafeView brand={brand} />;
    }

    if (slug === 'alfa-khas') {
        return <StoreView brand={brand} />;
    }

    if (slug === 'alfa-stay') {
        return <StayView brand={brand} />;
    }

    return <ServiceView brand={brand} />; // Fallback
}
