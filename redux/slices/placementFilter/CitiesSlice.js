import { createSlice } from "@reduxjs/toolkit";

const CitiesSlice = createSlice({
    name: 'cities',
    initialState: {
        isLoading: false,
        cityData: [],
        error: ''
    },
    reducers: {
        getAllCityStart(state) {
            state.isLoading = true;
        },
        getAllCitySuccess(state, action) {
            state.isLoading = false;
            state.cityData = action.payload;
        },
        getAllCityFailure(state, action) {
            state.isLoading = false;
            state.cityData = [];
            state.error = action.payload;
        },
    },
});

export const { getAllCityStart, getAllCitySuccess, getAllCityFailure } = CitiesSlice.actions;
export default CitiesSlice.reducer;
