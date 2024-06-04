import { createSlice } from "@reduxjs/toolkit";

const YearOfPassoutSlice = createSlice({
  name:'getYearOfPassoutData',
  initialState: {
    isLoading: false,
    courseData:[],
    error:''
  },
  reducers: {
    YearOfPassoutStart(state) {
      state.isLoading = true;
    },
    YearOfPassoutSuccess(state, action) {
      state.isLoading = false;
      state.courseData = action.payload;
    },
    YearOfPassoutFailure(state, action) {
      state.isLoading = false;
      state.courseData = [];
      state.error = action.payload;
    },
  },
})
export const { YearOfPassoutStart, YearOfPassoutSuccess, YearOfPassoutFailure } = YearOfPassoutSlice.actions;
export default YearOfPassoutSlice.reducer;