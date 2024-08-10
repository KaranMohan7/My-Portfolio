import React from "react";
import pic1 from "../assets/Pictures/pic1.png";
import pic2 from "../assets/Pictures/pic2.png";
import Contact from "./Contact";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <div className="w-full bg-[#CDEA68] border-t-2 border-[#6d7f2c] min-h-screen mt-3">
        <div className="py-5">
          <h1 className="text-center font-bold text-[4vw]">My Projects</h1>
        </div>
        <div
          data-scroll
          data-scroll-section
          className="flex flex-wrap items-center justify-evenly gap-5 "
        >
          <div //did some parallex like effect here
            data-scroll
            data-scroll-speed=".3"
            className="w-[400px] h-[300px] md:w-[500px] md:h-[400px] lg:w-[700px] lg:h-[500px] rounded-xl bg-gradient-to-r from-cyan-100 to-zinc-700 relative"
          >
            <img
              className="absolute top-20 lg:top-28 px-5 lg:px-10  mix-blend-overlay"
              src={pic2}
            ></img>
            <div className="flex justify-around items-center py-5">
              <a href="https://fitnessgymexercises.netlify.app/">
                <motion.button
                  whileHover={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                  className="font-semibold border border-black p-1 px-7 rounded-full font-newfont"
                >
                  Fitness Exercises App
                </motion.button>
              </a>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed=".3"
            className="   w-[400px] h-[300px]  md:w-[500px] md:h-[400px]  lg:w-[700px] lg:h-[500px] rounded-xl  bg-black relative "
          >
            <img
              className="absolute top-20 lg:top-28 px-5 lg:px-10 "
              src={pic1}
            ></img>
            <div className="flex justify-around items-center flex-wrap py-5">
              <a href="https://youtubelikeclone.netlify.app/">
                {" "}
                <motion.button
                  whileHover={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                  className="font-newfont font-semibold border border-white text-white p-1 px-7 rounded-full"
                >
                  Youtube Clone
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Projects;
