import { createSlice } from "@reduxjs/toolkit";

const initialState: IIngredients.IngredientsState = {
    search: '',
    data: [],
    filterData: [],
};

const ingredientSlice = createSlice({
  name: "ingredient",
  initialState: initialState,
  reducers: {
    setIngredientsData: (state, action) => {
      state.data = action.payload;
      console.log(action.payload);
    },
    filterData: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setIngredientsData, filterData } = ingredientSlice.actions;

export default ingredientSlice.reducer;
