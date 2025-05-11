import { PetImage } from "./PetImage";

export interface PetInfo {
  id: number;
  name: string;
  imgs: PetImage[];
  price: number;
  gender: string;
  age: string;
  size: string;
  color: string;
  location: string;
  publishedDate: string;
  additionalInfo: string;
}