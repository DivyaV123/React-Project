import { createSlice } from "@reduxjs/toolkit";

const subCategoryUnMapSlice = createSlice({
    name: 'subCategoryUnMapSlice',
    initialState: {
        isLoading: false,
        subCategoryUnMapData: [],
        error: ''
    },
    reducers: {
        subCategoryUnMapStart(state) {
            state.isLoading = true;
        },
        subCategoryUnMapSuccess(state, action) {
            state.isLoading = false;
            state.subCategoryUnMapData = action.payload;
        },
        subCategoryUnMapFailure(state, action) {
            state.isLoading = false;
            state.subCategoryUnMapData = [];
            state.error = action.payload;
        },
    },
});

export const { subCategoryUnMapStart, subCategoryUnMapSuccess, subCategoryUnMapFailure } = subCategoryUnMapSlice.actions;
export default subCategoryUnMapSlice.reducer;
