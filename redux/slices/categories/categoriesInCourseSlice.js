import { createSlice } from "@reduxjs/toolkit";

const CategoriesInCourseSlice = createSlice({
    name: 'CategoriesInCourse',
    initialState: {
        isLoading: false,
        CategoriesInCourseData: [],
        error: ''
    },
    reducers: {
        getAllCategoriesInCourseStart(state) {
            state.isLoading = true;
        },
        getAllCategoriesInCourseSuccess(state, action) {
            state.isLoading = false;
            state.CategoriesInCourseData = action.payload;
        },
        getAllCategoriesInCourseFailure(state, action) {
            state.isLoading = false;
            state.CategoriesInCourseData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllCategoriesInCourseStart, getAllCategoriesInCourseSuccess, getAllCategoriesInCourseFailure } = CategoriesInCourseSlice.actions;
export default CategoriesInCourseSlice.reducer;