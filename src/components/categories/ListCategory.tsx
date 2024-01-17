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

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentIngredients = filteredIngredients.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
            <>
              <div className="py-5 w-full grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 gap-4">
                {currentIngredients.map((item: ICategory, i: number) => (
                  <CategoryCard
                    key={i}
                    onClick={() =>
                      router.push(`/ingredient/${item.strIngredient}`)
                    }
                    name={item.strIngredient}
                  />
                ))}
              </div>
              <div className="flex justify-center mt-4">
                {Array.from(
                  {
                    length: Math.ceil(
                      filteredIngredients.length / itemsPerPage
                    ),
                  },
                  (_, i) => {
                    const isFirstPage = i === 0;
                    const isLastPage =
                      i ===
                      Math.ceil(filteredIngredients.length / itemsPerPage) - 1;
                    const isInRange =
                      Math.abs(i + 1 - currentPage) <= 1 ||
                      isFirstPage ||
                      isLastPage;

                    if (isInRange) {
                      return (
                        <button
                          key={i + 1}
                          onClick={() => handlePageChange(i + 1)}
                          className={`mx-1 md:mx-2 px-3 md:px-4 py-1 md:py-2 text-sm md:text-base ${
                            i + 1 === currentPage
                              ? "bg-primary text-white rounded"
                              : "bg-gray-200 text-gray-700 rounded"
                          }`}
                        >
                          {i + 1}
                        </button>
                      );
                    }

                    if (
                      (currentPage >= 4 && i === 1) ||
                      (currentPage <=
                        Math.ceil(filteredIngredients.length / itemsPerPage) -
                          4 &&
                        i ===
                          Math.ceil(filteredIngredients.length / itemsPerPage) -
                            2)
                    ) {
                      return (
                        <button
                          key={i + 1}
                          onClick={() =>
                            handlePageChange(currentPage + (i === 1 ? -2 : 2))
                          }
                          className="mx-1 md:mx-2 px-3 md:px-4 py-1 md:py-2 text-sm md:text-base bg-gray-200 text-gray-700 rounded"
                        >
                          ...
                        </button>
                      );
                    }

                    return null;
                  }
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default withProviders(IngredientsProvider)(ListCategory);
