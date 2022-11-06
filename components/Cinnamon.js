import Image from "next/image";
import cin from "../public/image/cin.webp";
import Button from "./Button";
import cinnamon from '../public/image/cinnamon.webp'
export default function Cinnamon() {
  return (
    <>
      <section className="px-6 flex flex-col gap-5  py-24 xl:max-w-3/4 xl:px-[10%] xl:py-40 m-auto xl:flex xl:flex-row xl:relative lg:flex lg:flex-row lg:relative md:gap-10">
  <div className="xl:w-5/6 md:w-2/5 lg:w-5/6">
  <Image src={cinnamon} />

  </div>
       

     

        <div className="w-full xl:ml-40 lg:ml-32">
          <p className="w-full text-[16px]  font-mont text-gray-primary xl:text-[17px] xl:w-full">
          Seize the unique opportunity to participate in a wide range of courses conducted by professionals with an impeccable reputation in the digital industry.
          </p>
          <Button text={"See How it Works"} styles={"mt-5 px-4"} />
        </div>
        <div className="py-14 w-3/4 xl:mt-20 lg:mt-20 hidden xl:block lg:block">
          <Image src={cin} alt="image" className="xl:absolute xl:w-1/3 xl:bottom-0 xl:right-5 lg:absolute lg:w-1/2 lg:bottom-0 lg:right-5 " />
        </div>
      </section>
    </>
  );
}
