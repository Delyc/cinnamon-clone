
import Image from 'next/image'
import Button from '../Button'
export default function ProductCard({product}){
   
    const {imageUrl, title, description, list, background } = product
    return(
        <>
     

        <div className='flex flex-col gap-5 mt-10'>
        <div className='h-36 relative xl:h-[85vh] md:h-96' style={{background}}>
                <Image src={imageUrl} className="transition duration-700 ease-in-out hover:scale-105" alt="chat" fill={true} />
                </div>
                <div className='flex flex-col gap-4 xl:flex xl:flex-row xl:gap-10 lg:flex lg:flex-row lg:gap-10 '>

{

    
list.map((item, index) =>{
return (

<div key={index} className="">
    <p className='text-xs font-montBold text-gray-primary  '>{item}</p>
</div>
 



)
})
}
</div>
            <h3 className='text-black-primary font-montBold xl:w-3/5 lg:w-2/5 whitespace-pre-line '>{title}</h3>
                <p className='text-gray-secondary text-[16px] leading-[33px] xl:w-3/5 font-mont xl:text-[16px] lg:w-3/4'>{description}</p>
                
            
               
                
            </div>
           
        </>
    )
}