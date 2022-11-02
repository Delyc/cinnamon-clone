
import TopicCard from './TopicCard'
import {topics} from '../dataCollection/topic'
import Button from '../Button'
import next from '../../public/image/next.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function Topic(){
    return(
        <>
        <section className="px-6 mt-20 py-24 xl:px-[10%]    xl:gap-10">
            <h2 className="font-bold text-black-primary xl:w-2/5 xl:mt-10">Stay in the loop on tech topics</h2>
<section className='w-full flex flex-col xl:flex xl:flex-row gap-5'>
           {
           topics.map((topic, index) =>{
            return (
                <>
                
                <TopicCard key={index} topic={topic} />
               
                 
           
                </>
               
            )
           })
           }
           </section>

           <div className='flex gap-2 items-center mt-16'>
           <Image src={next} />
           <p><Link href="#" className='text-blue-light font-bold underline text-[18px]'>VIEW MORE BLOGS</Link></p>
           </div>
           </section>
                
            
             
        </>
    )
}