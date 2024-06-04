
import { PROD_URL } from '@/lib/RouteConstants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const counsellorsApi = createApi({
  reducerPath: 'counsellorsApi',
  baseQuery: fetchBaseQuery({ baseUrl: PROD_URL }),
  endpoints: (builder) => ({
    fetchCounsellors: builder.query({
      query: ({ pageNumber = 1, pageSize = 5, parameter = 'it', bodyData }) => ({
        url: `candidate/counsellor/filter?pageNumber=${pageNumber}&pageSize=${pageSize}&parameter=${parameter}`,
        method: 'POST',
        body: bodyData
      })
    })
  })
});

export const { useFetchCounsellorsQuery } = counsellorsApi;
