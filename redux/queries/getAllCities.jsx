import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const citiesApi = createApi({
    reducerPath: 'citiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (state_id) => API_ENDPOINTS.GET_CITIES(state_id),
        }),
    }),
});

export const { useGetAllCitiesQuery } = citiesApi;
