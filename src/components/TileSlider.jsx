import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 text-black-900 rounded-full p-4 shadow-md hover:text-white hover:bg-orange-500 cursor-pointer transition-all duration-300"
    >
      <FaArrowLeft />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 text-black-900 rounded-full p-4 shadow-md hover:text-white hover:bg-orange-500 cursor-pointer transition-all duration-300"
    >
      <FaArrowRight />
    </button>
  );
};

const TileSlider = ({ tiles }) => {
  return (
    <div className="container mx-auto py-12 px-6 lg:px-8 xl:p-16 relative">
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={false}
        itemClass="px-2"
        arrows={false}
      >
        {tiles.map((tile, index) => (
          <div
            key={index}
            className="relative w-64 h-64 bg-gray-200 rounded-lg cursor-pointer"
          >
            <img
              src={tile.image}
              alt={`Slide ${index + 1}`}
              className=" w-full h-full object-cover rounded-lg"
            />
            <div
              className="absolute flex rounded-xl items-end justify-center text-white z-40 top-0 left-0 w-64 h-64 opacity-0
                  p-2 bg-gradient-to-b from-transparent to-black-default hover:opacity-100 transition-all duration-500"
            >
              <p>
                {tile.title} <FaArrowRightLong className="inline ml-2" />{" "}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="flex justify-center mt-4 space-x-4">
        <CustomLeftArrow
          onClick={() =>
            document
              .querySelector(".react-multi-carousel-list")
              .scrollBy({ left: -265, behavior: "smooth" })
          }
        />
        <CustomRightArrow
          onClick={() =>
            document
              .querySelector(".react-multi-carousel-list")
              .scrollBy({ left: 265, behavior: "smooth" })
          }
        />
      </div>
    </div>
  );
};

export default TileSlider;
