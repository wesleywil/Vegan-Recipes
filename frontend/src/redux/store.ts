import { configureStore } from "@reduxjs/toolkit";

import dishReducer from "./dish/dish";
import adminReducer from "./admin/admin";
import ingredientsReducer from "./ingredients/ingredients";

export const store = configureStore({
    reducer:{
        dish:dishReducer,
        ingredients:ingredientsReducer,
        admin:adminReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;