import Image from 'next/image'
import inyellow from '../public/image/inyellow.png'
export default function Optimize(){
    return (
       <>
       <section className='px-6 flex flex-col gap-5 mt-10'>
       <h3 className='text-black-primary font-bold'>Corrily:  Optimize prices  < br />to maximize revenue</h3>
       <p className='text-gray-secondary leading-[33px]'>Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign.</p>
        <div className='bg-yellow-400 mt-10'>
        <Image src={inyellow} alt="laptop" width="10px"/>
        </div>
        <p className='text-xs font-bold text-gray-primary'>PRODUCT DESIGN</p>
        <p className='text-xs font-bold text-gray-primary'>QUALITY ASSURANCE</p>
      
       </section>
       </>
    )
}