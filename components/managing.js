import Image from 'next/image'
import lapgreen from '../public/image/lapgreen.webp'
export default function Managing(){
    return (
       <>
       <section className='px-6 flex flex-col gap-5 mt-10'>
       <h3 className='text-black-primary font-bold'>Clear Common: <br />  Building control managing app</h3>
       <p className='text-gray-secondary leading-[33px]'>Clear Common manages urgent repairs within the building. Cinnamon refined the interaction system between householders, tenants, and contractors. The app unifies the entire system: maintenance, issue reports, reparations, and payment process.</p>
        <div className='bg-green-300 mt-10'>
        <Image src={lapgreen} alt="laptop" width="10px"/>
        </div>
        <p className='text-xs font-bold text-gray-primary'>PRODUCT DESIGN</p>
        <p className='text-xs font-bold text-gray-primary'>WEB DEVELOPMENT</p>
        
      
       </section>
       </>
    )
}