import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD2_URL } from '@/lib/RouteConstants';

export const CategoriesInCourseApi = createApi({
    reducerPath: 'CategoriesInCourseApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD2_URL }),
    endpoints: (builder) => ({
        getAllCategoriesInCourse: builder.query({
            query: () => 'api/v1/categories/getCategory',
        }),
    }),
});

// Ensure the query hook is named correctly
export const { useGetAllCategoriesInCourseQuery } = CategoriesInCourseApi;
