import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD2_URL } from '@/lib/RouteConstants';

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: PROD2_URL }),
    endpoints: (builder) => ({
        getAllCategories: builder.query({
            query: () => 'api/v1/categories/getall',
        }),
    })
});

export const { useGetAllCategoriesQuery } = categoriesApi;  