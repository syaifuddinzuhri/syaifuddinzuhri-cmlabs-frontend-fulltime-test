import { createSlice } from "@reduxjs/toolkit";

const initialDarkMode = () => {
  if (typeof window !== "undefined") {
    const item = window?.localStorage.getItem("darkMode");
    return item ? JSON.parse(item) : false;
  }
  return false;
};

const initialState = {
  darkMode: initialDarkMode(),
  isOpenNav: false
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    handleDarkMode: (state, action) => {
      state.darkMode = action.payload;
      if (typeof window !== "undefined") {
        window?.localStorage.setItem("darkMode", action.payload);
      }
    },
    handleIsOpenNav: (state, action) => {
      state.isOpenNav = action.payload;
    },
  },
});

export const { handleDarkMode, handleIsOpenNav } = layoutSlice.actions;

export default layoutSlice.reducer;
