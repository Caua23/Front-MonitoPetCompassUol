import { useEffect, useState } from "react";
import { Anside } from "./Anside";
import { Information } from "./Information";
import { PetInfo } from "../../interface/PetInfo";
import axios from "axios";

interface PetMainProps {
  id: string;
}

export function PetMain({ id }: PetMainProps) {
  const [pet, setPet] = useState<PetInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get<PetInfo>(`http://localhost:3000/pet/get/${id}`);
        setPet(response.data);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError("Erro ao buscar informações do pet.");
      } 
    };
    fetchPet();
  }, [id]);

  


  if (error) {
    return <p className="text-center mt-20 mb-20 text-red-500">{error}</p>;
  }

  if (!pet) {
    return <p className="text-center mt-20 mb-20 text-[#002A48]">Pet não encontrado.</p>;
  }

  return (
    <main>
      <section className="flex justify-center items-center min-w-full m-5">
        <div className="flex flex-col md:flex-row max-w-5xl w-full mt-6 p-6 gap-10 bg-white rounded-lg shadow-md">
          <Anside SLIDES={pet.imgs.map((img) => img.url)} />
          <Information
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
            additionalInfo={pet.additionalInfo}
          />
        </div>
      </section>
    </main>
  );
}
