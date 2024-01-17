/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeadSection from "../global/HeadSection";
import { combineRecipes } from "@/utils/combineRecipes";
import YouTubeEmbed from "../YouTubeEmbed";

const DetailProduct = ({dataDetail}: any) => {
  return (
    <>
      <h1 className="text-2xl md:text-5xl font-bold mb-3">
        {dataDetail?.strMeal}
      </h1>
      <h1 className="text-xl font-medium mb-5 text-primary">
        {dataDetail?.strArea}
      </h1>
      <hr />
      <div className="flex flex-col md:flex-row gap-8 bg-white py-8">
        <div className="w-full md:w-2/5">
          <div className="w-full h-[400px] md:h-[600px] rounded-3xl border border-gray-200 overflow-hidden">
            <img
              src={dataDetail.strMealThumb}
              alt={dataDetail?.strMeal}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="md:w-3/5 w-full">
          <div className="mb-5">
            <HeadSection title="Instructions" />
            <p>{dataDetail?.strInstructions}</p>
          </div>
          <div className="mb-5">
            <HeadSection title="Recipes" />
            <div className="py-5 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {combineRecipes(dataDetail)?.map((item: any, i: number) => (
                <li key={i}>
                  {item?.measure} {item?.ingredient}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <YouTubeEmbed url={dataDetail?.strYoutube}/>
      </div>
    </>
  );
};

export default DetailProduct;
