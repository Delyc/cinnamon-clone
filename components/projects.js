import chat from '../public/image/chat.png'
import ball from '../public/image/ball.svg'
import Image from 'next/image'
import ProjectsCard from './projectsCard'

// import { projects } from './dataCollection'


export default function Projects(){
    return(
        <>
        <section className="px-6 mt-20">
            {/* <h2 className="font-bold text-black-primary">More about our projects</h2>
           {
           projects.map((project, index) =>{
            return (
                <ProjectsCard key={index} project={project} />
            )
           })
           }
             */}

           
            
        </section>
        </>
    )
}