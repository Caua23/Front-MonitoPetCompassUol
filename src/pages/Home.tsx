import { Header } from "../components/Global/Header";
import banner from "../assets/banner.png";
import { Main } from "../components/HomePage/Main";
import { Footer } from "../components/Global/Footer";



export function Home() {
    
    return (
        <div className="max-h-screen bg-cover bg-center bg-no-repeat bg-[#FCEED5]"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <Header IsFixed={false} />
            <Main />
            <Footer/>
        </div>
    )
}