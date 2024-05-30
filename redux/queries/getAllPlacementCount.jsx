import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_URL } from '@/lib/RouteConstants';

export const PlacementCountApi = createApi({
  reducerPath: 'PlacementCountApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${PROD_URL}` }), 
  endpoints: (builder) => ({
    getAllPlacementCount: builder.query({
      query: () => '/candidate/getCounts',     
    }),
  }),
});

export const {useGetAllPlacementCountQuery}=PlacementCountApi
