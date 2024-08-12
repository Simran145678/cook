import React from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);
  return (
    <header className="container flex justify-between md:px-10 md:py-5 items-center relative">
      {/* For desktop screens */}
      <div className="  w-1/6 hidden md:flex justify-center">
        <Link to="/">
          <p className="font-bold text-3xl mr-auto ml-auto">Cook.</p>
        </Link>
      </div>
      <nav className="w-1/2 hidden md:block">
        <ul className="flex justify-evenly ">
          <li className="hover:underline">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline text-orange-500" : null
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "underline text-orange-500" : null
              }
            >
              About us
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? "underline text-orange-500" : null
              }
            >
              Recipes
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="contest"
              className={({ isActive }) =>
                isActive ? "underline text-orange-500" : null
              }
            >
              Contest
            </NavLink>
          </li>
          <li className="hover:underline">
            <NavLink
              to="blogs"
              className={({ isActive }) =>
                isActive ? "underline text-orange-500" : null
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-1/4 justify-center hidden md:flex ">
        <button className=" bg-orange-500 text-white text-sm  border-xl py-2 px-3 rounded-lg hover:underline ">
          Latest Contest
        </button>
      </div>

      {/* For mobile screens */}
      <div className="  w-full flex md:hidden justify-between p-6 z-30">
        <Link to="/">
          <p className="font-bold text-3xl mr-auto ml-auto">Cook.</p>
        </Link>
        <button onClick={toggleMenu} className=" text-3xl md:hidden  p-2">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        }  md:hidden items-center justify-center w-full mt-24 py-8 absolute `}
      >
        <ul className=" flex flex-col absolute w-full text-lg justify-center items-center border-t-1 border-b-1 border-orange-500 bg-white ">
          <li className="py-2">
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li className="py-2">
            <Link to="/about" className="hover:underline">
              About us
            </Link>
          </li>
          <li className="py-2">
            <Link to="/recipes" className="hover:underline">
              Recipe
            </Link>
          </li>
          <li className="py-2">
            <Link to="contest" className="hover:underline">
              Contest
            </Link>
          </li>
          <li className="py-2">
            <Link to="blogs" className="hover:underline">
              Blogs
            </Link>
          </li>
          <li className="py-4">
            <button className=" bg-orange-500 text-white text-sm  border-xl py-2 px-3 rounded-lg hover:underline ">
              Latest Contest
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
