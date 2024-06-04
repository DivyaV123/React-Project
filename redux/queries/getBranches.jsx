import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_URL } from '@/lib/RouteConstants';

export const PlacementBranchApi = createApi({
    reducerPath: 'PlacementBranchApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD_URL }),
    endpoints: (builder) => ({
        getAllPlacementBranch: builder.query({
            query: () => 'candidate/branch',
        }),
    }),
});

export const { useGetAllPlacementBranchQuery } = PlacementBranchApi;
