
import ServiceCard from './serviceCard'
import {services} from '../dataCollection/services'
import Button from '../Button'

export default function Service(){
    return(
        <>
        <section className="px-6 mt-20 bg-black-bg py-24 xl:px-[10%] xl:flex xl:flex-row lg:flex lg:flex-row lg:justify-between lg:gap-20 xl:justify-between xl:gap-36">
            <h2 className="font-montBold text-white xl:w-2/5  xl:mt-10">Our services</h2>
            <section className='xl:flex xl:flex-col  xl:w-5/6 lg:w-5/6'>
            <section className=' xl:flex xl:flex-row xl:flex-wrap  xl:gap-10  xl:justify-between md:flex md:flex-row md:justify-between md:flex-wrap'>
           {
           services.map((service, index) =>{
            return (
                <>
                
                <ServiceCard key={index} service={service} />
               
                 
           
                </>
               
            )
           })
           }
           </section>
          
                <Button text={"See our Services"} styles={"mt-10 xl:w-60 "}/>
            
                </section>
            
        </section>
        </>
    )
}