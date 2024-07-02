import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD2_URL } from '@/lib/RouteConstants';

export const getAllFaqApi = createApi({
    reducerPath: 'getAllFaqApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD2_URL }),
    endpoints: (builder) => ({
        getAllFaq: builder.query({
            query: (domain) => `api/v1/faqs?organization=${domain}`,
        }),
    }),
});

export const { useGetAllFaqQuery } = getAllFaqApi;
