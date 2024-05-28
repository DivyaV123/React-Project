import { configureStore } from '@reduxjs/toolkit';
import { courseApi } from './queries/getAllCourses';
import CourseReducer from './slices/courses/CourseSlice';

const store = configureStore({
  reducer: {
    [courseApi.reducerPath]: courseApi.reducer, 
    getAllCourses: CourseReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware),
});

export default store;
