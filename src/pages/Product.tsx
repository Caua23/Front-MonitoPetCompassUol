import { useParams } from "react-router";
import { Footer } from "../components/Global/Footer";
import { Header } from "../components/Global/Header";
import { ProductsMain } from "../components/ProductsPage/ProductsMain";

export function Product() {
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
            <Header IsFixed={false} />
            <ProductsMain id={id}/>
            <Footer />
        </>
    )
}