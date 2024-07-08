import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';
export const ItandNonItApi = createApi({
  reducerPath: 'ItandNonItApi',
  baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }), 
  endpoints: (builder) => ({
    getItandNonIt: builder.query({
      query: (course) => API_ENDPOINTS.GET_IT_AND_NON_IT(course),     
    }),
  }),
});

export const { useGetItandNonItQuery } = ItandNonItApi;
