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

const ListCategory = () => {
  const {
    data: { isLoading, ingredients },
    action: { filterIngredients },
  } = useContext(IngredientsContext);

  const [filterText, setFilterText] = useState("");

  const filteredIngredients = filterIngredients(filterText);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-8">
      <div className="border-l-4 border-l-primary px-3 mb-5">
        <h1 className="text-xl md:text-2xl font-bold">List of Ingredients</h1>
      </div>
      <TextInput
        type="text"
        name="keyword"
        icon={<IoSearch />}
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Search ingredients..."
      />
      <div className="py-5 w-full grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 gap-4">
        {filteredIngredients.map((item: ICategory, i: number) => (
          <CategoryCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default withProviders(IngredientsProvider)(ListCategory);
