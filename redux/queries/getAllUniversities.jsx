import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_URL } from '@/lib/RouteConstants';

export const universitiesApi = createApi({
    reducerPath: ' universitiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD_URL }),
    endpoints: (builder) => ({
        getAllUniversities: builder.query({
            query: () => 'candidate/universities',
        }),
    }),
});

export const { useGetAllUniversitiesQuery } = universitiesApi;
