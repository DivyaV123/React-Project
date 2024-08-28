import { createSlice } from "@reduxjs/toolkit";

const AddTrainersSlice = createSlice({
    name: 'addTrainerSlice',
    initialState: {
        isLoading: false,
        trainersData: [],
        error: ''
    },
    reducers: {
        addTrainersStart(state) {
            state.isLoading = true;
        },
        addTrainersSuccess(state, action) {
            state.isLoading = false;
            state.trainersData = action.payload;
        },
        addTrainersFailure(state, action) {
            state.isLoading = false;
            state.trainersData = [];
            state.error = action.payload;
        },
    },
})
export const { addTrainersStart, addTrainersSuccess, addTrainersFailure } = AddTrainersSlice.actions;
export default AddTrainersSlice.reducer;