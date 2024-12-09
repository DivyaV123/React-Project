import { createSlice } from "@reduxjs/toolkit";

const DegreeAndStreamSlice = createSlice({
    name: 'degreeAndStream',
    initialState: {
        isLoading: false,
        degreeAndStreamData: [],
        error: ''
    },
    reducers: {
        getAllDegreeAndStreamStart(state) {
            state.isLoading = true;
        },
        getAllDegreeAndStreamSuccess(state, action) {
            state.isLoading = false;
            state.degreeAndStreamData = action.payload;
        },
        getAllDegreeAndStreamFailure(state, action) {
            state.isLoading = false;
            state.degreeAndStreamData = [];
            state.error = action.payload;
        },
    },
});

export const { getAllDegreeAndStreamStart, getAllDegreeAndStreamSuccess, getAllDegreeAndStreamFailure } = DegreeAndStreamSlice.actions;
export default DegreeAndStreamSlice.reducer;
