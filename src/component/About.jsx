import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <h1 className="my-12 text-center text-4xl font-bold">
        About<span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        {/* Left Column with Image */}
        <motion.div 
        
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl shadow-lg"
              src={aboutImg}
              alt="A picture of me"
            />
          </div>
        </div>

        {/* Right Column with ABOUT_TEXT */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <p className="text-lg leading-relaxed text-neutral-400 text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
