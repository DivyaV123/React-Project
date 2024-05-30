import { createSlice } from "@reduxjs/toolkit";

const UniversitiesSlice = createSlice({
    name: 'universities',
    initialState: {
        isLoading: false,
        universitiesData: [],
        error: ''
    },
    reducers: {
        getAlluniversitiesStart(state) {
            state.isLoading = true;
        },
        getAlluniversitiesSuccess(state, action) {
            state.isLoading = false;
            state.universitiesData = action.payload;
        },
        getAlluniversitiesFailure(state, action) {
            state.isLoading = false;
            state.universitiesData = [];
            state.error = action.payload;
        },
    },
});

export const { getAlluniversitiesStart, getAlluniversitiesSuccess, getAlluniversitiesFailure } = UniversitiesSlice.actions;
export default UniversitiesSlice.reducer;
