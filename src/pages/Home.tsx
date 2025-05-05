import { Header } from "../components/HomePage/Header";
import banner from "../assets/banner.png";
import { Main } from "../components/HomePage/Main";
export function Home() {
    return (
        <div className="max-h-screen bg-cover bg-center bg-no-repeat bg-[#FCEED5]"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <Header />
            <Main />
        </div>
    )
}