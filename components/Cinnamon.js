import Image from "next/image";
import cin from "../public/image/cin.webp";
import Button from "./Button";
import cinnamon from '../public/image/cinnamon.webp'
export default function Cinnamon() {
  return (
    <>
      <section className="px-6 flex flex-col gap-5  py-24 xl:max-w-3/4 xl:px-[10%] xl:py-40 m-auto xl:flex xl:flex-row xl:relative ">
  <div className="xl:w-5/6">
  <Image src={cinnamon} />

  </div>
       

     

        <div className="w-full xl:ml-40 ">
          <p className="w-3/5  font-mont text-gray-primary xl:text-[17px] xl:w-full">
          Seize the unique opportunity to participate in a wide range of courses conducted by professionals with an impeccable reputation in the digital industry.
          </p>
          <Button text={"See How it Works"} styles={"mt-5"} />
        </div>
        <div className="py-14 w-3/4 xl:mt-20">
          <Image src={cin} alt="image" className="xl:absolute xl:bottom-0 xl:right-5  " />
        </div>
      </section>
    </>
  );
}
