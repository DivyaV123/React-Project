import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';

export const addBatchApi = createApi({
    reducerPath: 'addBatchApi',
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
        addBatchApi: builder.mutation({
            query: ({ bodyData, branchId, courseId }) => ({
                url: API_ENDPOINTS.CREATE_BATCH(branchId, courseId),
                method: 'POST',
                body: bodyData,
            }),
        }),
    }),
});

export const { useAddBatchApiMutation } = addBatchApi;
