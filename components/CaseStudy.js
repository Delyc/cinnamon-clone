import Image from "next/image";
import profile from "../public/image/profile.png";
import rightArrow from "../public/image/rightArrow.png";
import leftArrow from "../public/image/leftArrow.png";
import next from "../public/image/next.svg";
import Link from "next/link";
import ping from "../public/image/ping.png";
export default function CaseStudy() {
  return (
    <>
      <section className="px-6 py-16 flex flex-col gap-5 xl:px-[10%]">
        <div className="flex xl:flex xl:flex-row xl:justify-between xl:items-center">
          <div className="flex flex-col gap-4 xl:w-3/5 xl:gap-10">
            <h3 className="font-montBold text-black-primary">
              They{"'"}re consistent, and the communication is good.
            </h3>
            <p className="text-gray-primary text-[17px]">
              When I have a deadline, they would work extra hours on the weekend
              and after hours. Cinnamon gives the impression of being a smaller
              team that{"'"}s focused on customers.
            </p>
          </div>
          <div className="hidden xl:block xl:w-1/6">
            <Image src={ping} alt="image" />
          </div>
        </div>
        <div className="xl:flex xl:flex-row xl:gap-5 xl:items-center ">
          <div className="w-1/3 mt-16 xl:w-[5rem] ">
            <Image src={profile} alt="image"/>
          </div>
          <div className="flex flex-col gap-0  xl:mt-16">
            <h5 className="font-montBold text-black-primary">Garin Toren,</h5>
            <p className="text-black-primary mt-0 xl:text-[16px]">CEO, ping</p>
          </div>
        </div>
        <div className="xl:flex xl:justify-between">
          <div className="flex justify-between w-1/2 py-5 xl:w-[8rem]">
            <Image src={leftArrow} alt="image"/>
            <Image src={rightArrow} alt="image"/>
          </div>

          <div className="flex gap-2 items-center">
            <Image src={next} alt="image"/>
            <p>
              <Link
                href="#"
                className="underline text-blue-light font-montBold text-[16px]"
              >
                VIEW CASE STUDY
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
