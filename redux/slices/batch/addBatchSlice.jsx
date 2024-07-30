import { createSlice } from "@reduxjs/toolkit";

const AddBatchSlice = createSlice({
    name: 'AddBatchSlice',
    initialState: {
        isLoading: false,
        batchData: [],
        error: ''
    },
    reducers: {
        AddBatchStart(state) {
            state.isLoading = true;
        },
        AddBatchSuccess(state, action) {
            state.isLoading = false;
            state.batchData = action.payload;
        },
        AddBatchFailure(state, action) {
            state.isLoading = false;
            state.batchData = [];
            state.error = action.payload;
        },
    },
})
export const { AddBatchStart, AddBatchSuccess, AddBatchFailure } = AddBatchSlice.actions;
export default AddBatchSlice.reducer;