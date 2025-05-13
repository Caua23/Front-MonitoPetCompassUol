import { ProductImage } from "./ProductImg";

export interface CardProductsProps {
    id: number;
    name: string;
    imgsProduct: ProductImage[];
    price: number;
    product: string;
    size?: string;
    addInformation?: string
    date?: string
}
