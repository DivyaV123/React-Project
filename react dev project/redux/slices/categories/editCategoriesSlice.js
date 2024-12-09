import { createSlice } from "@reduxjs/toolkit";

const CategoryEditSlice = createSlice({
    name: 'CategoryEditSlice',
    initialState: {
        isLoading: false,
        CategoryEditData: [],
        error: ''
    },
    reducers: {
        CategoryEditStart(state) {
            state.isLoading = true;
        },
        CategoryEditSuccess(state, action) {
            state.isLoading = false;
            state.CategoryEditData = action.payload;
        },
        CategoryEditFailure(state, action) {
            state.isLoading = false;
            state.CategoryEditData = [];
            state.error = action.payload;
        },
    },
});

export const { CategoryEditStart, CategoryEditSuccess, CategoryEditFailure } = CategoryEditSlice.actions;
export default CategoryEditSlice.reducer;
