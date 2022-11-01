import Image from 'next/image'
import inred from '../public/image/inred.webp'
export default function Mffais(){
    return (
       <>
       <section className='px-6 flex flex-col gap-5 mt-10'>
       <h3 className='text-black-primary font-bold'>Mffais:  <br />   Make ends meet </h3>
       <p className='text-gray-secondary leading-[33px]'>Mffais is a budget-forecast app for Android devices designed and built by Cinnamon. If you get tired of keeping track of bills and paydays, the app will do that for you. Avoid the hustle and sit back.</p>
        <div className='bg-red-500 mt-10'>
        <Image src={inred} width="10px"/>
        </div>
        <p className='text-xs font-bold text-gray-primary'>PRODUCT DESIGN</p>
        <p className='text-xs font-bold text-gray-primary'>MARKETING & GROWTH</p>
      
       </section>
       </>
    )
}