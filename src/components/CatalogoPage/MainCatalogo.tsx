import { useState } from "react";

import { CardPets } from "../Global/CardPets";
import { CardProducts } from "../Global/CardProducts";
import ReactPaginate from "react-paginate";
import ArrowL from "../../assets/ArrowL.png";
import ArrowR from "../../assets/ArrowR.png";
import { useNavigate, useParams } from "react-router";
import { CardPetsProps } from "../../interface/CardPets";
import { CardProductsProps } from "../../interface/CardProduct";
import { MainCatalogoProps } from "../../interface/Maincatalogo";

export function MainCatalogo({ pets, products }: MainCatalogoProps) {
  const { category } = useParams();
  const [itemOffset, setItemOffset] = useState(0);
  const navigate = useNavigate();
  const itemsPerPage = 6;
  
  const data = category === "pet" ? pets : products;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };


  return (
    <main className="w-full min-h-screen flex flex-col">
      <div className="flex items-center gap-3 justify-between">
        <div className="flex gap-3 items-center">
          <p className="text-[#003459] text-2xl font-bold">{category}</p>
          <p className="text-sm">{data.length} Encontrados</p>
        </div>
        <button
          onClick={() => {window.scrollTo(0, 0); navigate(`/catalogo/${category === "pet" ? "products" : "pet"}`)}} 
        className="cursor-pointer bg-transparent border border-gray-400 text-gray-400 font-bold mr-15 py-2 px-4 rounded-3xl">
          Go to {category === "pet" ? "Products" : "Pets"}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5 mb-5 flex-grow">
        {category === "pet" &&
          (currentItems as CardPetsProps[]).map((pet) => (
            <CardPets
              key={pet.id}
              age={pet.age}
              id={pet.id}
              gender={pet.gender}
              imgs={pet.imgs}
              name={pet.name}
              price={pet.price}
            />
          ))}

        {category === "products" &&
          (currentItems as CardProductsProps[]).map((product) => (
            <CardProducts
              key={product.id}
              id={product.id}
              imgsProduct={product.imgsProduct}
              name={product.name}
              price={product.price}
              product={product.product}
            />
          ))}
      </div>

      <div className="mt-auto">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<img width={24} height={24} src={ArrowR} alt="next" />}
          previousLabel={<img width={24} height={24} src={ArrowL} alt="previous" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          containerClassName="flex justify-center items-end gap-2 mt-4 mb-8"
          pageClassName="border cursor-pointer border-gray-400 rounded px-3 py-1"
          activeClassName="bg-[#003459]  text-white"
          previousClassName="border-none rounded px-3 py-1 cursor-pointer  transition-colors duration-500"
          nextClassName="border-none rounded px-3 py-1 cursor-pointer  transition-colors duration-500"
        />
      </div>
    </main>
  );
}
