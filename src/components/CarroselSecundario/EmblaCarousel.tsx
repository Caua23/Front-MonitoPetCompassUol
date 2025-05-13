import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButtons'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import "./embla.css"

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla-secundario">
      <div className="embla-secundario__viewport" ref={emblaRef}>
        <div className="embla-secundario__container">
          {slides.map((src, index) => (
            <div
              key={index}
              className="embla-secundario__slide"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="min-w-[250px] w-[250px] max-w-[250px] h-[340px] object-cover rounded-xl mx-2 shadow-md transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-secundario__controls">
        <div className="embla-secundario__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla-secundario__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla-secundario__dot'.concat(
                index === selectedIndex ? ' embla-secundario__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
