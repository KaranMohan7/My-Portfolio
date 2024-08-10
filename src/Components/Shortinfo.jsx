import React from "react";

const Shortinfo = () => {
  return (
    <div  className="w-full py-16 rounded-t-3xl bg-[#CDEA68] -mb-3 ">
      <h1 className=" font-newfont text-[4vw] leading-tight p-2 pl-5">
        I'm from <span className="font-newfont underline">New Delhi</span>,
        India . I am a Frontend Developer who Strongly Believes in
        <span className="font-bold font-newfont">
          {" "}
          "The details are not the details.{" "}
          <span className="underline font-newfont">They make the design."</span>
        </span>
      </h1>
    </div>
  );
};

export default Shortinfo;
