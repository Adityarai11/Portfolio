import { PROJECTS } from "../constants"
import { animate, motion } from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial= {{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Projects</motion.h2>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <motion.img 
                    whileInView={{opacity:1,x:0}}
                    initial= {{opacity:0,x:-100}}
                    transition={{duration:1.5}}
                    src={project.image} width ={150} height={150} alt={project.title} className="mb-6 rounded"/>                    
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                    <motion.h6
                    whileInView={{opacity:1,x:0}}
                    initial= {{opacity:0,x:100}}
                    transition={{duration:1.5}} 
                    lassName="mb-2 font-semibold text-justify">{project.title}</motion.h6>
                    <motion.p 
                    whileInView={{opacity:1,x:0}}
                    initial= {{opacity:0,x:100}}
                    transition={{duration:1.5}} 
                    className="text-justify mb-4 text-neutral-400">{project.description}</motion.p>
                    {project.technologies.map((tech,index)=>(
                    <motion.span
                    whileInView={{opacity:1,y:0}}
                    initial= {{opacity:0,y:100}}
                    transition={{duration:1.5,delay:1}}   
                    
                    key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800" >{tech}</motion.span>
                ))}   
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Projects