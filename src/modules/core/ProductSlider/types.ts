export interface Product {
    id: number;
    name: string;
    sku: string | null;
    seller: string | null;
    category: string | null;
    description: string | null;
    price: number;
    stock_quantity: number;
    stock_status: string | null;
    status: string | null;
    region: string | null;
    district: string | null;
    latitude: string | null;
    longitude: string | null;
    available: boolean;
    published: boolean;
    created_at: string;
    updated_at: string;
    image: string | null;
    image_cdn: string ;
    slug: string;
}