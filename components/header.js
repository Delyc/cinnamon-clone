import Image from 'next/image'
import logo from '../public/image/logo.svg'
import logowhite from '../public/image/logowhite.svg'
import burger from '../public/image/burger.svg'
import Link from 'next/link'
import Button from './Button'
import play from '../public/image/play.png'
export default function Header(){
    return (
        <>
        <nav className='px-6  w-full flex justify-between items-center py-5 xl:px-[10%]  xl:bg-black-bg'>

               <div className='w-3/5 xl:hidden'>
               <Image src={logo} alt="logo" width="10px" height="30px"/>
               </div>
               <div className='w-1/6 hidden xl:block '>
               <Image src={logowhite} alt="logo" width="10px" height="30px"/>
               </div>

               <ul className='hidden xl:text-white-text xl:flex xl:gap-8 xl:items-center xl:font-bold'>
                <li><Link href="#">Projects</Link></li>
                <li><Link href="#">Services</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Careers</Link></li>
                <li><Link href="#">Blog</Link></li>
                 <div className='border  rounded-full w-10 h-10  flex justify-center items-center '>
                    <Image src={play} alt="play" width={20} height={20}/>
                 </div>
                <Button text={"Contact Us"} styles={"hidden"}/>

               </ul>
                

              
       
            <Image src ={burger} alt="image" className="xl:hidden"/>
         

            


        </nav>
        </>
    )
}