import Image from 'next/image'
import logo from '../public/image/logo.svg'
import lap from '../public/image/lap.webp'
import Header from './header'
export default function Solutions(){
    return (
       <>
       <Header />
       <section className='px-6 flex flex-col gap-5'>
       <h1 className='text-black-primary font-bold'>Software solutions to shout about.</h1>
       <p className='text-gray-secondary leading-[33px]'>We think of Cinnamon as the secret ingredient in our clients’ success. Our teams emerge as their outsourced tech force and bring game-changing software solutions to market.</p>
        <div className='bg-violet-900 mt-20'>
        <Image src={lap} alt="laptop"/>
        </div>
        <p className='text-xs font-bold text-gray-primary'>PRODUCT DESIGN</p>
        <p className='text-xs font-bold text-gray-primary'>WEB DEVELOPMENT</p>
      
       </section>
       </>
    )
}