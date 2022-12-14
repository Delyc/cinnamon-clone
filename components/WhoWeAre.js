import Image from 'next/image'
import who from '../public/image/who-we-are.webp'
import Button from './Button'
export default function WhoWeAre(){
    return(
        <>

        <section className='px-6 flex flex-col gap-10 bg-white-text py-24  xl:px-0 xl:pl-[10%]'>
  <div className='xl:flex xl:justify-between xl:items-center lg:flex lg:justify-between lg:items-center'>
    <div className='flex flex-col gap-5 xl:flex xl:flex-col xl:gap-12 '>
  <h2 className='font-montBold text-black-primary '>Who we are</h2>
        <p className='xl:w-3/4 text-[17px] text-left text-gray-secondary font-medium md:w-3/4'>Meet our international teams made up of 86 innovators, branched into 8 departments, that influence the market throughout 20 different countries.</p>
        <div className='hidden xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2'>

            <div className='text-black-primary font-montBold flex flex-col gap-8'>
            <h5>Product design</h5>
            <h5>Web development</h5>
            <h5>Mobile development</h5>
            <h5>Quality assurance</h5>
            <h5>Marketing</h5>
            </div>

            <div className='text-black-primary font-montBold flex flex-col gap-8'>
                <h5>Project management</h5>
                <h5>Human rrsources</h5>
                <h5>Sales</h5>
                <h5>Fluffy friends</h5>
            </div>
          
        </div>
<Button text={"Read About Us"} styles={"hidden xl:block mt-5 w-3/4 xl:w-1/3 text-[16px] xl:px-1 xl:mt-5"}/>

        </div>
        <div className='w-full mt-10 xl:mt-0  xl:flex xl:justify-end md:w-1/2'>
            
            <Image src={who}  alt="image"/>
        </div>
  </div>
        



<Button text={"Read About Us"} styles={"mt-5 w-3/4 xl:hidden text-[17px] px-4 md:w-1/4 md:px-4"}/>
        </section>

       
        </>
    )
}