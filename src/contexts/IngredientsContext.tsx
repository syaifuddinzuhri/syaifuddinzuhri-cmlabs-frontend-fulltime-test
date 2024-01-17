import { useGetIngredientsAll } from "@/api";
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
    ingredients?: any;
    isLoading?: boolean;
  };
  action: {
    filterIngredients: () => any;
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
    setSearchTerm: () => {},
  },
};

const IngredientsContext = createContext<Props>(initialValues);
const useIngredientsContext = () => {
  const [state, setState] = useState<Props["state"]>(initialValues.state);

  const {
    data: ingredientAllData,
    isSuccess: ingredientAllDataSuccess,
    isLoading: ingredientAllDataLoading,
  } = useGetIngredientsAll();

  const setSearchTerm = (searchTerm: string): void => {
    setState((prev) => ({ ...prev, searchTerm }));
  };

  const filterIngredients = (): any => {
    if (!ingredientAllData?.data) {
      return [];
    }
    const lowerSearchTerm = state.searchTerm?.toLowerCase();

    const filteredMeals = ingredientAllData?.data.meals.filter((meal: any) =>
      meal.strIngredient.toLowerCase().includes(lowerSearchTerm)
    );

    return filteredMeals;
  };

  return {
    state,
    setState,
    data: {
      ingredients: ingredientAllData?.data,
      isSuccess: ingredientAllDataSuccess,
      isLoading: ingredientAllDataLoading,
    },
    action: {
      filterIngredients,
      setSearchTerm
    },
  };
};
const IngredientsProvider: FC<ProviderProps> = (props) => {
  const { Provider } = IngredientsContext;
  return <Provider value={useIngredientsContext()}>{props.children} </Provider>;
};
export { IngredientsContext, IngredientsProvider };
