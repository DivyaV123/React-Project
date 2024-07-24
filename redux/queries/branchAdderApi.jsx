
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';
export const branchAdderApi = createApi({
    reducerPath: 'branchAdderApi',
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
        branchAdder: builder.mutation({
            query: ({ bodyData }) => ({
                url: API_ENDPOINTS.BRANCH_ADDER,
                method: 'POST',
                body: bodyData
            })
        })
    })
});

export const { useBranchAdderMutation } = branchAdderApi;
