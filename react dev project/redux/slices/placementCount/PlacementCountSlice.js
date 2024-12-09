import { createSlice } from '@reduxjs/toolkit';

export const PlacementCountSlice = createSlice({
  name: 'getAllCounts',
  initialState: {
    countData: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    getAllCountsStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    getAllCountsSuccess(state, action) {
      state.isLoading = false;
      state.counts = action.payload;
    },
    getAllCountsFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getAllCountsStart, getAllCountsSuccess, getAllCountsFailure } = PlacementCountSlice.actions;

export default PlacementCountSlice.reducer;
