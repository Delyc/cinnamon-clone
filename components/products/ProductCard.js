
import Image from 'next/image'
import Button from '../Button'
export default function ProductCard({product}){
   
    const {imageUrl, title, description, list, background } = product
    return(
        <>
     

        <div className='flex flex-col gap-5 mt-10'>
        <div className='h-36 relative xl:h-[75vh]' style={{background}}>
                <Image src={imageUrl} alt="chat" fill={true} />
                </div>
                <div className=' xl:flex xl:flex-row gap-10 '>

{

    
list.map((item, index) =>{
return (

<div key={index} className="">
    <p className='text-xs font-bold text-gray-primary  '>{item}</p>
</div>
 



)
})
}
</div>
            <h3 className='text-black-primary font-bold xl:w-2/5'>{title}</h3>
                <p className='text-gray-secondary leading-[33px]'>{description}</p>
                
            
               
                
            </div>
           
        </>
    )
}