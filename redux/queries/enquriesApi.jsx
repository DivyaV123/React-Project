import { PROD2_URL } from '@/lib/RouteConstants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const enquriesApi = createApi({
    reducerPath: 'enquriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD2_URL }),
    endpoints: (builder) => ({
        enquries: builder.mutation({
            query: (state) => ({
                url: 'api/v1/enquiry',
                method: 'POST',
                body: state
            }),
            invalidatesTags: ["enquriesApi"]
        }),
    }),
});

export const { useEnquriesMutation } = enquriesApi;
