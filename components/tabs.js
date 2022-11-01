import Image from 'next/image'
import phoneyellow from '../public/image/phoneyellow.webp'
export default function Tabs(){
    return (
       <>
       <section className='px-6 flex flex-col gap-5 mt-10'>
       <h3 className='text-black-primary font-bold'>Ukulele: <br /> The largest ukulele tabs archive </h3>
       <p className='text-gray-secondary leading-[33px]'>Ukulele is the number one ukulele community, where players of any level can
find the most complete tabs and chords. Cinnamon offered a complete
platform redesign including expansions and new features, focusing on keeping the user longer on the website.</p>
        <div className='bg-yellow-400 mt-10'>
        <Image src={phoneyellow} width="10px"/>
        </div>
        <p className='text-xs font-bold text-gray-primary'>PRODUCT DESIGN</p>
        <p className='text-xs font-bold text-gray-primary'>MOBILE DEVELOPMENT</p>
        <p className='text-xs font-bold text-gray-primary'>WEB DEVELOPMENT</p>
        <p className='text-xs font-bold text-gray-primary'>QUALITY ASSURANCE</p>
        <p className='text-xs font-bold text-gray-primary'>MARKETING & GROWTH</p>
      
       </section>
       </>
    )
}