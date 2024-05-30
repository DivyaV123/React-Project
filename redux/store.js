import { configureStore } from '@reduxjs/toolkit';
import { courseApi } from './queries/getAllCourses';
import CourseReducer from './slices/courses/CourseSlice';
import { PlacementCountApi } from './queries/getAllPlacementCount';
import PlacementCountReducer from './slices/placementCount/PlacementCountSlice';
import LessthanSixtySliceReducer from './slices/placementCount/LessthanSixtySlice';
import { LessthanSixtyApi } from './queries/getLessthanSixty';
import ThroughOutSixtyReducer from './slices/placementCount/ThroughOutSixtySlice';
import { ThroughOutSixtyApi } from './queries/getThroughOutSixty';
import ItandNonItReducer from './slices/placementCount/ItandNonItSlice';
import { ItandNonItApi } from './queries/getItandNonIt';
const store = configureStore({
  reducer: {
    [courseApi.reducerPath]: courseApi.reducer, 
    getAllCourses: CourseReducer, 

    [PlacementCountApi.reducerPath]: PlacementCountApi.reducer, 
    getAllPlacementCount: PlacementCountReducer,

    [LessthanSixtyApi.reducerPath]: LessthanSixtyApi.reducer, 
    getAllPlacementCount: LessthanSixtySliceReducer,

    [ThroughOutSixtyApi.reducerPath]: ThroughOutSixtyApi.reducer, 
    getThroughOutSixty: ThroughOutSixtyReducer,

    [ItandNonItApi.reducerPath]: ItandNonItApi.reducer, 
    getItandNonIt: ItandNonItReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware,PlacementCountApi.middleware,LessthanSixtyApi.middleware,ThroughOutSixtyApi.middleware,ItandNonItApi.middleware),
});

export default store;
