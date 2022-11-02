import Image from "next/image";
import lapred from "../public/image/lapred.png";
export default function Community() {
  return (
    <>
      <section className="px-6 flex flex-col gap-5 mt-10">
        <h3 className="text-black-primary font-bold">
          Hello Bear: <br /> A community that cares
        </h3>
        <p className="text-gray-secondary leading-[33px]">
          Hello Bear is an app that provides a safe environment for individuals
          who share problems and support each other. Using thoughtful design and
          clever functionality, Cinnamon created a space that's both comforting
          and subtly playful.
        </p>
        <div className="bg-red-500 mt-10">
          <Image src={lapred} alt="laptop" width="10px" />
        </div>
        <p className="text-xs font-bold text-gray-primary">PRODUCT DESIGN</p>
      </section>
    </>
  );
}
