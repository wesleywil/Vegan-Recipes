import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Recipes {
  _id: string;
  name: string;
  description: string;
  ingredients?: Array<{ id: string }>;
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
    _id: "",
    name: "",
    description: "",
    ingredients: [],
    category: "",
    preparation_time: 0,
    special: false,
  },
  special_recipe: {
    _id: "",
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

export const createRecipe = createAsyncThunk(
  "recipes/createRecipe",
  async (data: any) => {
    const res = await axios.post(
      "http://localhost:3000/api/recipes/post",
      data
    );
    return res.data;
  }
);

export const updateRecipe = createAsyncThunk(
  "recipes/updateRecipe",
  async (data: any) => {
    const res = await axios.patch(
      `http://localhost:3000/api/recipes/update/${data.id}`,
      data
    );
    return res.data;
  }
);

export const deleteRecipe = createAsyncThunk(
  "recipes/deleteRecipe",
  async (id: string) => {
    const res = await axios.delete(
      `http://localhost:3000/api/recipes/delete/${id}`
    );
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
    cleanRecipeSelection: (state) => {
      state.recipe = {
        _id: "",
        name: "",
        description: "",
        ingredients: [],
        category: "",
        preparation_time: 0,
        special: false,
      };
    },
    selectById: (state, { payload }) => {
      state.recipe = state.recipes.find(({ _id }) => _id === payload)!;
    },
    filterByName: (state, { payload }) => {
      let filteredRecipes = state.recipes.filter((item) => {
        return item.name.toLowerCase().includes(payload);
      });
      return {
        ...state,
        recipes: filteredRecipes,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, { payload }) => {
        const special = payload.find((item: Recipes) => item.special);
        state.status = "succeeded";
        state.recipes = payload;
        state.special_recipe = special;
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.error = "error";
      })
      .addCase(createRecipe.pending, (state) => {
        state.status = "creating new recipe";
      })
      .addCase(createRecipe.fulfilled, (state) => {
        state.status = "new recipe added!";
      })
      .addCase(createRecipe.rejected, (state) => {
        state.error = "error in adding recipe";
      })
      .addCase(updateRecipe.pending, (state) => {
        state.status = "updating new recipe";
      })
      .addCase(updateRecipe.fulfilled, (state) => {
        state.status = "recipe updated!";
      })
      .addCase(updateRecipe.rejected, (state) => {
        state.error = "error in updating recipe";
      })
      .addCase(deleteRecipe.pending, (state) => {
        state.status = "deleting recipe";
      })
      .addCase(deleteRecipe.fulfilled, (state) => {
        state.status = "recipe deleted!";
      })
      .addCase(deleteRecipe.rejected, (state) => {
        state.error = "error in deleting recipe";
      });
  },
});

export const { switch_view, cleanRecipeSelection, selectById, filterByName } =
  dishSlice.actions;

export default dishSlice.reducer;
