import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const PlacementBranchApi = createApi({
    reducerPath: 'PlacementBranchApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllPlacementBranch: builder.query({
            query: (name) => API_ENDPOINTS.GET_BRANCH(name),
        }),
    }),
});

export const { useGetAllPlacementBranchQuery } = PlacementBranchApi;
