import { CardProductsProps } from "../../interface/CardProduct";
import presentImg from "../../assets/present.png";
import { useNavigate } from "react-router";

export function CardProducts({
  id,
  name,
  image,
  price,
  product,
  size,
}: CardProductsProps) {
  const navigate = useNavigate();
  return (
    <article
    onClick={() => navigate(`/product/${id}`)}
      id={id.toString()}
      className="
        hover:scale-105 transition-transform duration-500
        bg-[#ebebeb] w-[280px] h-[440px] p-2 gap-2 rounded-[12px]
        flex flex-col justify-around items-center
      "
    >
      <figure>
        <img
          src={image[0].url}
          alt={`Picture of ${name}`}
          width={264}
          height={264}
          className="object-cover w-[264px] h-[264px]"
        />
        <figcaption className="mt-2 ml-2 font-bold text-[16px] leading-6 text-[#00171F]">
          {name}
        </figcaption>
      </figure>

      <div className="gap-2 ml-5 w-full flex flex-col ">
        <div className="flex items-center gap-3 text-[12px] leading-[18px] text-[#667479] font-gilroy font-bold">
          <p>
            Product: <strong>{product}</strong>
          </p>
          {size && <p>•</p>}
          {size && (
            <p>
              Size: <strong>{size}</strong>
            </p>
          )}
        </div>

        <p className="text-[#00171F] text-[16px] font-bold mt-1">R$ {price}</p>

        <div className="flex cursor-pointer justify-center items-center mt-2 w-[248px] h-[34px] gap-2 rounded-[8px] px-[10px] py-[6px] bg-[#FCEED5]">
          <img className="w-[20px]" src={presentImg} alt="Present icon" />
          <p>• Free Toy & Free Shaker</p>
        </div>
      </div>
    </article>
  );
}
