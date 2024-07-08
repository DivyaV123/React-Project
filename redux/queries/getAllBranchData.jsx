import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl,API_ENDPOINTS } from '@/api/apiService';

export const getAllBranchesApi = createApi({
    reducerPath: 'getAllBranchesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        getAllBranches: builder.query({
            query: () => API_ENDPOINTS.GET_ALL_BRANCHES,
        }),
    }),
});

export const { useGetAllBranchesQuery } = getAllBranchesApi;
