import { createSlice } from "@reduxjs/toolkit";

const courseWeightageSlice = createSlice({
    name: 'courseWeightageSlice',
    initialState: {
        isLoading: false,
        courseWeightageData: [],
        error: ''
    },
    reducers: {
        courseWeightageStart(state) {
            state.isLoading = true;
        },
        courseWeightageSuccess(state, action) {
            state.isLoading = false;
            state.courseWeightageData = action.payload;
        },
        courseWeightageFailure(state, action) {
            state.isLoading = false;
            state.courseWeightageData = [];
            state.error = action.payload;
        },
    },
});

export const { courseWeightageStart, courseWeightageSuccess, courseWeightageFailure } = courseWeightageSlice.actions;
export default courseWeightageSlice.reducer;
