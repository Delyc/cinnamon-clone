import TopicCard from "./TopicCard";
import { topics } from "../dataCollection/topic";
import next from "../../public/image/next.svg";
import Image from "next/image";
import Link from "next/link";
export default function Topic() {
  return (
    <>
      <section className="px-6 mt-20 py-5 xl:px-[10%]    xl:gap-10">
        <h2 className="font-montBold text-black-primary xl:w-2/5 xl:mt-10 md:w-1/2">
          Stay in the loop on tech topics
        </h2>
        <section className=" flex w-full  scrollbar-hide overflow-x-scroll gap-10 xl:flex xl:flex-row xl:gap-5">
          {topics.map((topic, index) => {
            return (
              <>
                <TopicCard key={index} topic={topic} />
              </>
            );
          })}
        </section>

        <div className="flex gap-2 items-center mt-16">
          <Image src={next} alt="image" />
          <p>
            <Link
              href="#"
              className="text-blue-light font-montBold underline text-[18px] xl:text-[17px]"
            >
              VIEW MORE BLOGS
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
