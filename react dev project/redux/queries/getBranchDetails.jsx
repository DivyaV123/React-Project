import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getWebsiteUrl ,API_ENDPOINTS} from '@/api/apiService';

export const beancheDetailsApi = createApi({
    reducerPath: 'beancheDetailsApi',
    baseQuery: fetchBaseQuery({ baseUrl: getWebsiteUrl() }),
    endpoints: (builder) => ({
        getAllBranchDetails: builder.query({
            query: ({ courseId, branchId }) => API_ENDPOINTS.GET_BRANCH_BY_COURSE_ID_AND_BRANCH_ID(courseId,branchId),
        }),
    }),
});

export const { useGetAllBranchDetailsQuery } = beancheDetailsApi;
