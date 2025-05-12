export interface FilterProps {
  onFilterChange: (
    filters: { 
        gender: string | null,
        color: string[],
        priceRange: [number | null, number | null],
        size: string[] 
    }) => void;
}