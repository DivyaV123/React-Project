import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        loginData: [],
        error: ''
    },
    reducers: {
        getAllLoginStart(state) {
            state.isLoading = true;
        },
        getAllLoginSuccess(state, action) {
            state.isLoading = false;
            state.loginData = action.payload;
        },
        getAllLoginFailure(state, action) {
            state.isLoading = false;
            state.loginData = [];
            state.error = action.payload;   
        },
    },
});

export const { getAllCityStart, getAllLoginSuccess, getAllLoginFailure } = loginSlice.actions;
export default loginSlice.reducer;
