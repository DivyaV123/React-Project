
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const subCategortyUnMapApi = createApi({
    reducerPath: 'subCategortyUnMapApi',
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
        subCategortyUnMap: builder.mutation({
            query: ({ bodyData, subCategoryId }) => ({
                url: API_ENDPOINTS.SUBCATEGORY_UNMAP(subCategoryId),
                method: 'DELETE',
                body: bodyData
            })
        })
    })
});

export const { useSubCategortyUnMapMutation } = subCategortyUnMapApi;
