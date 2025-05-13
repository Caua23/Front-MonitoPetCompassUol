import { ChevronRight, CirclePlay } from "lucide-react";
import { CardPets } from "../Global/CardPets";
import { CardBanner } from "../Global/CardBanner";
import Banner2 from "./../../assets/Banner2.png";
import { CardProducts } from "../Global/CardProducts";
import marcas from "./../../assets/marcas.png";
import Banner3 from "./../../assets/Banner3.png";
import { CardInfo } from "./CardInfo";
import pet from "./../../assets/pet.png";
import pet2 from "./../../assets/pet2.png";
import pet3 from "./../../assets/pet3.png";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { CardPetsProps } from "../../interface/CardPets";
import axios from "axios";
import { CardProductsProps } from "../../interface/CardProduct";
export function Main() {
  const navigate = useNavigate();
  const [pets, setPets] = useState<CardPetsProps[]>([]);
  const [products, setProducts] = useState<CardProductsProps[]>([]);
  const api = import.meta.env.VITE_API_URL;
  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await axios.get(
          `http://${api}/products/getAll?limit=8`
        );
        console.log(response.data);

        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar pets:", error);
      }
    }

    fetchPets();
  }, [api]);
  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await axios.get(
          `http://${api}/pet/getAll?limit=8`
        );
        console.log(response.data);

        setPets(response.data);
      } catch (error) {
        console.error("Erro ao buscar pets:", error);
      }
    }

    fetchPets();
  }, [api]);

  return (
    <main className="">
      <section className="mt-24 ml-32 mb-[15%]">
        <h1 className="text-6xl font-extrabold text-[#002A48]">
          One more friend
        </h1>
        <h2 className="text-5xl mt-3 font-bold text-[#002A48]">
          Thousands more fun!
        </h2>
        <p className="w-[480px] mt-5  text-justify">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex gap-4 mt-10">
          <button
            className="
            flex items-center justify-center gap-2 bg-transparent 
            rounded-[57px] w-[161px] h-[48px] border-[#003459]
            border-2 text-[#003459] hover:bg-[#003459] hover:text-white 
            transition duration-500 ease-in-out
            cursor-pointer
            "
          >
            <p>View Intro</p>
            <CirclePlay size={24} className="text-current" />
          </button>
          <button
            onClick={() => navigate("/catalogo/pet")}
            className="text-white rounded-[57px] w-[161px] h-[48px] bg-[#003459] cursor-pointer"
          >
            <p>Explore Now</p>
          </button>
        </div>
      </section>
      <section className="min-h-screen w-full mt-40">
        <div className="flex justify-between items-center mb-10">
          <div className="ml-20">
            <p className="font-medium text-[16px] leading-6 align-bottom">
              Whats new?
            </p>
            <p className=" font-bold text-[24px] leading-9 align-bottom text-[#003459] capitalize">
              Take a look at some of our pets
            </p>
          </div>
          <button
            onClick={() => navigate("/catalogo/pet")}
            className="
              mr-20 cursor-pointer hover:bg-[#003459] ease-in-out duration-500 hover:text-white 
              flex items-center h-[44px] rounded-[57px] border-[2px] border-[#003459] 
              px-7 py-3 gap-2 text-center
            "
            type="button"
          >
            view more <ChevronRight size={20} className="text-current" />
          </button>
        </div>
        <div className="ml-20 mr-20 grid grid-cols-4 gap-10">
          {pets.map((pet) => (
            <CardPets
              key={pet.id}
              id={pet.id}
              age={`${pet.age} Anos`}
              gender={pet.gender}
              imgs={pet.imgs}
              name={pet.name}
              price={pet.price}
            />
          ))}
        </div>
      </section>
      <div className="flex justify-center items-center  mb-20">
        <CardBanner
          imageUrl={Banner2}
          title="One more friend"
          subtitle="Thousands more fun!"
          side="left"
          description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
          backgroundColor="bg-[#003459]"
        />
      </div>
      <section className="min-h-screen w-full mt-20">
        <div className="flex justify-between items-center mb-10">
          <div className="ml-20">
            <p className="font-medium text-[16px] leading-6 align-bottom">
              Hard to choose right products for your pets?
            </p>
            <p className=" font-bold text-[24px] leading-9 align-bottom text-[#003459] capitalize">
              Our Products
            </p>
          </div>
          <button
            onClick={() => navigate("/catalogo/products")}
            className="
              mr-20  hover:bg-[#003459] ease-in-out duration-500 hover:text-white 
              flex items-center h-[44px] rounded-[57px] border-[2px] border-[#003459] 
              px-7 py-3 gap-2 text-center cursor-pointer
            "
            type="button"
          >
            view more <ChevronRight size={20} className="text-current" />
          </button>
        </div>
        <div className="ml-20 mr-20 grid grid-cols-4 gap-10">
          {products && products.length > 0 ? (
            products.map((product) => (
              <CardProducts
                key={product.id}
                id={product.id}
                name={product.name}
                imgsProduct={product.imgsProduct}
                price={product.price}
                product={product.product}
              />
            ))
          ) : (
            <div className="text-center text-2xl text-gray-700 mt-4">
              Nenhum produto encontrado.
            </div>
          )}
        </div>
      </section>

      <section className="max-h-[251px] w-full mt-20">
        <div className="flex justify-between items-center mb-10">
          <div className="ml-20 flex gap-2 items-center">
            <p className="font-medium text-[16px] leading-6 align-bottom">
              Proud to be part of
            </p>
            <p className=" font-bold text-[24px] leading-9 align-bottom text-[#003459] capitalize">
              Pet Sellers
            </p>
          </div>
          <button
            onClick={() => navigate("/catalogo/pet")}
            className="
              mr-20 cursor-pointer hover:bg-[#003459] ease-in-out duration-500 hover:text-white 
              flex items-center h-[44px] rounded-[57px] border-[2px] border-[#003459] 
              px-7 py-3 gap-2 text-center
            "
            type="button"
          >
            view more <ChevronRight size={20} className="text-current" />
          </button>
        </div>

        <div className="flex justify-center items-center w-auto h-auto">
          <img src={marcas} alt="" width={1100} />
        </div>
      </section>
      <div className="flex justify-center items-center mb-20">
        <CardBanner
          imageUrl={Banner3}
          title="Adoption"
          subtitle="We need help. so do they."
          side="right"
          description="Adopt a pet and give it a home,it will be love you back unconditionally."
          backgroundColor="bg-[#FFB775]"
        />
      </div>
      <section className="min-h-screen w-full ">
        <div className="flex justify-between items-center mb-10">
          <div className="ml-20">
            <p className="font-medium text-[16px] leading-6 align-bottom">
              You already know ?
            </p>
            <p className=" font-bold text-[24px] leading-9 align-bottom text-[#003459] capitalize">
              You already know ?
            </p>
          </div>
          <button
            onClick={() => navigate("/catalogo/pet")}
            className="
              mr-20 cursor-pointer hover:bg-[#003459] ease-in-out duration-500 hover:text-white 
              flex items-center h-[44px] rounded-[57px] border-[2px] border-[#003459] 
              px-7 py-3 gap-2 text-center
            "
            type="button"
          >
            view more <ChevronRight size={20} className="text-current" />
          </button>
        </div>
        <div className="flex justify-center items-center w-auto h-auto">
          <CardInfo
            id={1}
            title="What is a Pomeranian? How to Identify Pomeranian Dogs"
            description="The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."
            imageUrl={pet}
          />
          <CardInfo
            id={1}
            title="Dog Diet You Need To Know"
            description="Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance."
            imageUrl={pet2}
          />
          <CardInfo
            id={1}
            title="Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively"
            description="Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog."
            imageUrl={pet3}
          />
        </div>
      </section>
    </main>
  );
}
