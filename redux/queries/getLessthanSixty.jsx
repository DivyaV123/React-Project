import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_URL } from '@/lib/RouteConstants';
export const LessthanSixtyApi = createApi({
  reducerPath: 'LessthanSixtyApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${PROD_URL}` }), 
  endpoints: (builder) => ({
    getLessthanSixty: builder.query({
      query: (pageNo = 0, pageSize = 10) => `candidate/lessThanSixty?pageNo=${pageNo}&pageSize=${pageSize}`,     
    }),
  }),
});

export const { useGetLessthanSixtyQuery } = LessthanSixtyApi;
