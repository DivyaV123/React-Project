import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD2_URL } from '@/lib/RouteConstants';

export const courseDetailsApi = createApi({
    reducerPath: 'courseDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD2_URL }),
    endpoints: (builder) => ({
        getAllCourseDetails: builder.query({
            query: (courseId) => `/api/v1/courses/getbyid?courseId=${courseId}`,
        }),
    }),
});

export const { useGetAllCourseDetailsQuery } = courseDetailsApi;
