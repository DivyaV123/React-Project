import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const streamApi = createApi({
    reducerPath: 'streamApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllStream: builder.query({
            query: (type_id,id,degree_id) => API_ENDPOINTS.GET_STREAM(type_id,id,degree_id),
        }),
    }),
});

export const { useGetAllStreamQuery } = streamApi;
