import Image from "next/image";
import logo from "../public/image/logo.svg";
import logowhite from "../public/image/logowhite.svg";
import burger from "../public/image/burger.svg";
import burgerWhite from "../public/image/burgerWhite.svg";
import Link from "next/link";
import Button from "./Button";
import logoBlack from "../public/image/logoBlack.svg";
import play from "../public/image/play.png";
import playBlue from "../public/image/playBlue.png";
import { useState, useEffect } from "react";
export default function Header() {
  const [pageScrolled, setpageScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setpageScrolled(true) : setpageScrolled(false);
    }
  };
  return (
    <>
      <nav
        className={`px-6  w-full flex justify-between xl:text-white-text items-center py-5 xl:px-[10%]  xl:bg-black-bg fixed z-50 ${
          pageScrolled
            ? "xl:text-black-primary bg-white xl:bg-white"
            : "xl:bg-black-bg"
        }`}
      >
        <div className="w-3/5 xl:hidden">
          {pageScrolled ? (
            <Image src={logoBlack} alt="logo" width="10px" height="30px" />
          ) : (
            <Image src={logowhite} alt="logo" width="10px" height="30px" />
          )}
        </div>
        <div className="w-1/6 hidden xl:block ">
          {pageScrolled ? (
            <Image src={logoBlack} alt="logo" width="10px" height="30px" />
          ) : (
            <Image src={logowhite} alt="logo" width="10px" height="30px" />
          )}
        </div>

        <ul className="hidden  xl:flex xl:gap-8 xl:items-center xl:font-bold">
          <li className="">
            <Link href="#" className="relative mb-1 w-full flex w-fit h-[3rem] hover:text-blue-light overflow-hidden  duration-300 ease-in-out group justify-center items-center cursor-pointer">
              Projects
              <div className="absolute   transition duration-300  ease-in-out  z-[10000] group-hover:-translate-x-0 group-hover:block -translate-x-20 bottom-0.5 w-1.5 h-1.5 bg-blue-600  rounded-full" />
            </Link>
          </li>
          <li>
          <Link href="#" className="relative mb-1 w-full flex w-fit h-[3rem] hover:text-blue-light overflow-hidden  duration-300 ease-in-out group justify-center items-center cursor-pointer">
              Services
              <div className="absolute   transition duration-300  ease-in-out  z-[10000] group-hover:-translate-x-0 group-hover:block -translate-x-20 bottom-0.5 w-1.5 h-1.5 bg-blue-600  rounded-full" />
            </Link>
          </li>
          <li>
          <Link href="#" className="relative mb-1 w-full flex w-fit h-[3rem] hover:text-blue-light overflow-hidden  duration-300 ease-in-out group justify-center items-center cursor-pointer">
              About Us
              <div className="absolute   transition duration-300  ease-in-out  z-[10000] group-hover:-translate-x-0 group-hover:block -translate-x-20 bottom-0.5 w-1.5 h-1.5 bg-blue-600  rounded-full" />
            </Link>
          </li>
          <li>
          <Link href="#" className="relative mb-1 w-full flex w-fit h-[3rem] hover:text-blue-light overflow-hidden  duration-300 ease-in-out group justify-center items-center cursor-pointer">
              Careers
              <div className="absolute   transition duration-300  ease-in-out  z-[10000] group-hover:-translate-x-0 group-hover:block -translate-x-20 bottom-0.5 w-1.5 h-1.5 bg-blue-600  rounded-full" />
            </Link>
          </li>
          <li>
          <Link href="#" className="relative mb-1 w-full flex w-fit h-[3rem] hover:text-blue-light overflow-hidden  duration-300 ease-in-out group justify-center items-center cursor-pointer">
              Blog
              <div className="absolute   transition duration-300  ease-in-out  z-[10000] group-hover:-translate-x-0 group-hover:block -translate-x-20 bottom-0.5 w-1.5 h-1.5 bg-blue-600  rounded-full" />
            </Link>
          </li>

          {pageScrolled ? (
            <div className="border border-blue-light rounded-full w-10 h-10  flex justify-center items-center ">
              <Image src={playBlue} alt="play" width={20} height={20} />
            </div>
          ) : (
            <div className="border   rounded-full w-10 h-10  flex justify-center items-center ">
              <Image src={play} alt="play" width={20} height={20} />
            </div>
          )}

          <Button text={"Contact Us"} styles={"hidden xl:block"} />
        </ul>

        {pageScrolled ? (
          <Image src={burger} alt="image" className="xl:hidden" />
        ) : (
          <Image src={burgerWhite} alt="image" className="xl:hidden" />
        )}
      </nav>
    </>
  );
}
