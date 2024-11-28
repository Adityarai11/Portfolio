import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1 
       whileInView={{opacity:1,y:0}}
       initial= {{opacity:0,y:-100}}
       transition={{duration:1.5}}
      className="my-12 text-center text-4xl font-bold">
        About<span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        {/* Left Column with Image */}
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl shadow-lg"
              src={aboutImg}
              alt="A picture of me"
            />
          </div>
        </motion.div>

        {/* Right Column with ABOUT_TEXT */}
        <motion.div 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:0.5}}
        
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <p className="text-lg leading-relaxed text-neutral-400 text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
