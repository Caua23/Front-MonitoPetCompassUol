import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { Thumb } from "./EmblaCarouselThumbsButton";
import "./embla.css"
type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  IsProduct: boolean
};

const EmblaCarousel: React.FC<PropType> = ({ slides,IsProduct, options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    skipSnaps: false,
    ...options,
  });

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;
    const index = emblaMainApi.selectedScrollSnap();
    setSelectedIndex(index);
    if (emblaThumbsApi) emblaThumbsApi.scrollTo(index);
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla max-w-4xl mx-auto">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container flex">
          {slides.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex justify-center items-center px-10  basis-[30%]"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className={`${IsProduct ? 'w-auto h-[400px]' : 'w-[476px] h-[350px]' }  ml-10 object-cover rounded-2xl transition-all duration-500 ease-in-out ${
                  index === selectedIndex
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-50 scale-90 w-0 h-0 pointer-events-none z-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs mt-4 ml-5">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex ">
            {slides.map((src, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={src}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
