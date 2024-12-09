import { createSlice } from "@reduxjs/toolkit";

const GetAllTrainersSlice = createSlice({
    name: 'getAllTrainersSlice',
    initialState: {
        isLoading: false,
        trainersData: [],
        error: ''
    },
    reducers: {
        getAllTrainersStart(state) {
            state.isLoading = true;
        },
        getAllTrainersSuccess(state, action) {
            state.isLoading = false;
            state.trainersData = action.payload;
        },
        getAllTrainersFailure(state, action) {
            state.isLoading = false;
            state.trainersData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllTrainersStart, getAllTrainersSuccess, getAllTrainersFailure } = GetAllTrainersSlice.actions;
export default GetAllTrainersSlice.reducer;