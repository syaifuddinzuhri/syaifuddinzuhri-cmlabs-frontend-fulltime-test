import { useGetIngredientsAll } from "@/api";
import React, { createContext, FC, ReactNode, useState } from "react";
type ProviderProps = {
  children?: ReactNode;
};
type Props = {
  setState: React.Dispatch<React.SetStateAction<Props["state"]>>;
  state: {};
  data: {
    ingredients?: any;
    isLoading?: boolean;
  };
  action: {
    filterIngredients: (filterText: string) => any;
  };
};
const initialValues: Props = {
  setState: () => {},
  state: {},
  data: {},
  action: {
    filterIngredients: () => {},
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

  const filterIngredients = (filterText: string): any => {
    if (!ingredientAllData?.data) {
      return [];
    }
    const lowerSearchTerm = filterText.toLowerCase();

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
    },
  };
};
const IngredientsProvider: FC<ProviderProps> = (props) => {
  const { Provider } = IngredientsContext;
  return <Provider value={useIngredientsContext()}>{props.children} </Provider>;
};
export { IngredientsContext, IngredientsProvider };
