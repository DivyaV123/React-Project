import { createSlice } from "@reduxjs/toolkit";

const PlacementListSlice = createSlice({
    name: 'PlacementList',
    initialState: {
        isLoading: false,
        PlacementListData: [],
        error: ''
    },
    reducers: {
        getAllPlacementListStart(state) {
            state.isLoading = true;
        },
        getAllPlacementListSuccess(state, action) {
            state.isLoading = false;
            state.PlacementListData = action.payload;
        },
        getAllPlacementListFailure(state, action) {
            state.isLoading = false;
            state.PlacementListData = [];
            state.error = action.payload;
        },
    },
});

export const { getAllPlacementListStart, getAllPlacementListSuccess, getAllPlacementListFailure } = PlacementListSlice.actions;
export default PlacementListSlice.reducer;
