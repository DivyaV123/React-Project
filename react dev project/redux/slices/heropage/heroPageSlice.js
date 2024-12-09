import { createSlice } from "@reduxjs/toolkit";

const HeroPageSlice = createSlice({
    name: 'getAllHeroPage',
    initialState: {
        isLoading: false,
        heroPageData: [],
        error: ''
    },
    reducers: {
        getAllHeroPageStart(state) {
            state.isLoading = true;
        },
        getAllHeroPageSuccess(state, action) {
            state.isLoading = false;
            state.heroPageData = action.payload;
        },
        getAllHeroPageFailure(state, action) {
            state.isLoading = false;
            state.heroPageData = [];
            state.error = action.payload;
        },
    },
})
export const { getAllHeroPageStart, getAllHeroPageSuccess, getAllHeroPageFailure } = HeroPageSlice.actions;
export default HeroPageSlice.reducer;