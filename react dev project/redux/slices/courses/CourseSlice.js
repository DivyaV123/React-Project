import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
  name:'getAllCourses',
  initialState: {
    isLoading: false,
    courseData:[],
    error:''
  },
  reducers: {
    getAllCourseStart(state) {
      state.isLoading = true;
    },
    getAllCourseSuccess(state, action) {
      state.isLoading = false;
      state.courseData = action.payload;
    },
    getAllCourseFailure(state, action) {
      state.isLoading = false;
      state.courseData = [];
      state.error = action.payload;
    },
  },
})
export const { getAllCourseStart, getAllCourseSuccess, getAllCourseFailure } = CourseSlice.actions;
export default CourseSlice.reducer;