import { configureStore } from "@reduxjs/toolkit";
import calorieReducer from "../slices/caloriSlice";
import categoriesReducer from "../slices/categorisSlice";
import recipesReducer from "../slices/recipesSlice";
import searchReducer from "../slices/searchSlice";
import userReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    calorie: calorieReducer,
    categories: categoriesReducer,
    recipes: recipesReducer,
    search: searchReducer,
    user: userReducer,
  },
});
