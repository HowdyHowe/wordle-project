import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme"

export const store = configureStore({
    reducer: { theme: themeReducer },
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
