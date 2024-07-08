import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ENDPOINTS, getPlacementUrl } from '@/api/apiService';

export const universitiesApi = createApi({
    reducerPath: ' universitiesApi',
    baseQuery: fetchBaseQuery({ baseUrl: getPlacementUrl() }),
    endpoints: (builder) => ({
        getAllUniversities: builder.query({
            query: () => API_ENDPOINTS.GET_UNIVERSITIES,
        }),
    }),
});

export const { useGetAllUniversitiesQuery } = universitiesApi;
