import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const PlacementBranchApi = createApi({
    reducerPath: 'PlacementBranchApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllPlacementBranch: builder.query({
            query: (organization_id, id) => API_ENDPOINTS.GET_BRANCH(organization_id, id),
        }),
    }),
});

export const { useGetAllPlacementBranchQuery } = PlacementBranchApi;
