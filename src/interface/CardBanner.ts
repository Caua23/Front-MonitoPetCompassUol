export interface CardBannerProps {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    backgroundColor: `bg-${string}`;
    side: 'left' | 'right';
    textColor?: 'white' | 'black';
}