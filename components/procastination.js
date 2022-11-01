import Image from 'next/image'
import phoneblue from '../public/image/phoneblue.webp'
export default function Procrastination(){
    return (
       <>
       <section className='px-6 flex flex-col gap-5 mt-10'>
       <h3 className='text-black-primary font-bold'>Stake Something: <br />  End procrastination</h3>
       <p className='text-gray-secondary leading-[33px]'>Stake Something challenges users to risk their own money by either fulfilling their goals and keeping their stakes, or transferring that money to a charity if they fail. Cinnamon constructed an intuitive flow accompanied by playful and inviting illustrations.</p>
        <div className='bg-blue-700 mt-10'>
        <Image src={phoneblue} width="10px"/>
        </div>
        <p className='text-xs font-bold text-gray-primary'>PRODUCT DESIGN</p>
        <p className='text-xs font-bold text-gray-primary'>MOBILE DEVELOPMENT</p>
        <p className='text-xs font-bold text-gray-primary'>QUALITY ASSURANCE</p>
      
       </section>
       </>
    )
}