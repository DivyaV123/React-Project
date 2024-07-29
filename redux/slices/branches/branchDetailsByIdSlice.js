import { createSlice } from "@reduxjs/toolkit";

const BranchDetailsByIdSlice = createSlice({
    name: 'getAllBranchDetailsById',
    initialState: {
        isLoading: false,
        branchDetailsData: [],
        error: ''
    },
    reducers: {
        getAllBranchDetailsByIdStart(state) {
            state.isLoading = true;
        },
        getAllBranchDetailsByIdSuccess(state, action) {
            state.isLoading = false;
            state.branchDetailsData = action.payload;
        },
        getAllBranchDetailsByIdFailure(state, action) {
            state.isLoading = false;
            state.branchDetailsData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllBranchDetailsByIdStart, getAllBranchDetailsByIdSuccess, getAllBranchDetailsByIdFailure } = BranchDetailsByIdSlice.actions;
export default BranchDetailsByIdSlice.reducer;