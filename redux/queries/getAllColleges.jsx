import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_URL } from '@/lib/RouteConstants';

export const collegesApi = createApi({
    reducerPath: 'collegesApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD_URL }),
    endpoints: (builder) => ({
        getAllColleges: builder.query({
            query: () => 'candidate/colleges',
        }),
    }),
});

export const { useGetAllCollegesQuery } = collegesApi;
