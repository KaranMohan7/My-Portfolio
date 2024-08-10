import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="w-full h-[75vh] lg:h-[80vh] xl:[h-82vh] bg-[#F1F1F1]  ">
        <h1 className=" flex items-center gap-3 text-[4vw] font-bold p-14 lg:p-28">
          Contact <FiArrowDownRight style={{ fontSize: "3.5vw" }} />
        </h1>
        <h1 className="special-font font-semibold text-[6vw] px-7 lg:px-28 relative  bottom-9  lg:bottom-20">
          karanmohan44@gmail.com
        </h1>
        <h1 className="special-font font-semibold text-[5vw] px-7 lg:px-28 relative bottom-9 lg:bottom-28">
          (+91) 98 73 20 63 22
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
