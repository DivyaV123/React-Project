import { createSlice } from "@reduxjs/toolkit";

const deleteSubTopicSlice = createSlice({
    name: 'deleteSubTopicSlice',
    initialState: {
        isLoading: false,
        subtopicDeleteData: [],
        error: ''
    },
    reducers: {
        subtopicDeleteStart(state) {
            state.isLoading = true;
        },
        subtopicDeleteSuccess(state, action) {
            state.isLoading = false;
            state.subtopicDeleteData = action.payload;
        },
        subtopicDeleteFailure(state, action) {
            state.isLoading = false;
            state.subtopicDeleteData = [];
            state.error = action.payload;
        },
    },
});

export const { subtopicDeleteStart, subtopicDeleteSuccess, subtopicDeleteFailure } = deleteSubTopicSlice.actions;
export default deleteSubTopicSlice.reducer;
