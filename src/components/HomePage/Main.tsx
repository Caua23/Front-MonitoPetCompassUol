import { ChevronRight, CirclePlay } from "lucide-react";
import { CardPets } from "../Global/CardPets";

export function Main() {
  return (
    <main className="">
      <section className="mt-24 ml-32 mb-36">
        <h1 className="text-6xl font-extrabold text-[#002A48]">
          One more friend
        </h1>
        <h2 className="text-5xl mt-3 font-bold text-[#002A48]">
          Thousands more fun!
        </h2>
        <p className="w-[480px] mt-5  text-justify">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex gap-4 mt-10">
          <button
            className="
            flex items-center justify-center gap-2 bg-transparent 
            rounded-[57px] w-[161px] h-[48px] border-[#003459]
            border-2 text-[#003459] hover:bg-[#003459] hover:text-white 
            transition duration-500 ease-in-out
            "
          >
            <p>View Intro</p>
            <CirclePlay size={24} className="text-current" />
          </button>
          <button className="text-white rounded-[57px] w-[161px] h-[48px] bg-[#003459] ">
            <p>Explore Now</p>
          </button>
        </div>
      </section>
      <section className="min-h-screen w-full mt-40">
        <div className="flex justify-between items-center mb-10">
          <div className="ml-20">
            <p className="font-medium text-[16px] leading-6 align-bottom">
              Whats new?
            </p>
            <p className=" font-bold text-[24px] leading-9 align-bottom text-[#003459] capitalize">
              Take a look at some of our pets
            </p>
          </div>
          <button
            className="
              mr-20 cursor-pointer hover:bg-[#003459] ease-in-out duration-500 hover:text-white 
              flex items-center h-[44px] rounded-[57px] border-[2px] border-[#003459] 
              px-7 py-3 gap-2 text-center
            "
            type="button"
          >
            view more <ChevronRight size={20} className="text-current" />
          </button>
        </div>
        <div className="ml-20 mr-20 grid grid-cols-3 gap-10">
          {/* pets cards */}
          <CardPets
            age="2 years"
            name="Dog"
            gender="Male"
            price={200}
            id={1}
            image="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </section>
    </main>
  );
}
