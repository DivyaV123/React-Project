import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';


export const PlacementCountApi = createApi({
  reducerPath: 'PlacementCountApi',
  baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }), 
  endpoints: (builder) => ({
    getAllPlacementCount: builder.query({
      query: () => API_ENDPOINTS.GET_PLACEMENT_COUNTS,     
    }),
  }),
});

export const {useGetAllPlacementCountQuery}=PlacementCountApi
