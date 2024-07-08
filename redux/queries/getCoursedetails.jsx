import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl,API_ENDPOINTS } from '@/api/apiService';

export const courseDetailsApi = createApi({
    reducerPath: 'courseDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        getAllCourseDetails: builder.query({
            query: (courseId) =>API_ENDPOINTS.GET_ALL_COURSES_BY_COURSE_ID(courseId) ,
        }),
    }),
});

export const { useGetAllCourseDetailsQuery } = courseDetailsApi;
