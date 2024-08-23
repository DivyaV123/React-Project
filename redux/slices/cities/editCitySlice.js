import { createSlice } from "@reduxjs/toolkit";

const cityEditSlice = createSlice({
    name: 'cityEditSlice',
    initialState: {
        isLoading: false,
        cityEditData: [],
        error: ''
    },
    reducers: {
        cityEditStart(state) {
            state.isLoading = true;
        },
        cityEditSuccess(state, action) {
            state.isLoading = false;
            state.cityEditData = action.payload;
        },
        cityEditFailure(state, action) {
            state.isLoading = false;
            state.cityEditData = [];
            state.error = action.payload;
        },
    },
});

export const { cityEditStart, cityEditSuccess, cityEditFailure } = cityEditSlice.actions;
export default cityEditSlice.reducer;
