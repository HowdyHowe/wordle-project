import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateData {
    darkMode: boolean;
    surrend: boolean;
    info: boolean;
    setting: boolean;
    boxCount: number;
}

const initialState: StateData = {
    darkMode: false,
    surrend: false,
    setting: false,
    info: false,
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
        setInfo: (state) => {
            state.info = !state.info
        },
        setSetting: (state) => {
            state.setting = !state.setting
        },
        setBoxCount: (state, action: PayloadAction<number>) => {
            state.boxCount = action.payload;
        },
    }
});


export const { toggleTheme, setBoxCount, setSurrend, setInfo, setSetting } = stateDataSlice.actions;
export default stateDataSlice.reducer;
