import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';
export const studentFilteredForBranch = createApi({
  reducerPath: 'studentFilteredForBranch',
  baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }), 
  endpoints: (builder) => ({
    stuBranchFilter: builder.query({
      query: ({branchID}) => API_ENDPOINTS.STUDENT_FILTER_FOR_BRANCH(branchID),     
    }),
  }),
});

export const { useStuBranchFilterQuery } = studentFilteredForBranch;
