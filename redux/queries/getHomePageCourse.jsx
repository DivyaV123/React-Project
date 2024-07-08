import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl,API_ENDPOINTS } from '@/api/apiService';

export const getHomePageCourseApi = createApi({
    reducerPath: 'getHomePageCourseApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        getHomePageCourse: builder.query({
            query: () => API_ENDPOINTS.FIND_ALL_CATEGORIES,
        }),
    }),
});

export const { useGetHomePageCourseQuery } = getHomePageCourseApi;
