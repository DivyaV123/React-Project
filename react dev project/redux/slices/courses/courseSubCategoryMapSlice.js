import { createSlice } from "@reduxjs/toolkit";

const courseSubCategoryMapSlice = createSlice({
    name: 'courseSubCategoryMapSlice',
    initialState: {
        isLoading: false,
        courseSubCategoryMapData: [],
        error: ''
    },
    reducers: {
        courseSubCategoryMapStart(state) {
            state.isLoading = true;
        },
        courseSubCategoryMapSuccess(state, action) {
            state.isLoading = false;
            state.courseSubCategoryMapData = action.payload;
        },
        courseSubCategoryMapFailure(state, action) {
            state.isLoading = false;
            state.courseSubCategoryMapData = [];
            state.error = action.payload;
        },
    },
});

export const { courseSubCategoryMapStart, courseSubCategoryMapSuccess, courseSubCategoryMapFailure } = courseSubCategoryMapSlice.actions;
export default courseSubCategoryMapSlice.reducer;
