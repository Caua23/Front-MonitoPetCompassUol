import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import BandeiraBRL from "../../assets/bandeiraBRL.png";
import { ChevronDown } from "lucide-react";
export function Header() {
  return (
    <header className=" bg-transparent flex justify-center gap-20 items-center   w-[1440px] h-[100px] pt-7 pr-[130px] pb-7 pl-[130px]">
      <div className="flex items-center gap-10">
        <img src={logo} width="150px" height="50px" alt="" />
        <ul className="flex text-[#003459] text-base font-bold gap-4 hover:cursor-pointer">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search something here!"
            className="w-[280px] h-[44px] pl-12 pr-5 pt-3 pb-3 rounded-[46px] bg-[#FDFDFD] border-none outline-none"
          />
          <img
            src={searchIcon}
            alt="Search"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
        <button className="
        font-bold text-base leading-6 tracking-normal align-bottom 
        bg-[#003459] w-[203px] h-[44px]  gap-2.5 rounded-[57px]
        ">  
        <p className="text-white font-medium text-base">Join the community</p>
        </button>
        <div className="flex items-center gap-2 mr-10">
        <ul className="flex gap-4 hover:cursor-pointer  ">
          <li className="flex items-center gap-2 text-[#003459] font-medium text-base">
            <img src={BandeiraBRL} className="object-cover" width="16px" height="16px" alt="" /> BRL
          </li>
          <li className="hidden ">
            <img src="" alt="" /> USD
          </li>
          <li className="hidden ">
            <img src="" alt="" /> VND
          </li>
        </ul>
            <ChevronDown  size={20} />
        </div>
        
      </div>
    </header>
  );
}
