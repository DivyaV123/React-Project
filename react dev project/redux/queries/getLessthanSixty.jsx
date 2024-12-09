import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';
export const LessthanSixtyApi = createApi({
  reducerPath: 'LessthanSixtyApi',
  baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }), 
  endpoints: (builder) => ({
    getLessthanSixty: builder.query({
      query: (pageNo = 0, pageSize = 10) => API_ENDPOINTS.GET_LESS_THAN_SIXTY(pageNo,pageSize),     
    }),
  }),
});

export const { useGetLessthanSixtyQuery } = LessthanSixtyApi;
