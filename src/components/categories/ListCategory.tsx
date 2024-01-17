/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import CategoryCard from "./CategoryCard";
import TextInput from "../form/TextInput";
import { IoSearch } from "react-icons/io5";
import { useQuery } from "react-query";
import { getListIngredients } from "@/services/ingredients";
import { withProviders } from "@/utils/withProviders";
import {
  IngredientsContext,
  IngredientsProvider,
} from "@/contexts/IngredientsContext";
import ListCategorySkeleton from "./ListCategorySkeleton";
import HeadSection from "../global/HeadSection";
import NotFoundData from "../NotFoundData";
import { useRouter } from "next/navigation";

const ListCategory = () => {
  const router = useRouter();
  const {
    state: { searchTerm },
    data: { isLoading, ingredients },
    action: { filterIngredients, setSearchTerm },
  } = useContext(IngredientsContext);

  const filteredIngredients = filterIngredients();

  return (
    <div className="py-8">
      <HeadSection title="List of Ingredients" />
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
            placeholder="Search ingredients..."
          />
          {filteredIngredients.length === 0 ? (
            <NotFoundData />
          ) : (
            <div className="py-5 w-full grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 gap-4">
              {filteredIngredients.map((item: ICategory, i: number) => (
                <CategoryCard key={i} onClick={() => router.push(`/ingredient/${item.strIngredient}`) } name={item.strIngredient} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default withProviders(IngredientsProvider)(ListCategory);
