import { PetImage } from "./PetImage";

export interface CardPetsProps {
    id: number;
    name: string;
    imgs: PetImage[];
    price: number;
    age: string;
    gender: string;
}
