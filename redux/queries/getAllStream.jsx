import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const streamApi = createApi({
    reducerPath: 'streamApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllStream: builder.query({
            query: (type_id,id,degree_id,per_page=500) => API_ENDPOINTS.GET_STREAM(type_id,id,degree_id,per_page),
        }),
    }),
});

export const { useGetAllStreamQuery } = streamApi;
