import Image from "next/image";
import Button from "../Button";
export default function OfficeCard({ office }) {
  const { imageUrl, officeName, descr } = office;
  return (
    <>

    
      <div className="flex flex-col  gap-5 mt-10 xl:gap-10 xl:w-[35rem]">
        <div className="relative h-36 xl:h-96 xl:w-full">
          <Image src={imageUrl} alt="chat" fill="layout"  />
        </div>

        <div className="flex gap-4  xl:gap-0 ">
          <svg
            className=" mt-4 w-12  flex justify-start -ml-4 xl:mt-2"
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <div className="">
            <h5 className="col-span-5  text-black-primary font-bold">
              {officeName}
            </h5>
            <p className="col-start-2 col-span-5 text-gray-secondary leading-[33px] font-medium">
              {descr}
            </p>
          </div>
   </div>
      </div>
    </>
  );
}
