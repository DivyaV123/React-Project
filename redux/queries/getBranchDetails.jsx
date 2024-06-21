import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD2_URL } from '@/lib/RouteConstants';

export const beancheDetailsApi = createApi({
    reducerPath: 'beancheDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD2_URL }),
    endpoints: (builder) => ({
        getAllBranchDetails: builder.query({
            query: ({ courseId, branchId }) => `/api/v1/branches/getbyid?branchId=${branchId}&courseId=${courseId}`,
        }),
    }),
});

export const { useGetAllBranchDetailsQuery } = beancheDetailsApi;
