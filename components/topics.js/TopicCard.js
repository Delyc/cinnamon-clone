
import Image from 'next/image'
export default function TopicCard({topic}){
   
    const {imageUrl, tag, author, date , period, descr} = topic
    return(
        <>
     

        <div className='flex  flex-col w-[20rem] gap-5 xl:w-[30rem]'>
            <div className='w-full relative h-28 xl:h-56'>
                <Image src={imageUrl} alt="chat" fill="layout" className="mt-10 " />
                </div>
                <p className='mt-10 text-black-primary font-montBold text-[12px]'>{tag}</p>
                <div className='flex gap-4 items-center text-gray-secondary  text-[16px]'>
                <p className='flex xl:flex gap-2 hidden  items-center text-gray-secondary font-medium text-[16px]'>{author}</p>
                <div className='bg-yellow-500 rounded-full h-2 w-2'/>
                <p className='flex gap-2 items-center text-gray-secondary font-medium text-[16px]'>{date}</p>
                <div className='bg-yellow-500 rounded-full h-2 w-2'/>
                <p className='flex gap-2 items-center text-gray-secondary font-medium text-[16px]'>{period}</p>
                </div>
                
               
                
                <h5 className='text-[20px] xl:text-[24px] text-black-primary font-montBold'>{descr}</h5>
            
                

                
               
                
            </div>
           
        </>
    )
}