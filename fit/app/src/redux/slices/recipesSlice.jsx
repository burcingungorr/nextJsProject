import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const APP_ID = "6cce6ad1"; // Edamam App ID
const APP_KEY = "a61f2b7d50815edc3d530396202d9ff1"; // Edamam API Key
const USER_ID = "6cce6ad1"; // Edamam User ID (zorunlu)

export const fetchRecipes = createAsyncThunk("recipes/fetchAll", async () => {
  const response = await axios.get("https://api.edamam.com/api/recipes/v2", {
    headers: {
      "Edamam-Account-User": USER_ID,
    },
    params: {
      type: "public",
      q: "dinner",
      app_id: APP_ID,
      app_key: APP_KEY,
    },
  });

  return response.data.hits.map((hit) => hit.recipe);
});

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default recipesSlice.reducer;
