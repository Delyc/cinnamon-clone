import Image from 'next/image'
import logo from '../public/image/logo.svg'
import burger from '../public/image/burger.svg'

export default function Header(){
    return (
        <>
        <nav className='px-6  w-full flex justify-between items-center py-5'>

               <div className='w-3/5 '>
               <Image src={logo} alt="logo" width="10px" height="30px"/>
               </div>
                

              
       
            <Image src ={burger} />
         

            


        </nav>
        </>
    )
}