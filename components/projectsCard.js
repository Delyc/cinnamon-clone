import chat from '../public/image/chat.png'
import ball from '../public/image/ball.svg'
import Image from 'next/image'
export default function ProjectsCard(){
    return(
        <>
         <Image src={chat} alt="chat" className="mt-10" />

        <div className='grid grid-cols-6 mt-10 gap-4'>
                <div className='flex items-center'>
                <Image src={ball} alt="ball" width="100%"/>
                </div>
                
                <div className='col-span-5 '>
                <h4 className='text-black-primary font-bold'>Cinnamon on Dribbble</h4>

                </div>

                <div className='col-span-5 col-start-2'>
                <p className='text-gray-secondary ml-auto'>Take a look at some of our favorite projects.</p>
                </div>
                
            </div>
        </>
    )
}