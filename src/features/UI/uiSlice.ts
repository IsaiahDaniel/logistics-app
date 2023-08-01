import { createSlice } from "@reduxjs/toolkit";

type uiSliceType = {
    toggle?: boolean;
}

const initialState: uiSliceType = {
    toggle: false,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleValue: (state: any) => {
            state.toggle = !state.toggle;
        },
    }
});

export const { toggleValue } = uiSlice.actions;

export default uiSlice.reducer;