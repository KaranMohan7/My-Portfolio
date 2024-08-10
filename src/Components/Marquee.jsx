import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      className="w-full bg-[#004D43] overflow-hidden rounded-t-2xl py-24 "
    >
      
      <div className="border-t-2 border-zinc-500 flex items-center whitespace-nowrap -mb-8 ">
        {[, "KARAN MOHAN TALWAR ", "KARAN MOHAN TALWAR"].map((item, index) => (
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
            key={index}
            className="text-[18vw] pt-2 text-white font-extrabold leading-none pl-11 "
          >
            {item}
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
