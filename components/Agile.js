import Image from "next/image";
import agile from "../public/image/agile.png";
import Button from "./Button";
export default function Agile() {
  return (
    <>
      <section className="px-6 flex flex-col gap-5 bg-white-text py-24 xl:max-w-3/4 xl:px-[10%] xl:py-40 m-auto xl:flex xl:flex-row xl:relative ">
        <h2 className="font-semibold text-black-primary w-12 xl:w-3/5  xl:font-bold">
          Agile team <br /> on demand
        </h2>

        <div className="py-14 w-3/4 xl:mt-10">
          <Image src={agile} alt="image" className="xl:absolute xl:bottom-0 xl:right-5  " />
        </div>

        <div className="xl:mr-44 ">
          <p className="w-3/5 xl:w-4/5">
            By hiring and managing talented people with skills specific to your
            project, we build you a team that{"'"}s accomplished, agile and scalable
            in both directions.
          </p>
          <Button text={"See How it Works"} styles={"mt-5"} />
        </div>
      </section>
    </>
  );
}
