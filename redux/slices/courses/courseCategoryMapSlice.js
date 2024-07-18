import { createSlice } from "@reduxjs/toolkit";

const courseCategoryMapSlice = createSlice({
    name: 'courseCategoryMapSlice',
    initialState: {
        isLoading: false,
        courseCategoryMapData: [],
        error: ''
    },
    reducers: {
        courseCategoryMapStart(state) {
            state.isLoading = true;
        },
        courseCategoryMapSuccess(state, action) {
            state.isLoading = false;
            state.courseCategoryMapData = action.payload;
        },
        courseCategoryMapFailure(state, action) {
            state.isLoading = false;
            state.courseCategoryMapData = [];
            state.error = action.payload;
        },
    },
});

export const { courseCategoryMapStart, courseCategoryMapSuccess, courseCategoryMapFailure } = courseCategoryMapSlice.actions;
export default courseCategoryMapSlice.reducer;
