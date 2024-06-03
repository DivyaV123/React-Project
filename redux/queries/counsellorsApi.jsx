// api/counsellorsApi.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const counsellorsApi = createApi({
  reducerPath: 'counsellorsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://37.61.213.213:8090/' }),
  endpoints: (builder) => ({
    fetchCounsellors: builder.query({
      query: ({ pageNumber=1, pageSize=5, parameter='it', bodyData }) => ({
        url: `candidate/counsellor/filter?pageNumber=${pageNumber}&pageSize=${pageSize}&parameter=${parameter}`,
        method: 'POST',
        body: bodyData
      })
    })
  })
});

export const { useFetchCounsellorsQuery } = counsellorsApi;
