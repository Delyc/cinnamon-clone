import Image from 'next/image'
import yellowphone from '../public/image/yellowphone.webp'
export default function Rooms(){
    return (
       <>
       <section className='px-6 flex flex-col gap-5 mt-10'>
       <h3 className='text-black-primary font-bold'>Play&Go:  <br />   Tidy rooms, responsible kids </h3>
       <p className='text-gray-secondary leading-[33px]'>Play&Go is a revolutionary toy storage bag that encourages kids to tidy up after playing. Cinnamon created an e-commerce website and increased conversion rates thanks to a design overhaul that gives the website the look and feel of an online shop.</p>
        <div className='bg-yellow-300 mt-10'>
        <Image src={yellowphone} width="10px"/>
        </div>
        <p className='text-xs font-bold text-gray-primary'>PRODUCT DESIGN</p>
        <p className='text-xs font-bold text-gray-primary'>MOBILE DEVELOPMENT</p>
        <p className='text-xs font-bold text-gray-primary'>QUALITY ASSURANCE</p>
        <p className='text-xs font-bold text-gray-primary'>MARKETING & GROWTH</p>
      
       </section>
       </>
    )
}