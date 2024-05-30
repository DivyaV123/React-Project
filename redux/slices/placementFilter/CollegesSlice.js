import { createSlice } from "@reduxjs/toolkit";

const CollegesSlice = createSlice({
    name: 'colleges',
    initialState: {
        isLoading: false,
        collegesData: [],
        error: ''
    },
    reducers: {
        getAllCollegesStart(state) {
            state.isLoading = true;
        },
        getAllCollegesSuccess(state, action) {
            state.isLoading = false;
            state.collegesData = action.payload;
        },
        getAllCollegesFailure(state, action) {
            state.isLoading = false;
            state.collegesData = [];
            state.error = action.payload;
        },
    },
});

export const { getAllCollegesStart, getAllCollegesSuccess, getAllCollegesFailure } = CollegesSlice.actions;
export default CollegesSlice.reducer;
