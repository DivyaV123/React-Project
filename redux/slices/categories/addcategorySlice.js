import { createSlice } from "@reduxjs/toolkit";

const categoryAdderSlice = createSlice({
    name: 'categoryAdderSlice',
    initialState: {
        isLoading: false,
        courseAdderData: [],
        error: ''
    },
    reducers: {
        categoryAdderStart(state) {
            state.isLoading = true;
        },
        categoryAdderSuccess(state, action) {
            state.isLoading = false;
            state.courseAdderData = action.payload;
        },
        categoryAdderFailure(state, action) {
            state.isLoading = false;
            state.courseAdderData = [];
            state.error = action.payload;
        },
    },
});

export const { categoryAdderStart, categoryAdderSuccess, categoryAdderFailure } = categoryAdderSlice.actions;
export default categoryAdderSlice.reducer;
