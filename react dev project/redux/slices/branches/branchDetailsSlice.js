import { createSlice } from "@reduxjs/toolkit";

const BranchDetailsSlice = createSlice({
    name: 'getAllBranchDetails',
    initialState: {
        isLoading: false,
        branchDetailsData: [],
        error: ''
    },
    reducers: {
        getAllBranchDetailsStart(state) {
            state.isLoading = true;
        },
        getAllBranchDetailsSuccess(state, action) {
            state.isLoading = false;
            state.branchDetailsData = action.payload;
        },
        getAllBranchDetailsFailure(state, action) {
            state.isLoading = false;
            state.branchDetailsData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllBranchDetailsStart, getAllBranchDetailsSuccess, getAllBranchDetailsFailure } = BranchDetailsSlice.actions;
export default BranchDetailsSlice.reducer;