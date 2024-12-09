import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const degreeAndStreamApi = createApi({
    reducerPath: 'degreeAndStreamApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllDegreeAndStream: builder.query({
            query: (name) => API_ENDPOINTS.GET_DEGREE(name),
        }),
    }),
});

export const { useGetAllDegreeAndStreamQuery } = degreeAndStreamApi;
