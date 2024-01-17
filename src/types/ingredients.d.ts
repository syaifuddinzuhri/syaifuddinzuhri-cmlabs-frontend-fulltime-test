interface ICategory {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
}
interface IMeal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

declare namespace IIngredients {
  interface IngredientsState {
    search: string;
    data: ICategory[];
    filterData: ICategory[];
  }
}
