import React from "react";
import { GoArrowDown } from "react-icons/go";
import {  motion } from "framer-motion";
import mypic from '../assets/Pictures/Minepic.jpg'
import Contact from "../Components/Contact";




const About = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2, ease: [0.65, 0, 0.35, 1]}} className="w-full min-h-screen">
      <h1 className="font-newfont font-medium text-[6vw] p-10 lg:pt-14 lg:px-24 ">
        About
      </h1>
      <h1 className="fon-newfont font-semibold text-[5vw] p-12 lg:px-52 leading-tight">
        I am a Developer, Gamer and Editor who loves the world of Digital.
      </h1>
      <div className="flex justify-center items-center gap-3 lg:text-xl relative bottom-6 ">
      <motion.p initial={{opacity:0}} animate={{opacity: 1}} transition={{ease: [0.32, 0, 0.67, 0],duration: 2}} >Scroll</motion.p>
        <motion.div initial={{y:0,opacity:0}} animate={{y:20,opacity:1}} transition={{ease: [0.32, 0, 0.67, 0],duration: 3 ,repeat: Infinity}}><GoArrowDown /></motion.div>
      </div>
      <div className="w-full flex items-center justify-center gap-10 flex-wrap lg:flex-nowrap xl:flex-nowrap ">
        <img data-scroll  className="lg:w-[33vw] lg:h-[44vw] rounded-lg " src={mypic}/>
        <h1 className=" text-center lg:w-[52%] text-[4.5vw] leading-tight font-semibold ">Loves to change the Looks of Websites, Dedicated to making the web look and feel awesome. </h1>
      </div>
    <Contact/>
    </motion.div>
  );
};

export default About;
