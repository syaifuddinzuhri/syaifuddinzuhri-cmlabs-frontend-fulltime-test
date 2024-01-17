/* eslint-disable @next/next/no-img-element */
"use client";
import NotFoundData from "@/components/NotFoundData";
import CategoryCard from "@/components/categories/CategoryCard";
import ListCategorySkeleton from "@/components/categories/ListCategorySkeleton";
import TextInput from "@/components/form/TextInput";
import Breadcrumb from "@/components/global/Breadcrumb";
import HeadSection from "@/components/global/HeadSection";
import {
  IngredientsContext,
  IngredientsProvider,
} from "@/contexts/IngredientsContext";
import { combineRecipes } from "@/utils/combineRecipes";
import { withProviders } from "@/utils/withProviders";
import { useParams, useRouter } from "next/navigation";
import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";

const DetailMeals = () => {
  const router = useRouter();
  const { name } = useParams();
  const decodedName = Array.isArray(name)
    ? decodeURIComponent(name[0])
    : decodeURIComponent(name);

  const {
    data: { isLoading, detailMeal },
  } = useContext(IngredientsContext);

  const dataDetail = detailMeal ? detailMeal[0] : null;
  const strMeal = dataDetail ? dataDetail.strMeal : "";

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Foods", href: "/" },
    { label: decodedName || "Meals" },
    { label: strMeal, href: "/", isActive: true },
  ];

  return (
    <div className="container">
      <Breadcrumb items={breadcrumbItems} />
      {isLoading ? (
        <ListCategorySkeleton />
      ) : (
        <>
          {!detailMeal ? (
            <NotFoundData />
          ) : (
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
                      {combineRecipes(dataDetail)?.map(
                        (item: any, i: number) => (
                          <li key={i}>{item?.measure} {item?.ingredient}</li>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default withProviders(IngredientsProvider)(DetailMeals);
