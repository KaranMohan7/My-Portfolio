import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex items-center mt-16 justify-center bg-[#F1F1F1]  ">
        <div className="w-[80vw] rounded-3xl h-32 md:h-52  lg:h-96 xl:h-96 bg-black relative bottom-96 md:bottom-56 lg:bottom-12 ">
          <div className="flex items-center justify-around text-white font-semibold">
            <p className="special-font text-[2vw]  relative top-3 md:top-5 lg:top-14 xl:top-16 ">
              All rights Reserved @2024
            </p>

            <div className="flex items-center gap-10 relative  top-3 md:top-5 lg:top-14 xl:top-16 ">
              <a
                href="https://www.linkedin.com/in/karan-mohan-talwar-aaa731295/"
                target="_blank"
                className=" special-font text-[2vw]"
              >
                Linkdin
              </a>
              <a
                href="https://www.instagram.com/__kxaran?igsh=MWkwaWN2YWM2NDZ4cw%3D%3D&utm_source=qr"
                target="_blank"
                className=" special-font text-[2vw]"
              >
                Instagram
              </a>
            </div>
          </div>
          <p className="special-font font-bold text-white text-[15vw] text-center mb-5">
            PORTFOLIO
          </p>
        </div>
       
      </div>
    </>
  );
};

export default Footer;
