import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getWebsiteUrl,API_ENDPOINTS } from '@/api/apiService';

export const getAllFaqApi = createApi({
    reducerPath: 'getAllFaqApi',
    baseQuery: fetchBaseQuery({ baseUrl: getWebsiteUrl() }),
    endpoints: (builder) => ({
        getAllFaq: builder.query({
            query: (domain) => API_ENDPOINTS.GET_ALL_FAQ(domain),
        }),
    }),
});

export const { useGetAllFaqQuery } = getAllFaqApi;
