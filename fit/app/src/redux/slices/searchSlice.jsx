import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const APP_ID = "6cce6ad1";
const APP_KEY = "a61f2b7d50815edc3d530396202d9ff1";
const USER_ID = "6cce6ad1";

// Async thunk: Arama sorgusu ile tarif çek
export const fetchRecipesByQuery = createAsyncThunk(
  "search/fetchRecipesByQuery",
  async (query) => {
    if (!query) return [];

    const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
      params: {
        type: "public",
        q: query,
        app_id: APP_ID,
        app_key: APP_KEY,
      },
      headers: {
        "Edamam-Account-User": USER_ID,
      },
    });

    return response.data.hits.map((hit) => ({
      label: hit.recipe.label,
      calories: Math.round(hit.recipe.calories),
      mealType: Array.isArray(hit.recipe.mealType)
        ? hit.recipe.mealType
        : ["Uncategorized"],
      image: hit.recipe.image,
      url: hit.recipe.url,
    }));
  }
);

// Slice
const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: [],
    loading: false,
    error: null,
  },
  reducers: {
    // Arama sonuçlarını temizle
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesByQuery.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipesByQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchRecipesByQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSearchResults } = searchSlice.actions;

export default searchSlice.reducer;
