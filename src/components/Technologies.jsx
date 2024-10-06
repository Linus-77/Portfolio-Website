import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { SiPython } from 'react-icons/si'; // Import Python icon
import solidworks from "../assets/solidworks.svg"; // Import SolidWorks SVG
import ansys from "../assets/ansys.svg"; // Import ANSYS SVG
import matlab from "../assets/matlab.svg"; // Import MATLAB SVG
import {motion} from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <motion.div
    whileInView={{ opacity: 1, x: 0}}
    initial={{ opacity: 0, x:-100}}
    transition={{ duration: 1.5}}
    
    className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
      whileInView={{ opacity: 1, x: 0}}
      initial={{ opacity: 0, x: -100}}
      transition={{ duration: 1.5}}
      
      className="flex flex-wrap items-center justify-center gap-4">
        {/* SolidWorks Icon */}
        <motion.div
        variants ={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={solidworks} alt="SolidWorks" className="w-24 h-24" /> {/* Adjusted size */}
        </motion.div>

        {/* MATLAB Icon */}
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={matlab} alt="MATLAB" className="w-24 h-24" /> {/* Adjusted size */}
        </motion.div>

        {/* ANSYS Icon with shadow */}
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl bg-white border-4 border-neutral-800 p-4 shadow-lg"> {/* Added shadow */}
          <img src={ansys} alt="ANSYS" className="w-24 h-24" /> {/* Adjusted size */}
        </motion.div>

        {/* Python Icon */}
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-blue-500" /> {/* Python Icon */}
        </motion.div>

        {/* React Icon */}
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* MongoDB Icon */}
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Technologies;
