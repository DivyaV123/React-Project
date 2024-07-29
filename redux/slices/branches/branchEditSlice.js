import { createSlice } from "@reduxjs/toolkit";

const BranchEditSlice = createSlice({
    name: 'BranchEdit',
    initialState: {
        isLoading: false,
        branchesData: [],
        error: ''
    },
    reducers: {
        brancheEditStart(state) {
            state.isLoading = true;
        },
        branchEditSuccess(state, action) {
            state.isLoading = false;
            state.branchesData = action.payload;
        },
        branchEditFailure(state, action) {
            state.isLoading = false;
            state.branchesData = [];
            state.error = action.payload;
        },
    },
})
export const { brancheEditStart, branchEditSuccess, branchEditFailure } = BranchEditSlice.actions;
export default BranchEditSlice.reducer;