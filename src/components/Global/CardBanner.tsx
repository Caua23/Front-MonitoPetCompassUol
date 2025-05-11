import { CirclePlay } from "lucide-react";
import { CardBannerProps } from "../../interface/CardBanner";
import { useNavigate } from "react-router";

export function CardBanner({
  title,
  subtitle,
  description,
  imageUrl,
  backgroundColor,
  side,
  textColor,
}: CardBannerProps) {
  const isLeft = side === "left";
  const navigate = useNavigate();
  return (
    <div
      className={`mt-10 w-[1180px] h-[378px] rounded-3xl ${backgroundColor} relative flex items-center p-10 gap-10`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"} `}>
        <h1
          className={`font-extrabold text-[60px] mb-5 leading-[68px] capitalize text-${textColor === 'white' ?  textColor : 'black'}`}
        >
          {title}
        </h1>
        <h2
          className={`font-bold text-[24px] mb-20 leading-[28px] capitalize text-${textColor === 'white' ?  textColor : 'black'}`}
        >
          {subtitle}
        </h2>
      </div>

      <div
        className={`absolute max-w-[400px] text-[12px] leading-[15px]  top-56 font-medium text-${textColor === 'white' ?  textColor : 'black'} break-words ${
          isLeft ? "right-10 text-right" : "left-10 text-left"
        }`}
      >
        {description}
      </div>

      <div
        className={`absolute flex gap-4 bottom-10 ${
          isLeft ? "right-10" : "left-10"
        }`}
      >
        <button
          onClick={() => navigate("/catalogo/pet")}
          className="w-[161px] h-[48px] cursor-pointer rounded-[57px] bg-[#003459] text-white flex items-center justify-center hover:opacity-90 transition"
        >
          <p>Explore Now</p>
        </button>

        <button
          className={`cursor-pointer
            flex items-center justify-center gap-2 w-[161px] h-[48px] rounded-[57px] border-2 border-${textColor === 'white' ?  textColor : '[#003459]'} 
            text-${textColor === 'white' ?  textColor : 'black'} hover:bg-${textColor === 'white' ?  textColor : '[#003459]'} hover:text-white transition duration-300`}
        >
          <p>View Intro</p> <CirclePlay size={24} className="text-current" />
        </button>
      </div>
    </div>
  );
}
