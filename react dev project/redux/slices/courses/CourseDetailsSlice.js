import { createSlice } from "@reduxjs/toolkit";

const CoursesDetailsSlice = createSlice({
    name: 'getAllCoursesDetails',
    initialState: {
        isLoading: false,
        courseDetailsData: [],
        error: ''
    },
    reducers: {
        getAllCourseDetailsStart(state) {
            state.isLoading = true;
        },
        getAllCourseDetailsSuccess(state, action) {
            state.isLoading = false;
            state.courseDetailsData = action.payload;
        },
        getAllCourseDetailsFailure(state, action) {
            state.isLoading = false;
            state.courseDetailsData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllCourseDetailsStart, getAllCourseDetailsSuccess, getAllCourseDetailsFailure } = CoursesDetailsSlice.actions;
export default CoursesDetailsSlice.reducer;