import { useEffect, useState } from "react";
import { Anside } from "../PetPage/Anside";


import axios from "axios";

import EmblaCarousel from "../CarroselSecundario/EmblaCarousel"
import { EmblaOptionsType } from "embla-carousel";
import { CardProductsProps } from "../../interface/CardProduct";
import { CardProducts } from "../Global/CardProducts";
import { InformationProducts } from "./InformationProducts";
import { Modal } from "../PetPage/Modal";


export function ProductsMain({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<CardProductsProps | null>(null);
  const [cardProduct, setCardProduct] = useState<CardProductsProps[]>([]);
  const [error, setError] = useState<string | null>(null);
    const api = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchCardProduct = async () => {
      try {
        const response = await axios.get(
          `http://${api}/products/getAll?limit=4`
        );
        setCardProduct(response.data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError("Erro ao buscar informações do pet.");
      }
    };
    fetchCardProduct();
  }, [api]);
  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get<CardProductsProps>(
          `http://${api}/products/get/${id}`
        );
        setProduct(response.data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError("Erro ao buscar informações do pet.");
      }
    };
    fetchPet();
  }, [id, api]);
  if (error) {
    return <p className="text-center mt-20 mb-20 text-red-500">{error}</p>;
  }
  if (!product) {
    return (
      <p className="text-center mt-20 mb-20 text-[#002A48]">
        product não encontrado.
      </p>
    );
  }
  const OPTIONS: EmblaOptionsType = { loop: true }


  return (
    <main>
      {
        isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <Modal 
              petId={product.id}
              onClose={() => setIsOpen(false)}
            />
          </div>
        )
      }
      <section  className="flex justify-center items-center min-w-full m-5">
        <div className="flex flex-col md:flex-row max-w-5xl w-full mt-6 p-6 gap-10 bg-white rounded-lg shadow-md">
          <Anside SLIDES={product?.imgsProduct.map((img) => img.url)} IsProduct={true}  />
          <InformationProducts 
          openModal={() => setIsOpen(true)} 
          id={product.id}
            additionalInfo={product.addInformation? product.addInformation : ""}
            name={product.name}
            price={product.price}
            product={product.product}
            publishedDate={product.date? product.date : ""}
            size={product.size? product.size : ""}

            />
        </div>
      </section>
      <section className="mt-20">
        <div className="ml-[13%]">
          <p className="mt-10 font-bold text-[24px] mb-20 text-[#002A48]">
            Our lovely customer
          </p>
        </div>
        <div className="flex justify-center items-center">

          {/* Carrosel */}
          <EmblaCarousel slides={product?.imgsProduct.map((img) => img.url)} options={OPTIONS} />
        </div>
      </section>
      <section className="mt-20 mb-20">
        <div className="ml-[13%] flex flex-col mb-10">
          <p className="mt-10 text-[16px]">Whats new?</p>
          <p className="text-[24px] font-bold text-[#002A48]">
            See more puppies
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          {cardProduct &&
            cardProduct.map((pet) => (
              <CardProducts
                id={pet.id}
                imgsProduct={pet.imgsProduct}
                product={pet.product}
                size={pet.size}
                name={pet.name}
                price={pet.price}
                key={pet.id}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
