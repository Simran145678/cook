import React from "react";
import HeroBanner from "../components/HeroBanner";
import Chef from "../assets/images/chefPro.jpg";
import Plate from "../assets/images/platePro.jpg";
import Card from "../components/Card";
import Blogs from "./Blogs";
import Modal from "../components/Modal";
import TileSlider from "../components/TileSlider";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

export default function Home() {
  const [recipes, setRecipes] = React.useState([]);
  const [isModalVisible, setIsModalVisible] = React.useState(true);

  React.useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  React.useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  const homePageRecipies = recipes.slice(0, 4);
  const homePageCards = recipes.slice(-4);

  const tiles = [
    {
      image:
        "https://shef.com/homemade-food/wp-content/uploads/thai-food01-scaled-e1662414525462.jpg",
      title: "Thai Food",
    },
    {
      image: "https://india47.ca/wp-content/uploads/2023/08/1-1024x538.png",
      title: "Indian Cuizine",
    },
    {
      image:
        "https://holytequila.com/wp-content/uploads/2022/05/history-of-mexican-food.jpg",
      title: "Mexican Cuizine",
    },
    {
      image:
        "https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Top-10-Traditional-Foods-in-Italy.jpg",
      title: "Italian Cuizine",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/58939a42d2b857c51ea91c0d/1566319942248-0GYBX3V9DUH8CU66ZE6V/bloody+mary+obsessed+one+pan+healthy+and+simple+breakfast+recipe+4.jpg",
      title: "Breakfast",
    },
  ];
  return (
    <>
      <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
      <div>
        <HeroBanner
          para="From quick and easy meals to gourmet delights, we have something for
            every taste and occasion."
          link={
            <Link to="/recipes" className="py-2 px-2">
              Explore all Recipies
            </Link>
          }
          img={Chef}
          varient="rounded-full"
        >
          <h1 className="text-2xl md:text-4xl lg:text-6xl mb-6">
            Cook Like a Pro with our{" "}
            <span className="text-orange-500">Easy </span> and{""}
            <span className="text-orange-500"> Tasty</span> Recipies.
          </h1>
        </HeroBanner>
        <div className="py-10 bg-yellow-200">
          <Heading
            heading="Popular recipes you can't miss"
            subHeading=" From comfort food classic to exotic flavours, our featured recipies are sure to impress."
          />

          <div className="container w-full h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-4 px-6 md:px-20 place-items-center">
            {homePageRecipies.map((recipe) => {
              return (
                <Card
                  key={recipe.id}
                  image={recipe.imageUrl}
                  name={recipe.name}
                  description={recipe.description}
                  link={
                    <Link to={`/recipes/${recipe.id}`} className="py-2 px-12">
                      See Full Details
                    </Link>
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="mt-6">
          <Heading
            heading="Explore by Cuizine Type"
            subHeading="Discover new flavours and cooking techniques with our diverse selection of cuizine types."
          />
          <TileSlider tiles={tiles} />
        </div>
        <HeroBanner
          para="Discover new flavours and cooking techniques with our diverse selection of cuizine types."
          link={
            <Link to="contest" className="py-2 px-2">
              Explore Contest
            </Link>
          }
          img={Plate}
        >
          <h1 className="text-2xl md:text-4xl mb-6">Join Our Latest Contest</h1>
        </HeroBanner>
        <div className="py-10 bg-yellow-200">
          <Heading
            heading="Recipe Collection"
            subHeading=" From quick weeknight dinners to eleborate weekend projects, we have recipies to fit every lifestyle and taste."
          />

          <div className="container w-full h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-4 px-6 md:px-20 place-items-center">
            {homePageCards.map((recipe) => {
              return (
                <Link to={`/recipes/${recipe.id}`}>
                  <Card
                    varient="hover:bg-orange-500 group-hover:border-white cursor-pointer group-hover:text-white hover:text-white transition-all duration-300 ease-in-out"
                    key={recipe.id}
                    image={recipe.imageUrl}
                    name={recipe.name}
                    description={recipe.description}
                    duration={recipe.duration}
                    level={recipe.level}
                    rating={recipe.rating}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="py-12">
          <Heading
            heading="Latest Blog"
            subHeading=" From quick weeknight dinners to eleborate weekend projects."
          />
          <Blogs />
          <Link to="/blogs">
            <button className=" bg-orange-500 text-white text-sm mx-auto block border-xl py-2 px-3 rounded-lg hover:underline ">
              See more
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
