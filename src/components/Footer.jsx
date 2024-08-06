import React from "react";
import { LiaFacebookSquare, LiaTwitterSquare } from "react-icons/lia";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="bg-black-default ">
      <div className="flex flex-col w-full justify-center items-center  text-white py-10 container">
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center py-4">
          <p className="font-bold text-3xl mr-auto ml-auto py-4">Cook.</p>
          <p className="text-center text-sm">
            From quick and easy meals to gourmet delights, we have something for
            every taste and occasion.
          </p>
        </div>
        <div className="h-px w-full md:w-2/5 bg-gray-600 my-5"></div>
        <div className="w-full md:w-2/5 flex  justify-evenly">
          <Link to="/about" className="hover:underline">
            About us
          </Link>
          <Link to="/recipes" className="hover:underline">
            Recipe
          </Link>
          <Link to="contest" className="hover:underline">
            Contest
          </Link>
          <Link to="blogs" className="hover:underline">
            Blogs
          </Link>
        </div>
      </div>
      <div className="h-px w-full bg-gray-600 "></div>
      <div className="w-full flex flex-col-rev md:flex-row justify-between items-center md:items-end py-4 px-32 gradient text-white">
        <div>
          <small>Copyright &copy; {date.getFullYear()}</small>
        </div>
        <div className="flex w-1/6 justify-between px-6">
          <LiaFacebookSquare />
          <FaInstagramSquare />
          <LiaTwitterSquare />
          <FaYoutubeSquare />
        </div>
      </div>
    </footer>
  );
}
