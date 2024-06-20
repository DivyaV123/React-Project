import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD2_URL } from '@/lib/RouteConstants';

export const getAllBranchesApi = createApi({
    reducerPath: 'getAllBranchesApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD2_URL }),
    endpoints: (builder) => ({
        getAllBranches: builder.query({
            query: () => 'api/v1/branches/getAll',
        }),
    }),
});

export const { useGetAllBranchesQuery } = getAllBranchesApi;
