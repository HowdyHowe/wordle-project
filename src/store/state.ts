import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateData {
    darkMode: boolean;
    boxCount: number;
}

const initialState: StateData = {
    darkMode: false,
    boxCount: 5
}

const stateDataSlice = createSlice({
    name: "stateData",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode
        },
        setBoxCount: (state, action: PayloadAction<number>) => {
            state.boxCount = action.payload;
        },
    }
});


export const { toggleTheme, setBoxCount } = stateDataSlice.actions;
export default stateDataSlice.reducer;
