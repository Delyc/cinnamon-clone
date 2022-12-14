import Image from "next/image";
import agile from "../public/image/agile.png";
import Button from "./Button";
export default function Agile() {
  return (
    <>
      <section className="px-6 flex flex-col gap-5 bg-white-text py-24 xl:max-w-3/4 xl:px-[10%] xl:py-40 m-auto xl:flex xl:flex-row xl:relative lg:flex lg:flex-row lg:relative">
        <h2 className="font-montBold text-black-primary w-12 xl:w-full md:w-1/2 lg:w-full">
          Agile team <br /> on demand
        </h2>

     
 <div className="flex flex-col-reverse xl:hidden lg:hidden">
 <div className="w-full xl:ml-40 ">
          <p className="w-full text-[16px]  font-mont text-gray-primary xl:text-[17px] xl:w-full">
            By hiring and managing talented people with skills specific to your
            project, we build you a team that{"'"}s accomplished, agile and scalable
            in both directions.
          </p>
          <Button text={"See How it Works"} styles={"mt-5 w-48 px-4 text-[17px]"} />
        </div>
        <div className="py-14 w-3/4 xl:mt-20">
          <Image src={agile} alt="image" className="xl:absolute xl:bottom-0 xl:right-5  " />
        </div>

 </div>

 <div className="w-full xl:ml-40 hidden xl:block lg:block lg:ml-20 z-10">
          <p className="w-3/5  font-mont text-gray-primary xl:text-[17px] xl:w-full lg:w-full">
            By hiring and managing talented people with skills specific to your
            project, we build you a team that{"'"}s accomplished, agile and scalable
            in both directions.
          </p>
          <Button text={"See How it Works"} styles={"mt-5"} />
        </div>
        <div className="py-14 w-3/4 xl:mt-20 hidden xl:block lg:block lg:mt-48">
          <Image src={agile} alt="image" className="xl:absolute xl:bottom-0 xl:right-5  lg:absolute lg:bottom-0 lg:right-5" />
        </div>

 
       
      </section>
    </>
  );
}
