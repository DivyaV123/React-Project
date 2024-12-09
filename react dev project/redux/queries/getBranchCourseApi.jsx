import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getWebsiteUrl,API_ENDPOINTS } from '@/api/apiService';

export const branchCourseApi = createApi({
    reducerPath: 'branchCourseApi',
    baseQuery: fetchBaseQuery({ baseUrl: getWebsiteUrl() }),
    endpoints: (builder) => ({
        getAllBranchCourse: builder.query({
            query: (domain) => API_ENDPOINTS.VIEW_ALL_COURSES(domain),
        }),
    }),
});

export const { useGetAllBranchCourseQuery } = branchCourseApi;
