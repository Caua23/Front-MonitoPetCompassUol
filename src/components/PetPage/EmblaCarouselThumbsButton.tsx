import React from 'react'

type PropType = {
  selected: boolean
  onClick: () => void
  imgSrc: string
}

export const Thumb: React.FC<PropType> = ({ selected, onClick, imgSrc }) => {
  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button onClick={onClick} type="button" className="embla-thumbs__slide__button w-[90px] h-[90px]">
        <img className="embla-thumbs__slide__img object-cover"  src={imgSrc} alt="Thumbnail" />
      </button>
    </div>
  )
}
