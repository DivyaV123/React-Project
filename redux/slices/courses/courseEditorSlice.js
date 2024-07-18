import { createSlice } from "@reduxjs/toolkit";

const courseEditorSlice = createSlice({
    name: 'courseEditorSlice',
    initialState: {
        isLoading: false,
        courseEditorData: [],
        error: ''
    },
    reducers: {
        courseAdderStart(state) {
            state.isLoading = true;
        },
        courseAdderSuccess(state, action) {
            state.isLoading = false;
            state.courseEditorData = action.payload;
        },
        courseAdderFailure(state, action) {
            state.isLoading = false;
            state.courseEditorData = [];
            state.error = action.payload;
        },
    },
});

export const { courseAdderStart, courseAdderSuccess, courseAdderFailure } = courseEditorSlice.actions;
export default courseEditorSlice.reducer;
