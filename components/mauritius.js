import Image from 'next/image'
import bluelap from '../public/image/bluelap.webp'
export default function Mauritius(){
    return (
       <>
       <section className='px-6 flex flex-col gap-5 mt-10'>
       <h3 className='text-black-primary font-bold'>Attitude Hotels: <br />  The real feeling of Mauritius</h3>
       <p className='text-gray-secondary leading-[33px]'>Attitude Hotels unveils to their guests not only room accommodations and beautiful interiors but also brings to view a real Mauritian experience. Cinnamon's redesign came to capture that affection and present the hotels in their own authentic light.</p>
        <div className='bg-blue-700 mt-10'>
        <Image src={bluelap} width="10px"/>
        </div>
        <p className='text-xs font-bold text-gray-primary'>PRODUCT DESIGN</p>
        
      
       </section>
       </>
    )
}