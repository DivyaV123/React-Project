import { createSlice } from "@reduxjs/toolkit";

const deleteCourseSlice = createSlice({
    name: 'deleteCourseSlice',
    initialState: {
        isLoading: false,
        courseDeleteData: [],
        error: ''
    },
    reducers: {
        courseDeleteStart(state) {
            state.isLoading = true;
        },
        courseDeleteSuccess(state, action) {
            state.isLoading = false;
            state.courseDeleteData = action.payload;
        },
        courseDeleteFailure(state, action) {
            state.isLoading = false;
            state.courseDeleteData = [];
            state.error = action.payload;
        },
    },
});

export const { courseDeleteStart, courseDeleteSuccess, courseDeleteFailure } = deleteCourseSlice.actions;
export default deleteCourseSlice.reducer;
