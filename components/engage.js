import Image from 'next/image'
import lapphone from '../public/image/lapphone.webp'
export default function Engage(){
    return (
       <>
       <section className='px-6 flex flex-col gap-5 mt-10'>
       <h3 className='text-black-primary font-bold'>Fiona: Engage & Decide</h3>
       <p className='text-gray-secondary leading-[33px]'>Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.</p>
        <div className='bg-green-300 mt-10'>
        <Image src={lapphone} width="10px"/>
        </div>
        <p className='text-xs font-bold text-gray-primary'>PRODUCT DESIGN</p>
        <p className='text-xs font-bold text-gray-primary'>WEB DEVELOPMENT</p>
        <p className='text-xs font-bold text-gray-primary'>QUALITY ASSURANCE</p>
      
       </section>
       </>
    )
}