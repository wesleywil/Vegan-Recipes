import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Ingredients {
  _id: string;
  name: string;
}

export interface IngredientsState {
  ingredients: Array<Ingredients>;
  status: string;
  error: any;
}

const initialState: IngredientsState = {
  ingredients: [],
  status: "idle",
  error: null,
};

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async () => {
    const res = await axios.get("http://localhost:3000/api/ingredients/get");
    console.log("result ingredients=> ", res.data);
    return res.data;
  }
);

export const fetchIngredientsByIds = createAsyncThunk(
  "ingredients/fetchIngredientsByIds",
  async (data: any) => {
    const res = await axios.post(
      "http://localhost:3000/api/ingredients/getMultiple",
      { ids: data }
    );
    console.log("result ingredients=> ", res.data);
    return res.data;
  }
);

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIngredients.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.ingredients = payload;
      })
      .addCase(fetchIngredients.rejected, (state) => {
        state.error = "error";
      })
      .addCase(fetchIngredientsByIds.pending, (state) => {
        state.status = "loading by ids";
      })
      .addCase(fetchIngredientsByIds.fulfilled, (state, { payload }) => {
        state.status = "succeeded in getting ingredients by IDS";
        state.ingredients = payload;
      })
      .addCase(fetchIngredientsByIds.rejected, (state) => {
        state.error = "error in getting ingredients by IDS";
      });
  },
});

export default ingredientsSlice.reducer;
