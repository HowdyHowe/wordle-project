import { configureStore } from "@reduxjs/toolkit";
import stateDataReducer from "./state"

export const store = configureStore({
    reducer: { stateData: stateDataReducer },
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
