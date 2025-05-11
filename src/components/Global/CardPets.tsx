import { useNavigate } from "react-router";
import { CardPetsProps } from "../../interface/CardPets";

export function CardPets({
  id,
  name,
  imgs,
  price,
  age,
  gender,
}: CardPetsProps) {
  const navigate = useNavigate();
  return (
    <article
      onClick={() => navigate(`/pet/${id}`)}
      id={id.toString()}
      className="
      hover:scale-104 cursor-pointer transition-transform duration-500
      bg-[#ebebeb] w-[280px] h-[378px] p-2 gap-2 rounded-[12px] flex flex-col 
      "
    >
      <figure>
        <img
          src={imgs[0].url}
          alt={`Picture of ${name}`}
          width={264}
          height={264}
          className=" object-cover w-[264px] h-[264px]"
        />
        <figcaption className="mt-2 font-bold text-[16px] leading-6 text-[#00171F]">
          {name}
        </figcaption>
      </figure>

      <div className="gap-2">
        <div className="flex items-center gap-3">
          <p className="font-gilroy font-bold text-[12px] leading-[18px] text-[#667479]">
            Gender: <strong>{gender}</strong>
          </p>
          <p className="font-gilroy font-bold text-[12px] leading-[18px] text-[#667479]">
            •
          </p>
          <p className="font-gilroy font-bold text-[12px] leading-[18px] text-[#667479]">
            Age: <strong>{age}</strong>
          </p>
        </div>

        <p className="text-[#00171F] text-[16px] font-bold mt-1">R$ {price}</p>
      </div>
    </article>
  );
}
