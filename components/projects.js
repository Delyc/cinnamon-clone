import chat from '../public/image/chat.png'
import ball from '../public/image/ball.svg'
import Image from 'next/image'
import ProjectsCard from './projectsCard'

export default function Projects(){
    return(
        <>
        <section className="px-6 mt-20">
            <h2 className="font-bold text-black-primary">More about our projects</h2>
           
           <ProjectsCard />
           <ProjectsCard />
            

           
            
        </section>
        </>
    )
}