/* eslint-disable @typescript-eslint/no-unused-expressions */
import { CardBanner } from "../components/Global/CardBanner";
import { Header } from "../components/Global/Header";
import Banner4 from "../assets/banner4.png";
import { Footer } from "../components/Global/Footer";
import { Filter } from "../components/CatalogoPage/Filter";
import { MainCatalogo } from "../components/CatalogoPage/MainCatalogo";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { CardPetsProps } from "../interface/CardPets";
import { CardProductsProps } from "../interface/CardProduct";

export function Catalogo() {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [color, setColor] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [size, setSize] = useState<string[]>([]);
  const [pets, setPets] = useState<CardPetsProps[]>([]);
  const [products, setProducts] = useState<CardProductsProps[]>([]);

  const api = import.meta.env.VITE_API_URL;
  const { category } = useParams();
  if (!category) {
    return;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function fetchData() {
      try {
        const queryParams = new URLSearchParams();

        if (male) queryParams.set("gender", "male");
        if (female) queryParams.set("gender", "female");

        if (color.length > 0) queryParams.set("color", color.join(","));
        if (size.length > 0) queryParams.set("size", size.join(","));

        if (minPrice !== undefined)
          queryParams.set("priceMin", String(minPrice));
        if (maxPrice !== undefined)
          queryParams.set("priceMax", String(maxPrice));

        const url =
          category === "pet"
            ? `http://${api}/pet/getAll?${queryParams.toString().toLowerCase()}`
            : `http://${api}/products/getAll?${queryParams
                .toString()
                .toLowerCase()}`;

        const response = await axios.get(url);
        category === "pet"
          ? setPets(response.data)
          : setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, [category, male, female, color, size, minPrice, maxPrice, api]);

  const MaleChange = (value: boolean) => {
    setMale(value);
    if (value) setFemale(false);
  };

  const FemaleChange = (value: boolean) => {
    setFemale(value);
    if (value) setMale(false);
  };

  const ColorChange = (colorValue: any) => {
    setColor((prev) =>
      prev.includes(colorValue)
        ? prev.filter((c) => c !== colorValue)
        : [...prev, colorValue]
    );
  };

  const SizeChange = (sizeValue: any) => {
    setSize((prev) => (prev.includes(sizeValue) ? [] : [sizeValue]));
  };

  return (
    <>
      <Header IsFixed={false} />
      <div className="flex flex-col ">
        <p className="text-[#4d4d4daf] text-sm font-bold ml-[70px]">
        <a href="/">Home</a> &gt; 
        <a href="/catalogo/pet">Catalogo</a>  &gt;  <a href={`/catalogo/${category}`}>{category}</a>
        </p>
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
      </div>
      
      <div className="flex justify-center gap-10">
        <Filter
          category={category}
          male={male}
          female={female}
          color={color}
          size={size}
          onMaleChange={MaleChange}
          onFemaleChange={FemaleChange}
          onColorChange={ColorChange}
          onSizeChange={SizeChange}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
        <MainCatalogo pets={pets} products={products} />
      </div>
      <Footer />
    </>
  );
}
