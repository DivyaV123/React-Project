import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_URL } from '@/lib/RouteConstants';

export const degreeAndStreamApi = createApi({
    reducerPath: 'degreeAndStreamApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD_URL }),
    endpoints: (builder) => ({
        getAllDegreeAndStream: builder.query({
            query: () => 'candidate/degreeStream',
        }),
    }),
});

export const { useGetAllDegreeAndStreamQuery } = degreeAndStreamApi;
