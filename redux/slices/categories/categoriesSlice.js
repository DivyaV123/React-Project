    import { createSlice } from "@reduxjs/toolkit";

    const CategoriesSlice = createSlice({
        name: 'getAllCategories',
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
    export const { getAllCategoriesStart, getAllCategoriesSuccess, getAllCategoriesFailure } = CategoriesSlice.actions;
    export default CategoriesSlice.reducer;