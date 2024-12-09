import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getWebsiteUrl,API_ENDPOINTS } from '@/api/apiService';

export const getAllBranchesApi = createApi({
    reducerPath: 'getAllBranchesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getWebsiteUrl() }),
    endpoints: (builder) => ({
        getAllBranches: builder.query({
            query: (domain) => API_ENDPOINTS.GET_ALL_BRANCHES(domain),
        }),
    }),
});

export const { useGetAllBranchesQuery } = getAllBranchesApi;
