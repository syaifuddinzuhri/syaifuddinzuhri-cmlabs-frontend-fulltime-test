import { useGetIngredientDetail, useGetIngredientDetailMeals, useGetIngredientsAll } from "@/api";
import ListCategory from "@/components/categories/ListCategory";
import { useParams } from "next/navigation";
import React, { createContext, FC, ReactNode, useState } from "react";
type ProviderProps = {
  children?: ReactNode;
};
type Props = {
  setState: React.Dispatch<React.SetStateAction<Props["state"]>>;
  state: {
    searchTerm?: string
  };
  data: {
    detailMeal?: any;
    ingredients?: any;
    detailIngredients?: any;
    isLoading?: boolean;
  };
  action: {
    filterIngredients: () => any;
    filterMeal: () => any;
    setSearchTerm: (searchTerm: string) => void;
  };
};
const initialValues: Props = {
  setState: () => {},
  state: {
    searchTerm: ''
  },
  data: {},
  action: {
    filterIngredients: () => {},
    filterMeal: () => {},
    setSearchTerm: () => {},
  },
};

const IngredientsContext = createContext<Props>(initialValues);
const useIngredientsContext = () => {
  const [state, setState] = useState<Props["state"]>(initialValues.state);
  const params = useParams();
  const {
    data: ingredientAllData,
    isSuccess: ingredientAllDataSuccess,
    isLoading: ingredientAllDataLoading,
  } = useGetIngredientsAll();

  const {
    data: ingredientDetailData,
    isSuccess: ingredientDetailDataSuccess,
    isLoading: ingredientDetailDataLoading,
  } = useGetIngredientDetail(`${params.name}` ?? "");

  const {
    data: ingredientDetailDataMeals,
    isSuccess: ingredientDetailDataMealsSuccess,
    isLoading: ingredientDetailDataMealsLoading,
  } = useGetIngredientDetailMeals(`${params.id}` ?? "");

  const setSearchTerm = (searchTerm: string): void => {
    setState((prev) => ({ ...prev, searchTerm }));
  };

  const filterIngredients = (): any => {
    if (!ingredientAllData?.data?.meals) {
      return [];
    }
    const lowerSearchTerm = state.searchTerm?.toLowerCase();
    const filteredMeals = ingredientAllData?.data.meals.filter((meal: any) =>
      meal.strIngredient.toLowerCase().includes(lowerSearchTerm)
    );
    return filteredMeals;
  };

  const filterMeal = (): any => {
    if (!ingredientDetailData?.data?.meals) {
      return [];
    }
    const lowerSearchTerm = state.searchTerm?.toLowerCase();
    const filteredMeals = ingredientDetailData?.data.meals.filter((meal: any) =>
      meal.strMeal.toLowerCase().includes(lowerSearchTerm)
    );
    return filteredMeals;
  };

  return {
    state,
    setState,
    data: {
      detailMeal: ingredientDetailDataMeals?.data?.meals,
      detailIngredients: ingredientDetailData?.data,
      ingredients: ingredientAllData?.data,
      isSuccess: ingredientAllDataSuccess || ingredientDetailDataSuccess || ingredientDetailDataMealsSuccess,
      isLoading: ingredientAllDataLoading || ingredientDetailDataLoading || ingredientDetailDataMealsLoading,
    },
    action: {
      filterIngredients,
      filterMeal,
      setSearchTerm
    },
  };
};
const IngredientsProvider: FC<ProviderProps> = (props) => {
  const { Provider } = IngredientsContext;
  return <Provider value={useIngredientsContext()}>{props.children}</Provider>;
};
export { IngredientsContext, IngredientsProvider };
