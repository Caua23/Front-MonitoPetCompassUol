import { CardBanner } from "../components/Global/CardBanner";
import { Header } from "../components/Global/Header";
import Banner4 from "../assets/banner4.png";
import { Footer } from "../components/Global/Footer";
import { Filter } from "../components/CatalogoPage/Filter";
import { MainCatalogo } from "../components/CatalogoPage/MainCatalogo";

export function Catalogo() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center mb-5">
        <CardBanner
          title="One more friend"
          subtitle="Thousands more fun!"
          description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
          imageUrl={Banner4}
          side="left"
          backgroundColor="bg-[#FFE7BA]"
          textColor="white"
        />
      </div>
      <div className="flex justify-center gap-10">
        <Filter />
        <MainCatalogo />
      </div>
      <Footer />
    </>
  );
}
