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
                // url: API_ENDPOINTS.LOGIN,
                url: `http://192.168.0.21:8080/api/v1/batches${branchId ? `?branchId=${branchId}` : ''}&courseId=${courseId}`,
                method: 'POST',
                body: bodyData,
            }),
        }),
    }),
});

export const { useAddBatchApiMutation } = addBatchApi;
