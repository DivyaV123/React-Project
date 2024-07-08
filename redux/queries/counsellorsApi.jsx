
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const counsellorsApi = createApi({
  reducerPath: 'counsellorsApi',
  baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }),
  endpoints: (builder) => ({
    fetchCounsellors: builder.query({
      query: ({ pageNumber = 0, pageSize = 5, parameter="", bodyData }) => ({
        url: API_ENDPOINTS.COUNSELLOR_FILTER(pageNumber,pageSize,parameter),
        method: 'POST',
        body: bodyData
      })
    })
  })
});

export const { useFetchCounsellorsQuery } = counsellorsApi;
