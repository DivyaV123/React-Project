import { createSlice } from "@reduxjs/toolkit";

const BranchCoureSlice = createSlice({
    name: 'getAllBranchCoure',
    initialState: {
        isLoading: false,
        branchCoureData: [],
        error: ''
    },
    reducers: {
        getAllbranchCoureStart(state) {
            state.isLoading = true;
        },
        getAllbranchCoureSuccess(state, action) {
            state.isLoading = false;
            state.branchCoureData = action.payload;
        },
        getAllbranchCoureFailure(state, action) {
            state.isLoading = false;
            state.branchCoureData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllbranchCoureStart, getAllbranchCoureSuccess, getAllbranchCoureFailure } = BranchCoureSlice.actions;
export default BranchCoureSlice.reducer;