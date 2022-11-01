import Image from 'next/image'
import tabletyellow from '../public/image/tabletyellow.png'
export default function Barnahus(){
    return (
       <>
       <section className='px-6 flex flex-col gap-5 mt-10'>
       <h3 className='text-black-primary font-bold'>Barnahus: <br />  Protecting Europe's children</h3>
       <p className='text-gray-secondary leading-[33px]'>Barnahus, the child protection hub offers accommodation and safety to the victims and witnesses of child abuse. Cinnamon designed, developed, and is now maintaining the website funded by the European Union and carries out vital work for the kids.</p>
        <div className='bg-yellow-300 mt-10'>
        <Image src={tabletyellow} alt="tablet" width="10px"/>
        </div>
        <p className='text-xs font-bold text-gray-primary'>PERFOMANCE MARKETING</p>

        
      
       </section>
       </>
    )
}