import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCalories = createAsyncThunk(
  "calorie/fetchCalories",
  async ({ activity, weight, duration }) => {
    const response = await axios.get(
      `https://api.api-ninjas.com/v1/caloriesburned`,
      {
        params: { activity, weight, duration },
        headers: { "X-Api-Key": "g+5xbfCtCeviEG69lXGtwQ==7Qgi52DwDXCwKanb" },
      }
    );
    return response.data;
  }
);

const calorieSlice = createSlice({
  name: "calorie",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCalories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCalories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCalories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default calorieSlice.reducer;
