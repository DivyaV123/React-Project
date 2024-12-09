import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl,API_ENDPOINTS } from '@/api/apiService';

export const CategoriesInCourseApi = createApi({
    reducerPath: 'CategoriesInCourseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseUrl(),
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
            query: () => API_ENDPOINTS.GET_CATEGORY_IN_COURSE_FORM,
        }),
    }),
});

export const { useGetAllCategoriesInCourseQuery } = CategoriesInCourseApi;
