
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const subCategoryDeleteApi = createApi({
    reducerPath: 'subCategoryDeleteApi',
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
        subCategoryDelete: builder.mutation({
            query: ({ subCategoryId }) => ({
                url: API_ENDPOINTS.DELETE_SUBCATEGORY(subCategoryId),
                method: 'DELETE',
            })
        })
    })
});

export const { useSubCategoryDeleteMutation } = subCategoryDeleteApi;
