import { createSlice } from "@reduxjs/toolkit";

const PlacementBranchSlice = createSlice({
  name:'getPlacementBranchData',
  initialState: {
    isLoading: false,
    courseData:[],
    error:''
  },
  reducers: {
    PlacementBranchStart(state) {
      state.isLoading = true;
    },
    PlacementBranchSuccess(state, action) {
      state.isLoading = false;
      state.courseData = action.payload;
    },
    PlacementBranchFailure(state, action) {
      state.isLoading = false;
      state.courseData = [];
      state.error = action.payload;
    },
  },
})
export const { PlacementBranchStart, PlacementBranchSuccess, PlacementBranchFailure } = PlacementBranchSlice.actions;
export default PlacementBranchSlice.reducer;