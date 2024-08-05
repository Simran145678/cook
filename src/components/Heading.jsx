import React from "react";

export default function Heading(props) {
  return (
    <div className="flex flex-col justify-center items-center text-center container w-full p-6 md:w-1/2 ">
      <h2 className="text-2xl md:text-4xl my-4 font-bold ">{props.heading}</h2>
      <p className="text-gray-500">{props.subHeading}</p>
    </div>
  );
}
