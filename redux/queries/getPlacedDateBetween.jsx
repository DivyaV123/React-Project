import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import dayjs from "dayjs";
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';
const today = dayjs().format("YYYY-MM-DD")

export const PlacedDateBetweenApi = createApi({
  reducerPath: 'PlacedDateBetweenApi',
  baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }), 
  endpoints: (builder) => ({
    getPlacedDateBetween: builder.query({
      query: (startDate = today, endDate = today,pageNo = 0, pageSize = 10) => API_ENDPOINTS.GET_PLACED_BETWEEN(startDate,endDate,pageNo,pageSize),     
    }),
  }),
});

export const { useGetPlacedDateBetweenQuery } = PlacedDateBetweenApi;
