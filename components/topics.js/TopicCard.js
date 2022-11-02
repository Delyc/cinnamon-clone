
import Image from 'next/image'
export default function TopicCard({topic}){
   
    const {imageUrl, tag, author, date , period, descr} = topic
    return(
        <>
     

        <div className='flex  flex-col gap-5 '>
            <div className='w-full relative h-56'>
                <Image src={imageUrl} alt="chat" fill="layout" className="mt-10 " />
                </div>
                <p className='mt-10 text-black-primary font-bold text-[12px]'>{tag}</p>
                <div className='flex gap-4 items-center text-gray-secondary font-medium text-[16px]'>
                <p className='flex gap-2 items-center text-gray-secondary font-medium text-[16px]'>{author}</p>
                <div className='bg-yellow-500 rounded-full h-2 w-2'/>
                <p className='flex gap-2 items-center text-gray-secondary font-medium text-[16px]'>{date}</p>
                <div className='bg-yellow-500 rounded-full h-2 w-2'/>
                <p className='flex gap-2 items-center text-gray-secondary font-medium text-[16px]'>{period}</p>
                </div>
                
               
                
                <h5 className='text-[24px] text-black-primary font-bold'>{descr}</h5>
            
                

                
               
                
            </div>
           
        </>
    )
}