import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Recipes {
  id: string;
  name: string;
  description: string;
  ingredients: Array<{ id: string }>;
  category: string;
  preparation_time: number;
  special: boolean;
}

export interface DishState {
  in_view: boolean;
  recipes: Array<Recipes>;
  recipe: Recipes;
  special_recipe?: Recipes;
  status: string;
  error: any;
}

const initialState: DishState = {
  in_view: false,
  recipes: [],
  recipe: {
    id: "",
    name: "",
    description: "",
    ingredients: [],
    category: "",
    preparation_time: 0,
    special: false,
  },
  special_recipe: {
    id: "",
    name: "",
    description: "",
    ingredients: [],
    category: "",
    preparation_time: 0,
    special: false,
  },
  status: "idle",
  error: null,
};

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const res = await axios.get("http://localhost:3000/api/recipes/get");
    console.log("results=> ", res.data);
    return res.data;
  }
);

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    switch_view: (state) => {
      state.in_view = !state.in_view;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, { payload }) => {
        const no_special_recipes = payload.filter(
          (item: Recipes) => item.special !== true
        );
        const special = payload.find((item: Recipes) => item.special);
        state.status = "succeeded";
        state.recipes = no_special_recipes;
        state.special_recipe = special;
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.error = "error";
      });
  },
});

export const { switch_view } = dishSlice.actions;

export default dishSlice.reducer;
