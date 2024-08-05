import React from "react";

export default function HeroBanner({ children, para, link, img, varient }) {
  return (
    <>
      <div className="container flex flex-col-reverse md:flex-row p-10">
        <div className=" flex flex-col  lg:p-16 justify-center">
          {children}
          <p className="text-md text-gray-500 mb-6">{para}</p>
          <div>
            <button className=" bg-orange-500 text-white text-sm  border-xl py-2 px-3 rounded-lg hover:underline ">
              {link}
            </button>
          </div>
        </div>
        <div className="lg:w-3/4 p-10 ">
          <img src={img} className={varient}></img>
        </div>
      </div>
    </>
  );
}
