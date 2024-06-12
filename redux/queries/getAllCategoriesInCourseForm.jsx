import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD2_URL } from '@/lib/RouteConstants';

export const CategoriesInCourseApi = createApi({
    reducerPath: 'CategoriesInCourseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: PROD2_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getAllCategoriesInCourse: builder.query({
            query: () => 'api/v1/categories/getCategory',
        }),
    }),
});

export const { useGetAllCategoriesInCourseQuery } = CategoriesInCourseApi;
