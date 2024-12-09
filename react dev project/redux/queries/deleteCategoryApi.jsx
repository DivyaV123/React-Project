
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const categoryDeleteApi = createApi({
    reducerPath: 'categoryDeleteApi',
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
        CategoryDelete: builder.mutation({
            query: ({ categoryId }) => ({
                url: API_ENDPOINTS.DELETE_CATEGORY(categoryId),
                method: 'DELETE',
            })
        })
    })
});

export const { useCategoryDeleteMutation } = categoryDeleteApi;
