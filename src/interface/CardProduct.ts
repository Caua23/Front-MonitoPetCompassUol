export interface CardProductsProps {
    id: number;
    name: string;
    image: ProductImage[];
    price: number;
    product: string;
    size?: string;
}
interface ProductImage {
    _id: string;
    originalName: string;
    name: string;
    url: string;
    size: number;
    pet: string;
    createdAt: string;
    __v: number;
}