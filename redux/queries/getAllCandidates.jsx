import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const citiesApi = createApi({
    reducerPath: 'citiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD_URL }),
    endpoints: (builder) => ({
        getAllCities: builder.query({
            query: (state) => ({
                url: 'candidate/cities',
                method: 'POST',
                body: state
            }),
        }),
    }),
});

export const { useGetAllCitiesQuery } = citiesApi;
