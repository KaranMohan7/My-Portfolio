import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { Rotate as Hamburger, Rotate } from "hamburger-react";
import { motion } from "framer-motion";

const useBreakpoint = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  return { isMobile, isTablet, isDesktop };
};

const Navbar = () => {
  const url =
    "https://drive.google.com/file/d/1ILiEvAK7AhRqIur65NAe9-9fF1uYAvtH/view?usp=sharing";
  const [toggle, settoggle] = useState(false);
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const location = useLocation();

  const handleclick = () => {
    settoggle(false);
    if (location.pathname === "/") {
      if (isMobile) {
        window.scrollTo({ top: 700, behavior: "smooth" });
      } else if (isTablet) {
        window.scrollTo({ top: 1000, behavior: "smooth" });
      } else if (isDesktop) {
        window.scrollTo({ top: 1250, behavior: "smooth" });
      }
    } else {
      return null;
    }
  };
  const handleclicktwo = () => {
    settoggle(false);
    if (location.pathname === "/") {
      if (isMobile) {
        window.scrollTo({ top: 1200, behavior: "smooth" });
      } else if (isTablet) {
        window.scrollTo({ top: 1600, behavior: "smooth" });
      } else if (isDesktop) {
        window.scrollTo({ top: 2100, behavior: "smooth" });
      }
    } else if (location.pathname === "/about") {
      if (isMobile) {
        window.scrollTo({ top: 900, behavior: "smooth" });
      } else if (isTablet) {
        window.scrollTo({ top: 1000, behavior: "smooth" });
      } else if (isDesktop) {
        window.scrollTo({ top: 1300, behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <div className=" w-full flex items-center justify-between h-16 px-10 lg:px-24 xl:px-28 ">
        <div>
          <Link to={"/"}>
            <h1 className="text-l lg:text-xl">Karan Mohan Talwar</h1>
          </Link>
        </div>
        <div className="capitalize font-semibold hidden items-center gap-10 md:hidden lg:flex xl:flex">
          <Link
            to={location.pathname === "/about" && `${url}`}
            className="cursor-pointer"
            onClick={handleclick}
          >
            {location.pathname === "/about" ? "Resume" : "Projects"}
          </Link>
          <Link to={"/about"}>About</Link>
          <a className="cursor-pointer" onClick={handleclicktwo}>
            contact
          </a>
          <a
            href="https://www.linkedin.com/in/karan-mohan-talwar-aaa731295/"
            target="_blank"
            className=" cursor-pointer text-blue-600 font-semibold"
          >
            linkdin
          </a>
        </div>

        <div className="text-sm mt-[2px] sm:block lg:hidden xl:hidden  ">
          {<Rotate size={17} toggled={toggle} toggle={settoggle} />}
        </div>
      </div>

      <motion.div
        initial={toggle ? { x: 700 } : { x: 0 }}
        animate={toggle ? { x: 0 } : { x: 700 }}
        transition={{ duration: 0.8, ease: [0.5, 1, 0.89, 1] }}
        className={
          toggle
            ? " h-full backdrop-blur-sm fixed z-20 right-0 flex flex-col gap-8 items-center px-10 py-10 mt-16 rounded-lg "
            : "hidden "
        }
      >
        <Link
          className="cursor-pointer w-full text-end text-2xl"
          onClick={handleclick}
          to={location.pathname === "/about" && `${url}`}
        >
          {location.pathname === "/about" ? "Resume" : "Projects"}
        </Link>
        <Link to={"/about"}>
          <p className="w-full text-end text-2xl">about</p>
        </Link>
        <a
          className="cursor-pointer w-full text-end text-2xl"
          onClick={handleclicktwo}
        >
          contact
        </a>
        <a
          href="https://www.linkedin.com/in/karan-mohan-talwar-aaa731295/"
          target="_blank"
          className=" cursor-pointer text-blue-600 font-extrabold w-full text-end text-2xl"
        >
          linkdin
        </a>
      </motion.div>
    </>
  );
};

export default Navbar;
