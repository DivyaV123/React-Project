import { createSlice } from "@reduxjs/toolkit";

const cityDeleteSlice = createSlice({
    name: 'cityDeleteSlice',
    initialState: {
        isLoading: false,
        cityDeleteData: [],
        error: ''
    },
    reducers: {
        cityDeleteStart(state) {
            state.isLoading = true;
        },
        cityDeleteSuccess(state, action) {
            state.isLoading = false;
            state.cityDeleteData = action.payload;
        },
        cityDeleteFailure(state, action) {
            state.isLoading = false;
            state.cityDeleteData = [];
            state.error = action.payload;
        },
    },
});

export const { cityDeleteStart, cityDeleteSuccess, cityDeleteFailure } = cityDeleteSlice.actions;
export default cityDeleteSlice.reducer;
