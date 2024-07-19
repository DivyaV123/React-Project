
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const categoryUnMapApi = createApi({
    reducerPath: 'categoryUnMapApi',
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
        categoryUnMap: builder.mutation({
            query: ({ bodyData, categoryId }) => ({
                url: API_ENDPOINTS.CATEGORY_UNMAP(categoryId),
                method: 'DELETE',
                body: bodyData
            })
        })
    })
});

export const { useCategoryUnMapMutation } = categoryUnMapApi;
