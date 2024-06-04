import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_URL } from '@/lib/RouteConstants';

export const YearOfPassoutApi = createApi({
    reducerPath: ' YearOfPassoutApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD_URL }),
    endpoints: (builder) => ({
        getAllYearOfPassout: builder.query({
            query: () => 'candidate/passoutyear',
        }),
    }),
});

export const { useGetAllYearOfPassoutQuery } = YearOfPassoutApi;
