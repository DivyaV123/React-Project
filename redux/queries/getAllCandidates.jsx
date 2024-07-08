import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';

export const citiesApi = createApi({
    reducerPath: 'citiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }),
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (state) => ({
                url: API_ENDPOINTS.GET_CITIES,
                method: 'POST',
                body: state
            }),
        }),
    }),
});

export const { useGetAllCitiesQuery } = citiesApi;
