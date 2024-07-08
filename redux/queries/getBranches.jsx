import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';

export const PlacementBranchApi = createApi({
    reducerPath: 'PlacementBranchApi',
    baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }),
    endpoints: (builder) => ({
        getAllPlacementBranch: builder.query({
            query: () => API_ENDPOINTS.GET_BRANCH,
        }),
    }),
});

export const { useGetAllPlacementBranchQuery } = PlacementBranchApi;
