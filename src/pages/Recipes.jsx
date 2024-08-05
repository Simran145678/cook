import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <div className=" container mx-auto p-6 md:p-10 w-full">
      <h1 className="text-5xl text-orange-500 my-10">All Recipes</h1>

      {recipes.map((recipe) => (
        <Link to={`/recipes/${recipe.id}`}>
          <div
            key={recipe.id}
            className="p-4 border lg:w-3/4 border-gray-300 w-auto rounded-lg mx-0 my-3 md:m-6 flex flex-col cursor-pointer md:flex-row hover:shadow-xl "
          >
            <div className="w-full md:w-1/3  h-72  rounded-lg">
              <img
                src={recipe.imageUrl}
                alt={recipes.name}
                className="w-full  h-72 object-cover rounded-lg"
              ></img>
            </div>
            <div className="p-6 w-full md:w-2/3 flex flex-col justify-center">
              <div className="flex my-2">
                <ul className="flex">
                  <small className="flex justify-center items-center mr-3">
                    <GoDotFill />
                    {recipe.duration}
                  </small>
                  <small className="flex justify-center items-center mr-3">
                    <GoDotFill />
                    {recipe.level}
                  </small>
                  <small className="flex justify-center items-center mr-3">
                    <FaStar className="mx-1" />
                    {recipe.rating}
                  </small>
                </ul>
              </div>
              <h2 className="text-3xl lg:text-5xl my-2">{recipe.name}</h2>
              <p className="my-2">{recipe.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Recipes;
