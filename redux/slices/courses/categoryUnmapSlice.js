import { createSlice } from "@reduxjs/toolkit";

const categoryUnmapSlice = createSlice({
    name: 'categoryUnmapSlice',
    initialState: {
        isLoading: false,
        categoryUnmapData: [],
        error: ''
    },
    reducers: {
        categoryUnmapStart(state) {
            state.isLoading = true;
        },
        categoryUnmapSuccess(state, action) {
            state.isLoading = false;
            state.categoryUnmapData = action.payload;
        },
        categoryUnmapFailure(state, action) {
            state.isLoading = false;
            state.categoryUnmapData = [];
            state.error = action.payload;
        },
    },
});

export const { categoryUnmapStart, categoryUnmapSuccess, categoryUnmapFailure } = categoryUnmapSlice.actions;
export default categoryUnmapSlice.reducer;
