interface ICategory {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
}

declare namespace IIngredients {
  interface IngredientsState {
    search: string;
    data: ICategory[];
    filterData: ICategory[];
  }
}
