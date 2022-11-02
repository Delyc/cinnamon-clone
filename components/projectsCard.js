import chat from "../public/image/chatIm.png";
import ball from "../public/image/ball.svg";
import Image from "next/image";
export default function ProjectsCard({ project }) {
  const { imageUrl, content } = project;
  return (
    <>
      <Image
        src={imageUrl}
        alt="chat"
        width={100}
        height={100}
        className="mt-10"
      />

      <div className="grid grid-cols-6 mt-10 gap-4">
        <div className="flex items-center">
          {/* <Image src={ball} alt="ball" width="100%"/> */}
        </div>

        <div className="col-span-5 ">
          {/* <h4 className='text-black-primary font-bold'>Cinnamon on Dribbble</h4> */}
        </div>

        <div className="col-span-5 col-start-2">
          <p className="text-gray-secondary ml-auto">{content}</p>
        </div>
      </div>
    </>
  );
}
