import { createSlice } from "@reduxjs/toolkit";

const BranchDeleteSlice = createSlice({
    name: 'BranchDelete',
    initialState: {
        isLoading: false,
        branchesData: [],
        error: ''
    },
    reducers: {
        brancheDeleteStart(state) {
            state.isLoading = true;
        },
        branchDeleteSuccess(state, action) {
            state.isLoading = false;
            state.branchesData = action.payload;
        },
        branchDeleteFailure(state, action) {
            state.isLoading = false;
            state.branchesData = [];
            state.error = action.payload;
        },
    },
})
export const { brancheDeleteStart, branchDeleteSuccess, branchDeleteFailure } = BranchDeleteSlice.actions;
export default BranchDeleteSlice.reducer;