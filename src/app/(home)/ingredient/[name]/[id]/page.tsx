/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/components/Button";
import NotFoundData from "@/components/NotFoundData";
import ListCategorySkeleton from "@/components/categories/ListCategorySkeleton";
import Breadcrumb from "@/components/global/Breadcrumb";
import HeadSection from "@/components/global/HeadSection";
import DetailProduct from "@/components/product/DetailProduct";
import {
  IngredientsContext,
  IngredientsProvider,
} from "@/contexts/IngredientsContext";
import { combineRecipes } from "@/utils/combineRecipes";
import { withProviders } from "@/utils/withProviders";
import { useParams, useRouter } from "next/navigation";
import React, { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";

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
    { label: decodedName || "Meals", href: `/ingredient/${decodedName}` },
    { label: strMeal, href: "/", isActive: true },
  ];

  return (
    <div className="container">
      <Breadcrumb items={breadcrumbItems} />
      <Button className="btn-outline-primary mb-8" title="Back" icon={<IoIosArrowBack/>} onClick={() => router.push(`/ingredient/${decodedName}`)}/>
      {isLoading ? (
        <ListCategorySkeleton />
      ) : (
        <>
          {!detailMeal ? (
            <NotFoundData />
          ) : (
            <DetailProduct dataDetail={dataDetail}/>
          )}
        </>
      )}
    </div>
  );
};
export default withProviders(IngredientsProvider)(DetailMeals);
