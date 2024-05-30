import { createSlice } from "@reduxjs/toolkit";

const LessthanSixtySlice = createSlice({
  name:'getLessthanSixtyData',
  initialState: {
    isLoading: false,
    courseData:[],
    error:''
  },
  reducers: {
    getLessthanSixtyStart(state) {
      state.isLoading = true;
    },
    getLessthanSixtySuccess(state, action) {
      state.isLoading = false;
      state.courseData = action.payload;
    },
    getLessthanSixtyFailure(state, action) {
      state.isLoading = false;
      state.courseData = [];
      state.error = action.payload;
    },
  },
})
export const { getLessthanSixtyStart, getLessthanSixtySuccess, getLessthanSixtyFailure } = LessthanSixtySlice.actions;
export default LessthanSixtySlice.reducer;