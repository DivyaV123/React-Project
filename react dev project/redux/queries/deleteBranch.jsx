
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const BranchDeleteApi = createApi({
    reducerPath: 'BranchDeleteApi',
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
        BranchDelete: builder.mutation({
            query: ({ branchId }) => ({
                url: API_ENDPOINTS.DELETE_BRANCH(branchId),
                method: 'DELETE',
            })
        })
    })
});

export const { useBranchDeleteMutation } = BranchDeleteApi;
