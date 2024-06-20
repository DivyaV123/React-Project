import { createSlice } from "@reduxjs/toolkit";

const BranchesSlice = createSlice({
    name: 'getAllBranches',
    initialState: {
        isLoading: false,
        branchesData: [],
        error: ''
    },
    reducers: {
        getAllBranchesStart(state) {
            state.isLoading = true;
        },
        getAllBranchesSuccess(state, action) {
            state.isLoading = false;
            state.branchesData = action.payload;
        },
        getAllBranchesFailure(state, action) {
            state.isLoading = false;
            state.branchesData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllBranchesStart, getAllBranchesSuccess, getAllBranchesFailure } = BranchesSlice.actions;
export default BranchesSlice.reducer;