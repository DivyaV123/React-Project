import { createSlice } from "@reduxjs/toolkit";

const courseEditDataSlice = createSlice({
    name: 'courseEditDataSlice',
    initialState: {
        isLoading: false,
        courseEditorData: [],
        error: ''
    },
    reducers: {
        courseEditStart(state) {
            state.isLoading = true;
        },
        courseEditSuccess(state, action) {
            state.isLoading = false;
            state.courseEditorData = action.payload;
        },
        courseEditFailure(state, action) {
            state.isLoading = false;
            state.courseEditorData = [];
            state.error = action.payload;
        },
    },
});

export const { courseEditStart, courseEditSuccess, courseEditFailure } = courseEditDataSlice.actions;
export default courseEditDataSlice.reducer;
