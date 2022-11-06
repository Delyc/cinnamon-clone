import Button from "./Button";
import Image from "next/image";
import arrow from "../public/image/arrow.png";
export default function Career() {
  return (
    <>
      <section className="px-6  bg-black-bg py-24 flex flex-col gap-6 xl:px-[10%] xl:flex xl:flex-row xl:justify-between xl:py-40 lg:flex lg:flex-row lg:justify-between">
        <div className="xl:w-1/2 flex flex-col gap-5 xl:gap-10 lg:w-2/5">
          <h2 className="font-montBold text-white w-3/5 xl:w-full">
            We{"'"}re growing
          </h2>
          <p className="text-light-gray w-full text-[16px] xl:w-4/5 xl:text-[16px] lg:leading-[30px]">
            Jump on board with Cinnamon and get the privilege of working on
            challenging projects for leading global companies! Make the world a
            better, more connected place.
          </p>
          <Button text={"See All Positions"} styles="xl:w-2/5 w-3/5 px-0 md:w-1/3 lg:w-1/2" />
        </div>

        <div className="flex flex-col gap-5 mt-10 xl:w-2/5 xl:mt-0 lg:w-1/2">
          <div className="flex justify-between items-center border-b py-6">
            <p className="text-[24px]  text-white w-1/2 font-montBold">
              Android Developer
            </p>
            <div className="w-1/5 md:flex md:justify-end">
              <Image src={arrow} height={50} alt="arrow" className="cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2 md:w-2/5"/>
            </div>
          </div>
          <div className="flex justify-between items-center border-b py-6">
            <p className="text-[24px] text-white w-1/2 font-montBold">
              Android Developer
            </p>
            <div className="w-1/5 md:flex md:justify-end">
              <Image src={arrow} height={50} alt="arrow" className="cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2 md:w-2/5"/>
            </div>
          </div>
          <div className="flex justify-between items-center border-b py-6">
            <p className="text-[24px] text-white w-1/2 font-montBold">
              Android Developer
            </p>
            <div className="w-1/5 md:flex md:justify-end">
              <Image src={arrow} height={50} alt="arrow" className="cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2 md:w-2/5" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
