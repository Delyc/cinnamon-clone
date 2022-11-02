

import { offices } from "../dataCollection/offices"
import OfficeCard from "./OfficeCard"
import Image from 'next/image'
import leftArrow from '../../public/image/leftArrow.png'
import rightArrow from '../../public/image/rightArrow.png'
export default function Office(){
    return(
        <>
        <section className="px-6  xl:px-0 xl:pl-[10%]">
            <h1 className="font-semibold xl:font-bold">Our offices</h1>
            <div className=" flex  scrollbar-hide overflow-x-scroll gap-5 xl:overflow-x-scroll">
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

               <div className="flex  gap-16 mt-16">
            <Image src={leftArrow} />
            <Image src={rightArrow} />
           </div>
            

           
            
        </section>
        </>
    )
}