import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';

export const degreeAndStreamApi = createApi({
    reducerPath: 'degreeAndStreamApi',
    baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }),
    endpoints: (builder) => ({
        getAllDegreeAndStream: builder.query({
            query: () => API_ENDPOINTS.GET_DEGREE,
        }),
    }),
});

export const { useGetAllDegreeAndStreamQuery } = degreeAndStreamApi;
