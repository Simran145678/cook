import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";

export default function Card({
  image,
  name,
  description,
  link,
  duration,
  level,
  rating,
  varient,
}) {
  return (
    <div
      className={`p-2 flex flex-col w-64 border border-gray-400 mx-2 rounded-xl group ${varient}`}
    >
      <div className="w-full h-40">
        <img src={image} className="object-cover h-40 w-full rounded-xl"></img>
      </div>
      <div className=" flex flex-col text-center w-full">
        <h3 className="text-lg font-bold my-1">{name}</h3>
        <p className={`text-gray-500 text-sm my-1 ${varient}`}>{description}</p>
        <div className="w-full mt-4">
          {link ? (
            <button className="w-full mt-2 border border-gray-400 rounded-lg py-2 text-sm hover:underline hover:text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300">
              {link}
            </button>
          ) : (
            <div
              className={`w-full flex justify-center items-center py-4 border-t-1 border-gray-400 ${varient}`}
            >
              <ul className={`flex text-gray-500 ${varient}`}>
                <small className="flex justify-center items-center mr-3">
                  <GoDotFill />
                  {duration}
                </small>
                <small className="flex justify-center items-center mr-3">
                  <GoDotFill />
                  {level}
                </small>
                <small className="flex justify-center items-center mr-3">
                  <FaStar className="mx-1" />
                  {rating}
                </small>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
