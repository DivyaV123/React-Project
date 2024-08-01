import { createSlice } from "@reduxjs/toolkit";

const AllCategorySlice = createSlice({
    name: 'AllCategory',
    initialState: {
        isLoading: false,
        categoriesData: [],
        error: ''
    },
    reducers: {
        getAllCategoriesStart(state) {
            state.isLoading = true;
        },
        getAllCategoriesSuccess(state, action) {
            state.isLoading = false;
            state.categoriesData = action.payload;
        },
        getAllCategoriesFailure(state, action) {
            state.isLoading = false;
            state.categoriesData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllCategoriesStart, getAllCategoriesSuccess, getAllCategoriesFailure } = AllCategorySlice.actions;
export default AllCategorySlice.reducer;