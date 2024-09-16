import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getWebsiteUrl,API_ENDPOINTS } from '@/api/apiService';

export const getHeroPageApi = createApi({
    reducerPath: 'getHeroPageApi',
    baseQuery: fetchBaseQuery({ baseUrl: getWebsiteUrl() }),
    endpoints: (builder) => ({
        getHeroPage: builder.query({
            query: (domain) => API_ENDPOINTS.GET_HERO_PAGE_DATA(domain),
        }),
    }),
});

export const { useGetHeroPageQuery } = getHeroPageApi;
