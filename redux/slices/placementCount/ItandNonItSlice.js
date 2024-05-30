import { createSlice } from "@reduxjs/toolkit";

const ItandNonItSlice = createSlice({
  name:'getItandNonItData',
  initialState: {
    isLoading: false,
    courseData:[],
    error:''
  },
  reducers: {
    ItandNonItStart(state) {
      state.isLoading = true;
    },
    ItandNonItSuccess(state, action) {
      state.isLoading = false;
      state.courseData = action.payload;
    },
    ItandNonItFailure(state, action) {
      state.isLoading = false;
      state.courseData = [];
      state.error = action.payload;
    },
  },
})
export const { ItandNonItStart, ItandNonItSuccess, ItandNonItFailure } = ItandNonItSlice.actions;
export default ItandNonItSlice.reducer;