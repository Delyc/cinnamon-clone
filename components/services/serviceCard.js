
import Image from 'next/image'
export default function ServiceCard({service}){
   
    const {imageUrl, title, description } = service
    return(
        <>
     

        <div className='flex  flex-col gap-5 xl:w-2/5 xl:items-start md:w-2/5 lg:w-[18rem]'>
            
                <Image src={imageUrl} alt="chat" width={40} height={40} className="mt-10 " />
            
                <h4 className='text-white font-montBold  lg:text-2xl '>{title}</h4>
                <p className='text-light-gray leading-8 text-[16px] xl:text-[16px] '>{description}</p>

                
               
                
            </div>
           
        </>
    )
}