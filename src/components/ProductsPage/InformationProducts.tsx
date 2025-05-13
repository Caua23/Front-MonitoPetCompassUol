import { MessageCircleIcon } from "lucide-react";
import { DetailsTable } from "../PetPage/DetailsTable";
import { InformationProductsProps } from "../../interface/InformationProducts";

export function InformationProducts({
  openModal,
  id,
  name,
  price,
  size,
  product,
  publishedDate,
  additionalInfo,
}: InformationProductsProps) {
  const details = [
    { label: "SKU", value: `#${id.toString().padStart(7, "0")}` },
    { label: "Size", value: size },
    { label: "Category", value: product},
    { label: "Published Date", value: publishedDate },
    { label: "Additional Information", value: additionalInfo },
  ];

  return (
    <div className="w-full md:w-1/2 md:pl-6 mt-6 md:mt-0">
      <h2 className="text-[28px] font-bold text-gray-800">{name}</h2>
      <p className="text-[24px] font-semibold text-gray-600 mt-2">
        {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
      </p>
      <div className="flex space-x-4 mt-4">
        <button
        onClick={openModal}
        className="bg-[#003459] cursor-pointer w-[138px] h-[44px] text-white rounded-full border-none hover:bg-[#002a45] transition">
          Contact us
        </button>
        <button className="flex items-center cursor-pointer justify-center border-2 border-[#003459] w-[200px] h-[44px] text-[#003459] rounded-full bg-transparent hover:bg-[#003459] hover:text-white transition">
          <MessageCircleIcon size={20} className="mr-2" />
          Chat with Monito
        </button>
      </div>
      <DetailsTable details={details} IsProduct={true}/>
    </div>
  );
}
