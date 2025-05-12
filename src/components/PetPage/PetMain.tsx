import { useEffect, useState } from "react";
import { Anside } from "./Anside";
import { Information } from "./Information";
import { PetInfo } from "../../interface/PetInfo";
import axios from "axios";
import { CardPetsProps } from "../../interface/CardPets";
import { CardPets } from "../Global/CardPets";
import { Modal } from "./modal";

export function PetMain({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pet, setPet] = useState<PetInfo | null>(null);
  const [cardPet, setCardPet] = useState<CardPetsProps[]>([]);
  const [error, setError] = useState<string | null>(null);
    const api = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchCardPet = async () => {
      try {
        const response = await axios.get(
          `http://${api}/pet/getAll?limit=4`
        );
        setCardPet(response.data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError("Erro ao buscar informações do pet.");
      }
    };
    fetchCardPet();
  }, [api]);
  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get<PetInfo>(
          `http://${api}/pet/get/${id}`
        );
        setPet(response.data);
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
  if (!pet) {
    return (
      <p className="text-center mt-20 mb-20 text-[#002A48]">
        Pet não encontrado.
      </p>
    );
  }
  return (
    <main>
      {
        isOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <Modal 
              petId={pet.id}
              onClose={() => setIsOpen(false)}
            />
          </div>
        )
      }
      <section className="flex justify-center items-center min-w-full m-5">
        <div className="flex flex-col md:flex-row max-w-5xl w-full mt-6 p-6 gap-10 bg-white rounded-lg shadow-md">
          <Anside SLIDES={pet.imgs.map((img) => img.url)} />
          <Information
            openModal={() => setIsOpen(true)}
            key={pet.id}
            id={pet.id}
            name={pet.name}
            price={pet.price}
            gender={pet.gender}
            age={pet.age}
            size={pet.size}
            color={pet.color}
            vaccinated={"Yes"}
            dewormed={"Yes"}
            cert={"Yes"}
            microchip={"Yes"}
            location={pet.location}
            publishedDate={pet.publishedDate}
            additionalInfo={pet.addInformation}
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
          {cardPet &&
            cardPet.map((pet) => (
              <CardPets
                id={pet.id}
                age={pet.age}
                gender={pet.gender}
                imgs={pet.imgs}
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
