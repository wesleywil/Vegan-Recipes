import { createSlice } from "@reduxjs/toolkit";

export interface AdminState {
  delete_hidden: boolean;
  form_hidden: boolean;
  ingredients_hidden: boolean;
}

const initialState: AdminState = {
  delete_hidden: true,
  form_hidden: true,
  ingredients_hidden: true,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    switch_delete_view: (state) => {
      state.delete_hidden = !state.delete_hidden;
    },
    switch_form_view: (state) => {
      state.form_hidden = !state.form_hidden;
    },
    switch_ingredients_view: (state) => {
      state.ingredients_hidden = !state.ingredients_hidden;
    },
  },
});

export const { switch_delete_view, switch_form_view, switch_ingredients_view } =
  adminSlice.actions;

export default adminSlice.reducer;
