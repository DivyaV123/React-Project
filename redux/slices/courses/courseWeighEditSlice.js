import { createSlice } from "@reduxjs/toolkit";

const courseWeightageEditSlice = createSlice({
    name: 'courseWeightageEditSlice',
    initialState: {
        isLoading: false,
        courseWeightageEditData: [],
        error: ''
    },
    reducers: {
        courseWeightageEditStart(state) {
            state.isLoading = true;
        },
        courseWeightageEditSuccess(state, action) {
            state.isLoading = false;
            state.courseWeightageEditData = action.payload;
        },
        courseWeightageEditFailure(state, action) {
            state.isLoading = false;
            state.courseWeightageEditData = [];
            state.error = action.payload;
        },
    },
});

export const { courseWeightageEditStart, courseWeightageEditSuccess, courseWeightageEditFailure } = courseWeightageEditSlice.actions;
export default courseWeightageEditSlice.reducer;
