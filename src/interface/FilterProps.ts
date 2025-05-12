
export interface FilterProps {
  category: string;
  male: boolean;
  female: boolean;
  color: string[];
  size: string[];
  onMaleChange: (value: boolean) => void;
  onFemaleChange: (value: boolean) => void;
  onColorChange: (colorValue: string) => void;
  onSizeChange: (sizeValue: string) => void; 
  minPrice?: number; 
  maxPrice?: number;
  setMinPrice: (value: number | undefined) => void; 
  setMaxPrice: (value: number | undefined) => void; 
}
