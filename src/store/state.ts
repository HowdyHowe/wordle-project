import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateData {
    darkMode: boolean;
    surrend: boolean;
    boxCount: number;
}

const initialState: StateData = {
    darkMode: false,
    surrend: false,
    boxCount: 5
}

const stateDataSlice = createSlice({
    name: "stateData",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode
        },
        setSurrend: (state) => {
            state.surrend = !state.surrend
        },
        setBoxCount: (state, action: PayloadAction<number>) => {
            state.boxCount = action.payload;
        },
    }
});


export const { toggleTheme, setBoxCount, setSurrend } = stateDataSlice.actions;
export default stateDataSlice.reducer;
