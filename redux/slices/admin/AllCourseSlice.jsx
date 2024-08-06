import { createSlice } from "@reduxjs/toolkit";

const AllCourseSlice = createSlice({
    name: 'AllCourse',
    initialState: {
        isLoading: false,
        CourseData: [],
        error: ''
    },
    reducers: {
        getAllCoursesStart(state) {
            state.isLoading = true;
        },
        getAllCoursesSuccess(state, action) {
            state.isLoading = false;
            state.CourseData = action.payload;
        },
        getAllCoursesFailure(state, action) {
            state.isLoading = false;
            state.CourseData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllCoursesStart, getAllCoursesSuccess, getAllCoursesFailure } = AllCourseSlice.actions;
export default AllCourseSlice.reducer;