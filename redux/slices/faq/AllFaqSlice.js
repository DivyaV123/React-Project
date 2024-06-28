import { createSlice } from "@reduxjs/toolkit";

const AllFaqSlice = createSlice({
    name: 'getAllAllFaq',
    initialState: {
        isLoading: false,
        homePageFaqData: [],
        error: ''
    },
    reducers: {
        getAllFaqStart(state) {
            state.isLoading = true;
        },
        getAllFaqSuccess(state, action) {
            state.isLoading = false;
            state.homePageFaqData = action.payload;
        },
        getAllFaqFailure(state, action) {
            state.isLoading = false;
            state.homePageFaqData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllFaqStart, getAllFaqSuccess, getAllFaqFailure } = AllFaqSlice.actions;
export default AllFaqSlice.reducer;