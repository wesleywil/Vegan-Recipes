import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Ingredients {
  _id: string;
  name: string;
}

export interface IngredientsState {
  ingredients: Array<Ingredients>;
  ingredientsById: Array<Ingredients>;
  status: string;
  error: any;
}

const initialState: IngredientsState = {
  ingredients: [],
  ingredientsById: [],
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
  reducers: {
    add_ingredient: (state, { payload }) => {
      const item = state.ingredientsById.find((obj) => obj._id === payload._id);
      if (!item) {
        return {
          ...state,
          ingredientsById: [...state.ingredientsById, payload],
        };
      }
      return {
        ...state,
      };
    },
    remove_ingredient: (state, { payload }) => {
      state.ingredientsById = state.ingredientsById.filter(
        (obj) => obj._id !== payload._id
      );
    },
  },
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
        state.ingredientsById = payload;
      })
      .addCase(fetchIngredientsByIds.rejected, (state) => {
        state.error = "error in getting ingredients by IDS";
      });
  },
});

export const { add_ingredient, remove_ingredient } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
