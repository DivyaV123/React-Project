import { createSlice } from "@reduxjs/toolkit";

const StreamSlice = createSlice({
    name: 'Stream',
    initialState: {
        isLoading: false,
        StreamData: [],
        error: ''
    },
    reducers: {
        getAllStreamStart(state) {
            state.isLoading = true;
        },
        getAllStreamSuccess(state, action) {
            state.isLoading = false;
            state.StreamData = action.payload;
        },
        getAllStreamFailure(state, action) {
            state.isLoading = false;
            state.StreamData = [];
            state.error = action.payload;
        },
    },
});

export const { getAllStreamStart, getAllStreamSuccess, getAllStreamFailure } = StreamSlice.actions;
export default StreamSlice.reducer;
