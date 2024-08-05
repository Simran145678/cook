import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Tile(props) {
  return (
    <div className="w-64 h-64 relative rounded-xl mx-2 cursor-pointer">
      <img
        src=""
        className="bg-gray-300 object-cover w-64 h-64 rounded-xl"
        alt=""
      ></img>
      <div
        className="absolute flex rounded-xl items-end justify-center text-white z-40 top-0 left-0 w-64 h-64 opacity-0
       p-2 bg-gradient-to-b from-transparent to-black-default hover:opacity-100 transition-all duration-500"
      >
        <p>
          Thai cuisine <FaArrowRightLong className="inline ml-2" />{" "}
        </p>
      </div>
    </div>
  );
}
