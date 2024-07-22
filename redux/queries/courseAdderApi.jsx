
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const courseAdderApi = createApi({
    reducerPath: 'courseAdderApi',
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
        courseAdder: builder.mutation({
            query: ({ bodyData, categoryId, subCategoryId }) => ({
                url: API_ENDPOINTS.ADDCOURES_WITHFILE(categoryId, subCategoryId),
                method: 'POST',
                body: bodyData
            })
        })
    })
});

export const { useCourseAdderMutation } = courseAdderApi;
