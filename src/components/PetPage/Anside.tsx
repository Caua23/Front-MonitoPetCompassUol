import EmblaCarousel from "./EmblaCarousel";
import "./embla.css";
import GaranteePet from "./../../assets/GaranteePet.png"
import coracaoPet from "./../../assets/CoracaoPet.png"
import redes from "./../../assets/redes.png"
import { Share2 } from "lucide-react";
import { SlidesProps } from "../../interface/Slides";
export function Anside({ SLIDES }: SlidesProps) {
    
    return (
        <aside className="w-[600px] flex flex-col ">
          <EmblaCarousel slides={SLIDES} />
          <div
            className="flex items-center mt-5 mb-5 justify-center p-5 gap-15 rounded-2xl w-[560px] h-[48px]"
            style={{
              background:
                "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
            }}
          >
            <div className="flex items-center gap-3">
              <img src={coracaoPet} width={30} height={30} alt="" />
              <p className="text-[14px] font-bold text-[#002A48]">100% health guarantee for pets </p>
            </div>
            <div className="flex items-center gap-3">
              <img src={GaranteePet} width={30} height={30} alt="" />
              <p className="text-[14px] font-bold text-[#002A48]">100% guarantee of pet identification</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold text-[#002A48] cursor-pointer flex items-center gap-2 text-[14px]"><Share2 size={20}/> Share: </p>
            <img src={redes} alt="" className="cursor-pointer" height={18} width={129}/>
          </div>
        </aside>
    )
}