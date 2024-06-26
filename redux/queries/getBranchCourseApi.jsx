import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD2_URL } from '@/lib/RouteConstants';

export const branchCourseApi = createApi({
    reducerPath: 'branchCourseApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD2_URL }),
    endpoints: (builder) => ({
        getAllBranchCourse: builder.query({
            query: () => 'api/v1/courses/viewAll',
        }),
    }),
});

export const { useGetAllBranchCourseQuery } = branchCourseApi;
