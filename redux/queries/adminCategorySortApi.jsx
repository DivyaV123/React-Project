import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBaseUrl, API_ENDPOINTS } from '@/api/apiService';

export const adminCategorySortApi = createApi({
    reducerPath: 'adminCategorySortApi',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        getAllCategory: builder.query({
            query: ({ organizationType }) => API_ENDPOINTS.GET_ALL_CATEGORY(organizationType),
        }),
    }),
});

export const { useGetAllCategoryQuery } = adminCategorySortApi;
