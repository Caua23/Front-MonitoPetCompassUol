import { useNavigate } from "react-router";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/Search.png";
// import BandeiraBRL from "../../assets/bandeiraBRL.png";
// import { ChevronDown } from "lucide-react";
import { DropdownHeader } from "./DropdownHeader";
export function Header({IsFixed}: {IsFixed: boolean}) {
  const navigate = useNavigate();

  return (
    <header className={`${IsFixed ? 'fixed' : ''} bg-transparent flex justify-center gap-20 items-center   w-[1440px] h-[100px] pt-7 pr-[130px] pb-7 pl-[130px]`}>
      <div className="flex items-center gap-10">
        <img onClick={() => navigate("/")} src={logo} width="150px" height="50px" alt="" className="cursor-pointer"/>
        <ul className="flex text-[#003459] text-base font-bold gap-4 hover:cursor-pointer">
          <li onClick={() => navigate("/")}>
            <a href="">Home</a>
          </li>
          <li onClick={() => navigate("/catalogo/pet")}>
            <a href="">Category</a>
          </li>
          <li onClick={() => navigate("/")}>
            <a href="">About</a>
          </li>
          <li onClick={() => navigate("/")}>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search sometwhing here!"
            className="w-[280px] h-[44px] pl-12 pr-5 pt-3 pb-3 rounded-[46px] bg-[#FDFDFD] border-none outline-none"
          />
          <img
            src={searchIcon}
            alt="Search"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
        <button
          onClick={() => navigate("/auth/singUp")}
          className="
        font-bold cursor-pointer text-base leading-6 tracking-normal align-bottom 
        bg-[#003459] w-[203px] h-[44px]  gap-2.5 rounded-[57px]
        "
        >
          <p className="text-white font-medium text-base">Join the community</p>
        </button>
        <div className="flex items-center gap-2 mr-5">
          <DropdownHeader />
        </div>
      </div>
    </header>
  );
}
