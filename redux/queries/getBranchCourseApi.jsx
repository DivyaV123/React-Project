import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl,API_ENDPOINTS } from '@/api/apiService';

export const branchCourseApi = createApi({
    reducerPath: 'branchCourseApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        getAllBranchCourse: builder.query({
            query: () => API_ENDPOINTS.VIEW_ALL_COURSES,
        }),
    }),
});

export const { useGetAllBranchCourseQuery } = branchCourseApi;
