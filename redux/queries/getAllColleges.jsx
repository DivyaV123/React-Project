import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';

export const collegesApi = createApi({
    reducerPath: 'collegesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }),
    endpoints: (builder) => ({
        getAllColleges: builder.query({
            query: (university) => ({
                url: API_ENDPOINTS.GET_COLLEGES,
                method: 'POST',
                body: university
            })
        }),
    }),
});

export const { useGetAllCollegesQuery } = collegesApi;
