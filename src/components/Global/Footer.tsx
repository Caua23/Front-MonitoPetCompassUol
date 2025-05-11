import { FacebookIcon,  InstagramIcon, TwitterIcon, Youtube } from "lucide-react";
import logo from "../../assets/logo.png";
export function Footer() {
    return (
      <footer 
        className="h-[440px] flex flex-col justify-center items-center bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]" 
        style={{
          background: 'linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)',
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1180px] h-[136px] rounded-[16px] p-[32px] bg-[#003459] gap-[20px]">
          <h2 className="text-white font-bold text-[20px] leading-[36px] tracking-normal capitalize text-center md:text-left max-w-[60%]">
            Register now so you don't miss our programs
          </h2>
          
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex items-center justify-center gap-4 mt-8 md:mt-0 w-full md:w-[707px] bg-white rounded-2xl h-[72px] px-4"
          >
            <input 
              type="email" 
              placeholder="Enter your Email" 
              aria-label="Email address" 
              className="w-full md:w-[508px] h-[48px] rounded-[8px] border border-[#99A2A5] px-[28px] py-[14px] text-black"
            />
            <button 
              type="submit" 
              aria-label="Subscribe Now" 
              className="w-[170px] h-[48px] cursor-pointer rounded-[8px] bg-[#003459] text-white flex items-center justify-center gap-[10px] px-[28px] py-[14px] hover:bg-[#00171F] transition-colors"
            >
              Subscribe Now
            </button>
          </form>
        </div>
        <div className="flex  justify-between items-center w-full max-w-[1180px] mt-[32px]">
            <nav>
                <ul className="flex items-center justify-center gap-4 ml-4 text-[#003459] font-bold text-[16px] leading-[28px] tracking-normal capitalize">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <nav className="flex items-center justify-center gap-10 mr-4  font-bold text-[16px] leading-[28px] tracking-normal capitalize">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <Youtube />
            </nav>
        </div>
        <div className="w-[85%] bg-gray-400 h-[1px] mt-14"></div>
        <div className="w-[85%] flex items-center justify-between mt-4">
            <p>© 2022 Monito. All rights reserved.</p>
            <img src={logo} width={115} height={40} alt="" />
            <ul className="flex items-center gap-4 text-[#003459] font-bold text-[16px] leading-[28px] tracking-normal capitalize">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
      </footer>
    );
  }
  