import { createSlice } from "@reduxjs/toolkit";

const deleteTopicSlice = createSlice({
    name: 'deleteTopicSlice',
    initialState: {
        isLoading: false,
        topicDeleteData: [],
        error: ''
    },
    reducers: {
        topicDeleteStart(state) {
            state.isLoading = true;
        },
        topicDeleteSuccess(state, action) {
            state.isLoading = false;
            state.topicDeleteData = action.payload;
        },
        topicDeleteFailure(state, action) {
            state.isLoading = false;
            state.topicDeleteData = [];
            state.error = action.payload;
        },
    },
});

export const { topicDeleteStart, topicDeleteSuccess, topicDeleteFailure } = deleteTopicSlice.actions;
export default deleteTopicSlice.reducer;
