

import { offices } from "../dataCollection/offices"
import OfficeCard from "./OfficeCard"
import Image from 'next/image'
import leftArrow from '../../public/image/leftArrow.png'
import rightArrow from '../../public/image/rightArrow.png'
export default function Office(){
    return(
        <>
        <section className="px-6  xl:px-0 xl:pl-[10%]">
            <h2 className="font-montBold xl:font-bold">Our offices</h2>
            <div className=" flex  scrollbar-hide overflow-x-scroll gap-5 xl:overflow-x-scroll md:gap-10">
           {
           offices.map((office, index) =>{
            return (
                <>
                <section className="w-4/5  ">
                <OfficeCard key={index} office={office} />
                </section>
           
           
                </>
               
            )
           })
           }

           
               
               </div>

               <div className="xl:flex hidden  gap-16 mt-16">
            <Image src={leftArrow} alt="image" className="cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2"/>
            <Image src={rightArrow} alt="image" className="cursor-pointer transition duration-300 ease-in-out hover:-translate-y-2"/>
           </div>
            

           
            
        </section>
        </>
    )
}