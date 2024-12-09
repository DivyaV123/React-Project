import { createSlice } from "@reduxjs/toolkit";

const CategoryDeleteSlice = createSlice({
    name: 'CategoryDeleteSlice',
    initialState: {
        isLoading: false,
        CategoryDeleteData: [],
        error: ''
    },
    reducers: {
        CategoryDeleteStart(state) {
            state.isLoading = true;
        },
        CategoryDeleteSuccess(state, action) {
            state.isLoading = false;
            state.CategoryDeleteData = action.payload;
        },
        CategoryDeleteFailure(state, action) {
            state.isLoading = false;
            state.CategoryDeleteData = [];
            state.error = action.payload;
        },
    },
});

export const { CategoryDeleteStart, CategoryDeleteSuccess, CategoryDeleteFailure } = CategoryDeleteSlice.actions;
export default CategoryDeleteSlice.reducer;
