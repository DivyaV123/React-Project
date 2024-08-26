import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS ,getBaseUrl} from '@/api/apiService';

export const batchListApi = createApi({
    reducerPath: 'batchListApi',
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
        getAllBatch: builder.query({
            query: ({ organizationType }) => API_ENDPOINTS.GET_ALL_BATCHES(organizationType),
        }),
    }),
});

export const { useGetAllBatchQuery } = batchListApi;
