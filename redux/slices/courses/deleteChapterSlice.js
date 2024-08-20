import { createSlice } from "@reduxjs/toolkit";

const deleteChapterSlice = createSlice({
    name: 'deleteChapterSlice',
    initialState: {
        isLoading: false,
        chapterDeleteData: [],
        error: ''
    },
    reducers: {
        chapterDeleteStart(state) {
            state.isLoading = true;
        },
        chapterDeleteSuccess(state, action) {
            state.isLoading = false;
            state.chapterDeleteData = action.payload;
        },
        chapterDeleteFailure(state, action) {
            state.isLoading = false;
            state.chapterDeleteData = [];
            state.error = action.payload;
        },
    },
});

export const { chapterDeleteStart, chapterDeleteSuccess, chapterDeleteFailure } = deleteChapterSlice.actions;
export default deleteChapterSlice.reducer;
