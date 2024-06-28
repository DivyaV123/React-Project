import { createSlice } from "@reduxjs/toolkit";

const EnquriesSlice = createSlice({
    name: 'enquries',
    initialState: {
        isLoading: false,
        enquriesData: [],
        error: ''
    },
    reducers: {
        getAllenquriesDataStart(state) {
            state.isLoading = true;
        },
        getAllenquriesDataSuccess(state, action) {
            state.isLoading = false;
            state.enquriesData = action.payload;
        },
        getAllenquriesDataFailure(state, action) {
            state.isLoading = false;
            state.enquriesData = [];
            state.error = action.payload;
        },
    },
});

export const { getAllenquriesDataStart, getAllenquriesDataSuccess, getAllenquriesDataFailure } = EnquriesSlice.actions;
export default EnquriesSlice.reducer;
