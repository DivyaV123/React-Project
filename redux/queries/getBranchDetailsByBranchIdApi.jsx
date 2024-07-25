import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';

export const getBranchDetailsByBranchIdApi = createApi({
    reducerPath: 'getBranchDetailsByBranchIdApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        getBranchDetailsById: builder.query({
            query: ({ branchId }) => API_ENDPOINTS.GET_BRANCH_BY_BRANCHID(branchId),
        }),
    }),
});

export const { useGetBranchDetailsByIdQuery } = getBranchDetailsByBranchIdApi;
