"use client";
import Button from "@/components/Button";
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
import { withProviders } from "@/utils/withProviders";
import { useParams, useRouter } from "next/navigation";
import React, { useContext } from "react";
import { IoIosArrowBack, IoIosArrowDropleftCircle, IoMdArrowDropleft } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const DetailIngredient = () => {
  const router = useRouter();
  const { name } = useParams();
  const decodeName = Array.isArray(name) ? decodeURIComponent(name[0]) : decodeURIComponent(name);

  const {
    state: { searchTerm },
    data: { isLoading },
    action: { filterMeal, setSearchTerm },
  } = useContext(IngredientsContext);

  const filteredMeal = filterMeal();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Foods", href: "/" },
    { label: decodeName || "Meals", isActive: true },
  ];

  return (
    <div className="container">
      <Breadcrumb items={breadcrumbItems} />
      <HeadSection title="List of Meals" />
      <Button className="btn-outline-primary mb-8" title="Back" icon={<IoIosArrowBack/>} onClick={() => router.push('/')}/>
      {isLoading ? (
        <ListCategorySkeleton />
      ) : (
        <>
          <TextInput
            type="text"
            name="keyword"
            icon={<IoSearch />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search meals..."
          />
          {filteredMeal.length === 0 ? (
            <NotFoundData />
          ) : (
            <div className="py-5 w-full grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 gap-4">
              {filteredMeal.map((item: IMeal, i: number) => (
                <CategoryCard
                  key={i}
                  onClick={() => router.push(`/ingredient/${decodeName}/${item.idMeal}`)}
                  name={item.strMeal}
                  image={item.strMealThumb}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default withProviders(IngredientsProvider)(DetailIngredient);
