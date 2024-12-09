import { createSlice } from "@reduxjs/toolkit";

const courseAdderSlice = createSlice({
    name: 'courseAdderSlice',
    initialState: {
        isLoading: false,
        courseAdderData: [],
        error: ''
    },
    reducers: {
        courseAdderStart(state) {
            state.isLoading = true;
        },
        courseAdderSuccess(state, action) {
            state.isLoading = false;
            state.courseAdderData = action.payload;
        },
        courseAdderFailure(state, action) {
            state.isLoading = false;
            state.courseAdderData = [];
            state.error = action.payload;
        },
    },
});

export const { courseAdderStart, courseAdderSuccess, courseAdderFailure } = courseAdderSlice.actions;
export default courseAdderSlice.reducer;
