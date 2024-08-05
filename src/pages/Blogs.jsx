import React from "react";

export default function Blogs() {
  return (
    <div className="container w-full  ">
      <div className="lg:w-3/4 p-6 lg:p-8 flex flex-col md:flex-row justify-center items-start mx-auto">
        <div className="w-full md:w-1/2 p-2 my-4 md:my-0">
          <div className="w-full h-56 cursor-pointer rounded-lg">
            <img
              src="https://www.paleorunningmomma.com/wp-content/uploads/2020/08/30-paleo-meals-ready-in-30-minutes-2-768x1152.jpg"
              className="object-cover h-56 w-full rounded-lg"
            ></img>
          </div>
          <div className=" flex flex-col text-center md:text-left w-full">
            <h3 className="text-lg  my-1">
              5 easy weeknight meals to make in 30 mins
            </h3>
            <p className="text-gray-500 text-sm my-1 ">
              This blog features 5 easy recipies that are perfect for busy
              weeknights. From stir-fry to tacos to pasta, these meals are
              simple to make and full of flavour.
            </p>

            <small className="text-gray-500  my-1 ">18 september 2022</small>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div className="w-auto rounded-lg  flex flex-col cursor-pointer md:flex-row my-4 md:my-0">
            <div className="w-full h-56 md:h-32 md:w-1/3   rounded-lg">
              <img
                src="https://cdn.loveandlemons.com/wp-content/uploads/2019/02/vegan-meal-prep.jpg"
                alt=""
                className="w-full md:w-32 h-56 md:h-32 p-1  object-cover rounded-lg"
              ></img>
            </div>
            <div className=" w-full md:w-2/3 flex flex-col text-center md:text-left justify-center">
              <h3 className="text-sm  my-1">
                5 Healthy and delicious Meal prep recipes for Busy Professionals
              </h3>
              <p className="text-gray-500 text-xs  my-1">
                Meal prepping can be a great way to save time and eat healthy
                during a busy work week.
              </p>
              <small className="text-gray-500 text-xs  my-1 ">
                18 september 2022
              </small>
            </div>
          </div>
          <div className="w-auto rounded-lg  flex flex-col cursor-pointer md:flex-row my-4 md:my-0">
            <div className="w-full h-56 md:h-32 md:w-1/3   rounded-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTt3Al87xKri0atdqwQsHAnnrJgeU0Noxsuw&s"
                alt=""
                className=" w-full md:w-32 h-56 md:h-32 p-1  object-cover rounded-lg"
              ></img>
            </div>
            <div className=" w-full md:w-2/3 flex flex-col text-center md:text-left justify-center">
              <h3 className="text-sm  my-1">
                The ultimate guide to baking perfect cookies everytime.
              </h3>
              <p className="text-gray-500 text-xs my-1">
                We share our tips and tricks for baking perfect cookies..
              </p>
              <small className="text-gray-500 text-xs my-1 ">
                18 september 2022
              </small>
            </div>
          </div>
          <div className="w-auto rounded-lg  flex flex-col cursor-pointer md:flex-row my-4 md:my-0">
            <div className="w-full h-56 md:h-32 md:w-1/3   rounded-lg">
              <img
                src="https://www.modernhoney.com/wp-content/uploads/2023/05/Fruit-Salad-10.jpg"
                alt="summer recipes"
                className="w-full md:w-32 h-56 md:h-32 p-1  object-cover rounded-lg"
              ></img>
            </div>
            <div className=" w-full md:w-2/3 flex flex-col text-center md:text-left justify-center">
              <h3 className="text-sm  my-1">
                From Garden to table: Fresh and flavourful summer Recipes
              </h3>
              <p className="text-gray-500 text-xs my-1">
                We celebrate the flavours of summer with the collection of fresh
                and flavourful recipes.
              </p>
              <small className="text-gray-500 text-xs  my-1 ">
                18 september 2022
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
