import { createSlice } from "@reduxjs/toolkit";

const AllCitiesAdminSlice = createSlice({
    name: 'AllCitiesAdmin',
    initialState: {
        isLoading: false,
        citiesData: [],
        error: ''
    },
    reducers: {
        getAllCitiesStart(state) {
            state.isLoading = true;
        },
        getAllCitiesSuccess(state, action) {
            state.isLoading = false;
            state.categoriesData = action.payload;
        },
        getAllCitiesFailure(state, action) {
            state.isLoading = false;
            state.categoriesData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllCitiesStart, getAllCitiesSuccess, getAllCitiesFailure } = AllCitiesAdminSlice.actions;
export default AllCitiesAdminSlice.reducer;