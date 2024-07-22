import { createSlice } from "@reduxjs/toolkit";

const OnlineCourseSlice = createSlice({
  name:'getOnlineCourses',
  initialState: {
    isLoading: false,
    courseData:[],
    error:''
  },
  reducers: {
    getOnlineCoursesStart(state) {
      state.isLoading = true;
    },
    getOnlineCoursesSuccess(state, action) {
      state.isLoading = false;
      state.courseData = action.payload;
    },
    getOnlineCoursesFailure(state, action) {
      state.isLoading = false;
      state.courseData = [];
      state.error = action.payload;
    },
  },
})
export const { getOnlineCoursesStart, getOnlineCoursesSuccess, getOnlineCoursesFailure } = OnlineCourseSlice.actions;
export default OnlineCourseSlice.reducer;