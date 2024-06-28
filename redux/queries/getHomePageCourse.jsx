import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD2_URL } from '@/lib/RouteConstants';

export const getHomePageCourseApi = createApi({
    reducerPath: 'getHomePageCourseApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD2_URL }),
    endpoints: (builder) => ({
        getHomePageCourse: builder.query({
            query: () => 'api/v1/categories/findAllCategories',
        }),
    }),
});

export const { useGetHomePageCourseQuery } = getHomePageCourseApi;
