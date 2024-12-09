import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';
export const ThroughOutSixtyApi = createApi({
  reducerPath: 'ThroughOutSixtyApi',
  baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }), 
  endpoints: (builder) => ({
    getThroughOutSixty: builder.query({
      query: () => API_ENDPOINTS.GET_THROUGH_OUT_SIXTY,     
    }),
  }),
});

export const { useGetThroughOutSixtyQuery } = ThroughOutSixtyApi;
