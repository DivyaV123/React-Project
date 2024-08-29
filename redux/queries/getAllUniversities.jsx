import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getStatisticsUrl } from '@/api/apiService';

export const universitiesApi = createApi({
    reducerPath: ' universitiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getStatisticsUrl() }),
    endpoints: (builder) => ({
        getAllUniversities: builder.query({
            query: (id) => API_ENDPOINTS.GET_UNIVERSITIES(id),
        }),
    }),
});

export const { useGetAllUniversitiesQuery } = universitiesApi;
