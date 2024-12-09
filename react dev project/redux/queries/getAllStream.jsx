import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const streamApi = createApi({
    reducerPath: 'streamApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllStream: builder.query({
            query: (name) => API_ENDPOINTS.GET_STREAM(name),
        }),
    }),
});

export const { useGetAllStreamQuery } = streamApi;
