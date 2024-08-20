import { createSlice } from "@reduxjs/toolkit";

const courseUnMapSlice = createSlice({
    name: 'courseUnMapSlice',
    initialState: {
        isLoading: false,
        courseUnMapData: [],
        error: ''
    },
    reducers: {
        courseUnMapStart(state) {
            state.isLoading = true;
        },
        courseUnMapSuccess(state, action) {
            state.isLoading = false;
            state.courseUnMapData = action.payload;
        },
        courseUnMapFailure(state, action) {
            state.isLoading = false;
            state.courseUnMapData = [];
            state.error = action.payload;
        },
    },
});

export const { courseUnMapStart, courseUnMapSuccess, courseUnMapFailure } = courseUnMapSlice.actions;
export default courseUnMapSlice.reducer;
