// import { useParams } from "react-router-dom";
import { Header } from "../components/Global/Header";
import { Footer } from "../components/Global/Footer";
import { PetMain } from "../components/PetPage/PetMain";
import { useParams } from "react-router";

export function Pet() {
  const { id } = useParams();
  if (id === undefined) {
    return (
      <>
        <Header IsFixed={false} />
          <h1 className="text-center text-5xl text-[#003459] mt-20 mb-20">Nenhum pet selecionado</h1>
        <Footer />
      </>
    );
  }
  return (
    
    <>
      <Header IsFixed={false}  />
      <PetMain id={id}/>
      <Footer />
    </>
  );
}
