import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DishState {
  in_view: boolean;
}

const initialState: DishState = {
  in_view: false,
};

export const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    switch_view: (state) => {
      state.in_view = !state.in_view;
    },
  },
});

export const { switch_view } = dishSlice.actions;

export default dishSlice.reducer;
