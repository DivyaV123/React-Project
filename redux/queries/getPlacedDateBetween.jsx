import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_URL } from '@/lib/RouteConstants';
import dayjs from "dayjs";
const today = dayjs().format("YYYY-MM-DD")

export const PlacedDateBetweenApi = createApi({
  reducerPath: 'PlacedDateBetweenApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${PROD_URL}` }), 
  endpoints: (builder) => ({
    getPlacedDateBetween: builder.query({
      query: (startDate = today, endDate = today,pageNo = 0, pageSize = 10) => `candidate/placedDate?startDate=${startDate}&endDate=${endDate}&pageNumber=${pageNo}&size=${pageSize}`,     
    }),
  }),
});

export const { useGetPlacedDateBetweenQuery } = PlacedDateBetweenApi;
