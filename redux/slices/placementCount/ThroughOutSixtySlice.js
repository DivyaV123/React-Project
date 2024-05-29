import { createSlice } from "@reduxjs/toolkit";

const ThroughOutSixtySlice = createSlice({
  name:'getThroughOutSixtyData',
  initialState: {
    isLoading: false,
    courseData:[],
    error:''
  },
  reducers: {
    ThroughOutSixtyStart(state) {
      state.isLoading = true;
    },
    ThroughOutSixtySuccess(state, action) {
      state.isLoading = false;
      state.courseData = action.payload;
    },
    ThroughOutSixtyFailure(state, action) {
      state.isLoading = false;
      state.courseData = [];
      state.error = action.payload;
    },
  },
})
export const { ThroughOutSixtyStart, ThroughOutSixtySuccess, ThroughOutSixtyFailure } = ThroughOutSixtySlice.actions;
export default ThroughOutSixtySlice.reducer;