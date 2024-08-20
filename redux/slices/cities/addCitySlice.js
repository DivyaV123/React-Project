import { createSlice } from "@reduxjs/toolkit";

const cityAdderSlice = createSlice({
    name: 'cityAdderSlice',
    initialState: {
        isLoading: false,
        cityAdderData: [],
        error: ''
    },
    reducers: {
        cityAdderStart(state) {
            state.isLoading = true;
        },
        cityAdderSuccess(state, action) {
            state.isLoading = false;
            state.cityAdderData = action.payload;
        },
        cityAdderFailure(state, action) {
            state.isLoading = false;
            state.cityAdderData = [];
            state.error = action.payload;
        },
    },
});

export const { cityAdderStart, cityAdderSuccess, cityAdderFailure } = cityAdderSlice.actions;
export default cityAdderSlice.reducer;
