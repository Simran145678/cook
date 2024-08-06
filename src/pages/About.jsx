import React from "react";

export default function About() {
  return (
    <div className="flex flex-col container justify-center p-6 md:p-12 xl:p-20 w-full md:w-4/5 ">
      <h3 className="text-3xl text-orange-500 mb-2">About Us</h3>
      <p className="pb-8">
        Welcome to Cook., your ultimate destination for delicious and diverse
        recipes from around the world! Our mission is to inspire home cooks of
        all skill levels to explore the joy of cooking and discover new flavors
        and techniques.
      </p>
      <h3 className="text-3xl text-orange-500 mb-2">Who We Are</h3>
      <p className="pb-8">
        At Cook., we are a passionate team of food enthusiasts, chefs, and
        developers dedicated to bringing the best culinary experiences right to
        your kitchen. We believe that cooking should be fun, accessible, and
        rewarding, and our goal is to make it easy for you to find and create
        amazing dishes.
      </p>
      <h3 className="text-3xl text-orange-500 mb-2">Our Story</h3>
      <p className="pb-8">
        Cook. was born out of a love for food and a desire to share that passion
        with others. We realized that finding reliable, easy-to-follow recipes
        can sometimes be a challenge, and we wanted to create a space where
        anyone can discover new recipes, get inspired, and enjoy cooking. Since
        our launch, we’ve grown into a vibrant community of food lovers who
        share a common love for cooking and good food.
      </p>
    </div>
  );
}
