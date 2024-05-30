import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_URL } from '@/lib/RouteConstants';

export const statesApi = createApi({
    reducerPath: 'statesApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD_URL }),
    endpoints: (builder) => ({
        getAllStates: builder.query({
            query: () => 'candidate/states',
        }),
    }),
});

export const { useGetAllStatesQuery } = statesApi;
