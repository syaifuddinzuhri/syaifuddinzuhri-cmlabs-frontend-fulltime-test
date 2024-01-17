/* eslint-disable @next/next/no-img-element */
import React from "react";

const HeroSection = () => {
  return (
    <div className="py-8 bg-primary bg-opacity-10">
      <div className="flex flex-col md:flex-row gap-8 flex-col-reverse container">
        <div className="w-full flex justify-center flex-col">
          <h1 className="text-2xl md:text-5xl font-bold">
            See All The Delicious Foods
          </h1>
          <h1 className="md:text-2xl mt-3">
            Culinary Conversations Await: Join Us at MealApp for Unforgettable
            Dining Experiencess
          </h1>
        </div>
        <div className="w-full">
          <div className="w-full">
            <img
              src="/images/hero.png"
              alt="Hero Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
