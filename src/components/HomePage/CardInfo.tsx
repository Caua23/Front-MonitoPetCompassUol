import { CardInfoProps } from "../../interface/Cardinfo";

export function CardInfo({ description, imageUrl, id, title }: CardInfoProps) {
  return (
    <div
      id={id.toString()}
      className="flex flex-col justify-around w-[380px] p-3 h-[480px] rounded-[12px] gap-2 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] relative"
    >
      <img className="w-[364px] h-[240px] rounded-[10px]" src={imageUrl} alt="" />
      <div className="flex flex-col gap-5">
        <div className="h-[20px] w-[105px] flex items-center rounded-[28px] gap-[10px] pt-[2px] pr-[10px] pb-[2px] pl-[10px] bg-[#00A7E7]">
          <p className="text-[12px] font-medium text-white">Pet knowledge</p>
        </div>
        <div className="flex flex-col gap-2 ">
          <h3 className="text-[#00171F] text-[16px] leading-[24px] font-bold break-words overflow-hidden">
            {title}
          </h3>
          <p className="max-w-[348px] text-[14px] break-words overflow-hidden">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
