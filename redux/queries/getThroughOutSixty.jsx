import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_URL } from '@/lib/RouteConstants';
export const ThroughOutSixtyApi = createApi({
  reducerPath: 'ThroughOutSixtyApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${PROD_URL}` }), 
  endpoints: (builder) => ({
    getThroughOutSixty: builder.query({
      query: () => 'candidate/getThroughOutSixty',     
    }),
  }),
});

export const { useGetThroughOutSixtyQuery } = ThroughOutSixtyApi;
