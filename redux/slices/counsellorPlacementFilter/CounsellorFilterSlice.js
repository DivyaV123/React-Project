import { createSlice } from "@reduxjs/toolkit";

const CounsellorFilterSlice = createSlice({
  name:'getCounsellorFilterData',
  initialState: {
    isLoading: false,
    CounsellorFilterData:[],
    error:''
  },
  reducers: {
    CounsellorFilterStart(state) {
      state.isLoading = true;
    },
    CounsellorFilterSuccess(state, action) {
      state.isLoading = false;
      state.CounsellorFilterData = action.payload;
    },
    CounsellorFilterFailure(state, action) {
      state.isLoading = false;
      state.CounsellorFilterData = [];
      state.error = action.payload;
    },
  },
})
export const { CounsellorFilterStart, CounsellorFilterSuccess, CounsellorFilterFailure } = CounsellorFilterSlice.actions;
export default CounsellorFilterSlice.reducer;