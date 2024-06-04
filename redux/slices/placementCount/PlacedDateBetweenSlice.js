import { createSlice } from "@reduxjs/toolkit";

const PlacedDateBetweenSlice = createSlice({
  name:'getPlacedDateBetweenData',
  initialState: {
    isLoading: false,
    courseData:[],
    error:''
  },
  reducers: {
    PlacedDateBetweenStart(state) {
      state.isLoading = true;
    },
    PlacedDateBetweenSuccess(state, action) {
      state.isLoading = false;
      state.courseData = action.payload;
    },
    PlacedDateBetweenFailure(state, action) {
      state.isLoading = false;
      state.courseData = [];
      state.error = action.payload;
    },
  },
})
export const { PlacedDateBetweenStart, PlacedDateBetweenSuccess, PlacedDateBetweenFailure } = PlacedDateBetweenSlice.actions;
export default PlacedDateBetweenSlice.reducer;