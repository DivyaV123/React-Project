import { createSlice } from "@reduxjs/toolkit";

const StatesSlice = createSlice({
    name: 'states',
    initialState: {
        isLoading: false,
        statesData: [],
        error: ''
    },
    reducers: {
        getAllStatesStart(state) {
            state.isLoading = true;
        },
        getAllStatesSuccess(state, action) {
            state.isLoading = false;
            state.statesData = action.payload;
        },
        getAllStatesFailure(state, action) {
            state.isLoading = false;
            state.statesData = [];
            state.error = action.payload;
        },
    },
});

export const { getAllStatesStart, getAllStatesSuccess, getAllStatesFailure } = StatesSlice.actions;
export default StatesSlice.reducer;
