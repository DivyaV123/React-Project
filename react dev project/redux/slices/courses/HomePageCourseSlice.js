import { createSlice } from "@reduxjs/toolkit";

const HomePageCourseSlice = createSlice({
    name: 'getAllhomePageCourse',
    initialState: {
        isLoading: false,
        homePageCourseData: [],
        error: ''
    },
    reducers: {
        getAllhomePageCourseStart(state) {
            state.isLoading = true;
        },
        getAllhomePageCourseSuccess(state, action) {
            state.isLoading = false;
            state.homePageCourseData = action.payload;
        },
        getAllhomePageCourseFailure(state, action) {
            state.isLoading = false;
            state.homePageCourseData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllhomePageCourseStart, getAllhomePageCourseSuccess, getAllhomePageCourseFailure } = HomePageCourseSlice.actions;
export default HomePageCourseSlice.reducer;