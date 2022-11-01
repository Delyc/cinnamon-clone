import Image from 'next/image'
import phonegreen from '../public/image/phonegreen.webp'
export default function Ping(){
    return (
       <>
       <section className='px-6 flex flex-col gap-5 mt-10'>
       <h3 className='text-black-primary font-bold'>ping: <br /> Listen to messages on the move</h3>
       <p className='text-gray-secondary leading-[33px]'>ping means breaking new ground in reading messages out loud when driving. Among other features, Cinnamon developed the “drive-safe” mode, where users enjoy an eyes-free experience while receiving emails, texts, and messages from various platforms.</p>
        <div className='bg-green-300 mt-10'>
        <Image src={phonegreen} width="10px"/>
        </div>
        <p className='text-xs font-bold text-gray-primary'>PRODUCT DESIGN</p>
        <p className='text-xs font-bold text-gray-primary'>WEB DEVELOPMENT</p>
        <p className='text-xs font-bold text-gray-primary'>QUALITY ASSURANCE</p>
      
       </section>
       </>
    )
}