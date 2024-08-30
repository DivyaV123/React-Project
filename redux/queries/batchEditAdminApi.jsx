import { getBaseUrl ,API_ENDPOINTS} from '@/api/apiService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const editBatch = createApi({
    reducerPath: 'editBatch',
   
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
        editBatchAdmin: builder.mutation({
            query: ({payload,batchId}) => ({
                url: API_ENDPOINTS.EDIT_BATCH(batchId),
                method: 'PATCH',
                body: payload
            }),
            invalidatesTags : ["editBatch"]
        }),
    }),
});

export const { useEditBatchAdminMutation } = editBatch;
