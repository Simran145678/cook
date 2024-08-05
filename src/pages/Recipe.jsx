import React from "react";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const params = useParams();
  const [recipe, setRecipe] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/recipes/${params.id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data.recipes));
  }, [params.id]);
  console.log(recipe);

  return (
    <div className="p-6 md:p-10 text-black-default">
      {recipe ? (
        <div className="w-full lg:w-2/3">
          <h1 className="text-4xl my-2 text-orange-500">{recipe.name}</h1>
          <p className="my-2">{recipe.description}</p>

          <p className="my-2">
            By <b>John Mitzewich</b> | Published on July 26, 2024
          </p>
          <img
            src={recipe.imageUrl}
            alt={recipe.name}
            className="w-72 my-4"
          ></img>

          <div className="py-2">
            <h2 className="text-3xl my-2 text-orange-500">Ingredients</h2>
            <ul className="list-disc pl-4">
              <li>1 packet active dry yeast</li>
              <li>1 cup warm water, at 105 degrees F (40 degrees C)</li>
              <li>4 tablespoons olive oil, divided, plus more as needed</li>
              <li>1 teaspoon white sugar</li>
              <li>3 cups all-purpose flour</li>
              <li>1 1/2 teaspoons kosher salt</li>
              <li>12 slices fresh plum</li>
              <li>4 slices prosciutto, each slice cut into thirds</li>
              <li>2 teaspoons chopped rosemary (optional)</li>
              <li>1 teaspoon coarse sea salt, or to taste</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-3xl my-2 text-orange-500">Directions</h3>
            <ul>
              <li>
                <p className="font-bold text-xl">Step 1</p>
                <p>
                  Stir yeast and warm water together in a large bowl and let
                  stand for 15 minutes.
                </p>
              </li>
              <li>
                <p className="font-bold text-xl">Step 2</p>
                <p>
                  Add 1 tablespoon olive oil, sugar, all-purpose flour, and
                  salt. Use a wooden spoon to stir until a very soft, sticky
                  dough forms. While stirring, incorporate any dough that sticks
                  to the sides of the bowl.{" "}
                </p>
              </li>
              <li>
                <p className="font-bold text-xl">Step 3</p>
                <p>
                  Drizzle over a tablespoon of olive oil, and rub some on your
                  hands. Pick up dough, and with your fingers under the dough
                  pushing gently up, stretch the sides down and under several
                  times while rotating the dough, in order to form a relatively
                  smooth ball with some surface tension on top. Place dough ball
                  into the bowl, smooth side up, cover the bowl, and refrigerate
                  overnight.
                </p>
              </li>
              <li>
                <p className="font-bold text-xl">Step 4</p>
                <p>
                  The next morning, pull out dough and let rise at room
                  temperature until doubled in size, about 1 1/2 hours.
                </p>
              </li>
              <li>
                <p className="font-bold text-xl">Step 5</p>
                <p>
                  Generously oil a work surface with about 1 tablespoon olive
                  oil, and transfer dough to the work surface. Press into a
                  large rectangle, and then fold into thirds one way, and then
                  the other, forming a small rectangle, about 6x9 inches.{" "}
                </p>
              </li>
              <li>
                <p className="font-bold text-xl">Step 6</p>
                <p>
                  Generously oil a sheet pan with about 2 tablespoons olive oil,
                  and transfer dough rectangle to the sheet pan. Press dough out
                  to about 1/2-inch thick. Cover; let proof at room temperature
                  until dough has spread out, risen slightly, and surface has
                  bubbles, 1 1/2 to 2 hours.
                </p>
              </li>
              <li>
                <p className="font-bold text-xl">Step 7</p>
                <p>
                  Meanwhile, wrap plum sections with prosciutto and refrigerate
                  until needed.
                </p>
              </li>
              <li>
                <p className="font-bold text-xl">Step 8</p>
                <p>Preheat the oven to 475 degrees F (245 degrees C).</p>
              </li>
              <li>
                <p className="font-bold text-xl">Step 9</p>
                <p>
                  Sprinkle dough with rosemary. Push wrapped plum sections deep
                  into the dough in a 3x4 pattern. Drizzle top lightly with
                  olive oil; sprinkle with sea salt.{" "}
                </p>
              </li>
              <li>
                <p className="font-bold text-xl">Step 10</p>
                <p>
                  Bake in the preheated oven until browned, 17 to 20 minutes. As
                  soon as focaccia is out of the oven, brush with more olive oil
                  if desired. Transfer focaccia to a rack and let cool
                  completely before cutting.
                </p>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <h2 className="text-3xl p-20">Loading...</h2>
      )}
    </div>
  );
}
