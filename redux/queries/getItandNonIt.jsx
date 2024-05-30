import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_URL } from '@/lib/RouteConstants';
export const ItandNonItApi = createApi({
  reducerPath: 'ItandNonItApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${PROD_URL}` }), 
  endpoints: (builder) => ({
    getItandNonIt: builder.query({
      query: (course) => `candidate/getCandidates/${course}`,     
    }),
  }),
});

export const { useGetItandNonItQuery } = ItandNonItApi;
