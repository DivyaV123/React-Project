import { createSlice } from "@reduxjs/toolkit";

const getCourseByIdSlice = createSlice({
    name: 'getCourseByIdSlice',
    initialState: {
        isLoading: false,
        courseCourseByIdData: [],
        error: ''
    },
    reducers: {
        getAllCourseByIdStart(state) {
            state.isLoading = true;
        },
        getAllCourseByIdSuccess(state, action) {
            state.isLoading = false;
            state.courseCourseByIdData = action.payload;
        },
        getAllCourseByIdFailure(state, action) {
            state.isLoading = false;
            state.courseCourseByIdData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllCourseByIdStart, getAllCourseByIdSuccess, getAllCourseByIdFailure } = getCourseByIdSlice.actions;
export default getCourseByIdSlice.reducer;