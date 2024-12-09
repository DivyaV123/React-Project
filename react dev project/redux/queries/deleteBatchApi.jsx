
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const batchDeleteApi = createApi({
    reducerPath: 'batchDeleteApi',
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
        batchDelete: builder.mutation({
            query: ({ batchId }) => ({
                url: API_ENDPOINTS.DELETE_BATCH(batchId),
                method: 'DELETE',
            })
        })
    })
});

export const { useBatchDeleteMutation } = batchDeleteApi;
