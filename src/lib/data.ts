import fs from 'fs';
import path from 'path';

// Define types based on the JSON structure
export interface Location {
    id: string;
    name: string;
    is_main: boolean;
    street: string;
    latitude: string;
    longitude: string;
    maps_link: string;
    phone_specific: string;
}

export interface Service {
    id: string;
    name: string;
    category_id: number;
    price: number;
    currency: string;
    description: string;
}

export interface Product {
    id: string;
    name: string;
    category_id: number;
    price: number;
    currency: string;
    description: string;
}

export interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface Brand {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    description: string;
    banner: string[];
    locations: Location[];
    opening_hours: string;
    contact: {
        email: string;
        whatsapp: string;
    };
    features: string[];
    categories?: Category[];
    services?: Service[];
    products?: Product[];
}

export interface SiteMeta {
    title: string;
    description: string;
    favicon: string;
    contact_global: {
        whatsapp: string;
        email: string;
    };
}

export interface WebContent {
    site_meta: SiteMeta;
    brands: Brand[];
}

export const getWebContent = async (): Promise<WebContent> => {
    // In a real app we might cache this
    const filePath = path.join(process.cwd(), 'web-content.json');
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
};

export const getBrandBySlug = async (slug: string): Promise<Brand | undefined> => {
    const data = await getWebContent();
    return data.brands.find(b => b.slug === slug);
};
