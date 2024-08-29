import { createSlice } from "@reduxjs/toolkit";

const OrganisationSlice = createSlice({
    name: 'organisation',
    initialState: {
        isLoading: false,
        orgData: [],
        error: ''
    },
    reducers: {
        getAllOrganisationStart(state) {
            state.isLoading = true;
        },
        getAllOrganisationSuccess(state, action) {
            state.isLoading = false;
            state.orgData = action.payload;
        },
        getAllOrganisationFailure(state, action) {
            state.isLoading = false;
            state.orgData = [];
            state.error = action.payload;
        },
    },
});

export const { getAllOrganisationStart, getAllOrganisationSuccess, getAllOrganisationFailure } = OrganisationSlice.actions;
export default OrganisationSlice.reducer;
