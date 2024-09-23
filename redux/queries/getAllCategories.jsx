import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getWebsiteUrl,API_ENDPOINTS } from '@/api/apiService';
export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getWebsiteUrl() }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: (domain) => API_ENDPOINTS.GET_ALL_CATEGORIES(domain),
        }),
    })
});

export const { useGetAllCategoriesQuery } = categoriesApi;  